<script setup lang="ts">
  const { data } = await useFetch('/api/trades')
  console.log(data) 
</script>

<template>
  <div>{{data}}</div>
</template>
