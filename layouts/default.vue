<script setup lang="ts">
import loader from '~/components/sidebar/loader.vue'

const tradeStore = useTradeStore()
const isPending = computed(() => tradeStore.isPending)
</script>

<template>
  <div class="flex h-full">
    <Sidebar />
    <div
      class="w-full flex items-center justify-center"
      v-if="isPending"
    >
      <loader />
    </div>
    <div
      v-else
      class="py-6 px-8 grow"
    >
      <slot />
    </div>
  </div>
</template>
