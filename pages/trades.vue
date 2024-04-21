<script setup lang="ts">
const tradeStore = useTradeStore()

let trades = ref<any[] | null>(null)

onMounted(async () => {
  const tradeData = await tradeStore.getTrades()
  trades.value = tradeData.value
})
</script>

<template>
  <div class="flex flex-col h-full">
    {{ trades?.slice(0, 10) }}
  </div>
</template>
