<script setup lang="ts">
const { pending, data } = await useLazyAsyncData('trades', () => $fetch('/api/trades'))
</script>

<template>
  <div class="flex flex-col">
    <div v-if="pending">Loading...</div>
    <div v-else>{{ data.slice(0, 10) }}</div>
  </div>
</template>
