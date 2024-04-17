<script setup lang="ts">
import logo from './logo.vue'
import menuitem from './menuitem.vue'

const menuItems = [
  {
    name: 'Summary',
    icon: 'material-symbols:account-balance-outline',
    link: '/'
  }
]
</script>

<template>
  <div class="w-56 py-12 flex flex-col gap-16 h-full bg-crust rounded-r-lg select-none">
    <logo></logo>
    <div
      v-for="item in menuItems"
      class="flex flex-col items-center justify-center"
    >
      <menuitem
        :name="item.name"
        :icon="item.icon"
      ></menuitem>
    </div>
  </div>
</template>
