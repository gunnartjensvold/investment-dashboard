<script setup lang="ts">
type Props = {
  name: string
  icon: string
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <Icon :name="props.icon"></Icon>
    <span> {{ props.name }} </span>
  </div>
</template>
