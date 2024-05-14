import yahooFinance from 'yahoo-finance2'

export default defineEventHandler(async (event) => {
  const query = 'TSLA'
  const queryOptions = { period1: '2021-02-01' /* ... */ }
  const result = await yahooFinance.historical(query, queryOptions)

  console.log(result.at(-1))
  return result
  // yahooFinance.historical(
  //   {
  //     symbol: 'AAPL',
  //     from: '2012-01-01',
  //     to: '2012-12-31'
  //   }
  //   // function (err: any, quotes: any) {
  //   // console.log(err, quotes)
  //   // }
  // )
})
