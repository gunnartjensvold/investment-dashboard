<script setup lang="ts">
type Props = {
  name: string
  icon: string
  path: string
  sidebarOpen: boolean
}

const route = useRoute()
const props = defineProps<Props>()

const isActive = computed(() => route.path === props.path)
</script>

<template>
  <NuxtLink
    :to="props.path"
    class="flex gap-2.5 rounded-md"
    :class="[isActive ? 'bg-crust cursor-default' : 'cursor-pointer hover:bg-crust', props.sidebarOpen ? 'py-2.5 px-3 w-full' : 'h-11 w-11 items-center justify-center']"
  >
    <Icon
      class="text-2xl shrink-0"
      :class="[isActive ? 'text-purple' : '']"
      :name="props.icon"
    ></Icon>
    <span
      v-if="sidebarOpen"
      class="font-medium text-nowrap"
    >
      {{ props.name }}
    </span>
  </NuxtLink>
</template>
