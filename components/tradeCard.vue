<template>
  <div class="flex flex-col bg-mantle rounded-md border-2 cursor-pointer border-transparent w-44 hover:border-purple px-2.5 py-2">
    <div class="flex justify-between">
      <span class="font-medium">
        {{ props.data.instrumentSymbol }}
      </span>
      <span class="text-text-secondary"> #{{ props.index + 1 }} </span>
    </div>
    <div class="flex justify-between">
      <span> P/L </span>

      <span
        class="font-medium"
        :class="props.data.rpl > 0 ? 'text-green' : 'text-red'"
      >
        {{ props.data.rpl }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  data: ClassifiedTrade
  index: number
}

const props = defineProps<Props>()
</script>
