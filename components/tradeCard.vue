<template>
  <div>
    {{ props.data.status }}
  </div>
</template>

<script setup lang="ts">
type Props = {
  data: ClassifiedTrade
}
const props = defineProps<Props>()
</script>
