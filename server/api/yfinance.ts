import yahooFinance from 'yahoo-finance2'



export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  
  const queryOptions = { period1: body.date /* ... */ }
  const result = await yahooFinance.historical(body.ticker, queryOptions)
  return result

})

