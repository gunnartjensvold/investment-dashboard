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
  <div class="flex flex-col h-full overflow-y-scroll">
    <div v-if="pending">Loading...</div>
    <div v-else>
      <ClientOnly>
        <template #default>
          <ChartsChart></ChartsChart>
        </template>
      </ClientOnly>
      <div>
        <h1 class="text-3xl font-semibold mb-6">Recent trades</h1>
      </div>
      <ul class="flex flex-wrap gap-4">
        <li
          v-for="(trade, index) in processedTrades"
          :key="trade.id"
        >
          <TradeCard
            :data="trade"
            :index
          ></TradeCard>
        </li>
      </ul>
    </div>
  </div>
</template>
