<script setup lang="ts"></script>

<template>
  <div class="flex h-full">
    <Sidebar />
    <div class="py-6 px-8 grow">
      <slot />
    </div>
  </div>
</template>
