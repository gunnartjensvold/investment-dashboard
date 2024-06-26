type UUID = string

interface FinanceData {
  Price: number
  Status: string // 'OPENED' or 'CLOSED'
  TradeId: UUID
  InstrumentSymbol: string
  RplConverted: number | null
  Timestamp: string
}

export type ClassifiedTrade = {
  id: UUID
  openPrice: number
  closePrice: number
  type: 'Short' | 'Long'
  status: 'Win' | 'Loss'
  instrumentSymbol: string
  timestampOpened: string
  timestampClosed: string
  rpl: number
}

export function buildFinanceData(responsedata: FinanceData[]): Map<UUID, ClassifiedTrade> {
  const tradesMap = new Map<UUID, any>()

  if (!responsedata || responsedata.length === 0) {
    console.error('buildFinanceData: No data provided or empty array')
    return tradesMap // Return an empty map to avoid errors elsewhere
  }

  const groupedData = responsedata.reduce((acc, data) => {
    if (!data.TradeId) {
      console.warn('buildFinanceData: Missing TradeId for data item', data)
      return acc // Skip data items without TradeId
    }
    ;(acc[data.TradeId] = acc[data.TradeId] || []).push(data)
    return acc
  }, {} as Record<UUID, FinanceData[]>)

  Object.values(groupedData).forEach((trades) => {
    if (trades.some((trade) => trade.Status === 'OPENED') && trades.some((trade) => trade.Status === 'CLOSED')) {
      const openedTrade = trades.find((trade) => trade.Status === 'OPENED')
      const closedTrade = trades.find((trade) => trade.Status === 'CLOSED')
      if (openedTrade && closedTrade) {
        const tradeDetails = classifyTrade(openedTrade, closedTrade)
        tradesMap.set(openedTrade.TradeId, tradeDetails)
      } else {
        console.warn('buildFinanceData: Missing either OPENED or CLOSED trade for TradeId', trades[0].TradeId)
      }
    } else {
      console.warn('buildFinanceData: Incomplete pair of trades for TradeId', trades[0]?.TradeId)
    }
  })

  return tradesMap
}

function classifyTrade(openedTrade: FinanceData, closedTrade: FinanceData) {
  const priceChange = closedTrade.Price - openedTrade.Price
  const isPositiveRPL = closedTrade.RplConverted && closedTrade.RplConverted > 0
  const positionType = priceChange > 0 ? 'Short' : 'Long'
  const outcome = isPositiveRPL ? 'Win' : 'Loss'

  return {
    id: openedTrade.TradeId,
    openPrice: openedTrade.Price,
    closePrice: closedTrade.Price,
    type: positionType,
    status: outcome,
    instrumentSymbol: openedTrade.InstrumentSymbol,
    timestampOpened: openedTrade.Timestamp,
    timestampClosed: closedTrade.Timestamp,
    rpl: closedTrade.RplConverted
    
  }
}

export function getDataFromYahoo(ticker: string) {
  const capitalOneMap = {
    'OIL_BRENT': 'BZ=F',
    'GOLD': 'GC=F',
    'US100': '^NDX',
    'HK_50': '^HSI'
  }
  const yahooTicker = capitalOneMap[ticker as keyof typeof capitalOneMap]
  //  const data = yfincane. get ... ()
  data
}
