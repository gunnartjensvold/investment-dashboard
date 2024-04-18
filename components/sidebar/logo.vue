<script setup lang="ts">
type Props = {
  sidebarOpen: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex items-center justify-center h-16">
    <div
      class="shrink-0"
      :class="[props.sidebarOpen ? 'w-11' : 'w-8']"
    >
      <svg
        preserve-aspect-ratio="true"
        viewBox="0 0 67 97"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_5)">
          <path
            fill="#584469"
            d="M9.31818 70H0.454546L26.0909 0.181816H34.8182L60.4545 70H51.5909L30.7273 11.2273H30.1818L9.31818 70ZM12.5909 42.7273H48.3182V50.2273H12.5909V42.7273Z"
          />
          <path
            fill="#556088"
            d="M26.4545 97V27.1818H34.9091V89.5H67.3636V97H26.4545Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_5">
            <rect
              width="67"
              height="97"
              opacity="0"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    <span
      v-if="props.sidebarOpen"
      class="text-4xl font-medium bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent"
      >Trading</span
    >
  </div>
</template>
