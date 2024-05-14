<template>
  <div>
    <div>
      <span>
        {{ props.data.instrumentSymbol }}
      </span>
      <span> #{{ props.index + 1 }} </span>
    </div>

    <span>
      {{ props.data.rpl }}
    </span>
  </div>
</template>

<script setup lang="ts">
type Props = {
  data: ClassifiedTrade
  index: number
}

const props = defineProps<Props>()
</script>
