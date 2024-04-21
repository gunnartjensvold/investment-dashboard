<script setup lang="ts">
import logo from './logo.vue'
import menuitem from './menuitem.vue'
import sidebartoggle from './sidebartoggle.vue'

const menuItems = [
  {
    name: 'Summary',
    icon: 'material-symbols:account-balance-outline',
    path: '/'
  },
  {
    name: 'Recent trades',
    icon: 'material-symbols:history',
    path: '/trades'
  }
]

const isOpen = ref(true)
const toggleSidebar = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <div
    class="py-12 flex flex-col shrink-0 gap-16 h-full bg-mantle rounded-r-lg select-none relative transition-width duration-300"
    :class="[isOpen ? 'w-56' : 'w-16']"
  >
    <logo :sidebar-open="isOpen"></logo>
    <div
      class="flex flex-col gap-3 items-center justify-center transition-all duration-300"
      :class="[isOpen ? 'mx-6' : '']"
    >
      <menuitem
        v-for="item in menuItems"
        :name="item.name"
        :icon="item.icon"
        :path="item.path"
        :sidebar-open="isOpen"
      ></menuitem>
    </div>
    <sidebartoggle
      @toggle-sidebar="toggleSidebar"
      :sidebar-open="isOpen"
    ></sidebartoggle>
  </div>
</template>
