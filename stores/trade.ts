import { defineStore } from 'pinia'

export const useTradeStore = defineStore('trade', () => {
  const stateTrades = ref()
  const isPending = ref(false)

  const getTrades = async () => {
    if (!stateTrades.value) {
      await fetchTrades()
    }
    return computed(() => stateTrades.value)
  }

  const fetchTrades = async () => {
    isPending.value = true
    const data = await $fetch('/api/trades')
    isPending.value = false
    if (data) {
      stateTrades.value = data
    }
  }

  return { stateTrades, fetchTrades, isPending, getTrades }
})
