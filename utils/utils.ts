type UUID = string

type FinanceData = {
  Price: number
  Status: string
  TradeId: UUID
  InstrumentSymbol: string
  RplConverted: number | null
  Timestamp: string
}

// To tun this file, type npm run test in your terminal and you should she the console.log be output to the terminal window.
export function buildFinanceData(responsedata: FinanceData[]) {
  console.log(responsedata)
  // TODO: Create a map using example syntax :
  // const map = new Map()
  // Create a object to add to the map, example syntax :
  // const example = { id: 'AlaeiTrading_1', open: 1000, close: 2000, type: "Short" }
  // map.add(example.id, example)
  // Now we have created a map and can use map.get(example.id) to get the example object out of the map.
}
