<template>
  <div>hello world</div>
</template>

<script setup lang="ts">
type Props = {
  ticker: string
  date: string
}

const props = defineProps<Props>()

const data = await $fetch('/api/yfinance', {
  method: 'POST',
  body: {
    ticker: props.ticker,
    date: props.date
  }
})

console.log('Response:', data)
</script>
