<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useLazyAsyncData } from '#imports'
import { buildFinanceData, type ClassifiedTrade } from '~/utils/utils' // Ensure this path is correct

const { pending, data } = await useLazyAsyncData('trades', () => $fetch('/api/trades'))
const processedTrades = ref<ClassifiedTrade[]>([])

watchEffect(() => {
  if (data.value && !pending.value) {
    const tradesMap = buildFinanceData(data.value)
    processedTrades.value = Array.from(tradesMap.values())
  }
})
</script>

<template>
  <div class="flex flex-col">
    <div v-if="pending">Loading...</div>
    <div v-else>
      <ul>
        <li
          v-for="trade in processedTrades"
          :key="trade.id"
        >
          Trade ID: {{ trade.id }}, Open Price: {{ trade.openPrice }}, Close Price: {{ trade.closePrice }}, Type: {{ trade.type }}, Status: {{ trade.status }}, Instrument: {{ trade.instrumentSymbol }}, Opened: {{ trade.timestampOpened }}, Closed: {{ trade.timestampClosed }}
        </li>
      </ul>
    </div>
  </div>
</template>
