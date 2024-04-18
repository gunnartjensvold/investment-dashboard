<script setup lang="ts">
type props = {
  sidebarOpen: boolean
}

const props = defineProps<props>()
const icon = computed(() => (props.sidebarOpen ? 'material-symbols:arrow-back-ios' : 'material-symbols:arrow-forward-ios'))
const emit = defineEmits(['toggleSidebar'])
</script>

<template>
  <button
    @click="emit('toggleSidebar')"
    class="absolute left-full top-8 py-1 -translate-x-1/2 bg-blue overflow-hidden text-crust rounded-full flex items-center justify-center after:contents-[''] after:absolute after:inset-0 hover:after:bg-crust/10"
  >
    <Icon
      :class="props.sidebarOpen ? 'ml-2' : 'mx-1'"
      :name="icon"
    ></Icon>
  </button>
</template>
