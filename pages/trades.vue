<script setup lang="ts">
const tradeStore = useTradeStore()
const trades = await tradeStore.getTrades()
</script>

<template>
  <div class="flex flex-col h-full">
    {{ trades?.slice(0, 10) }}
  </div>
</template>
