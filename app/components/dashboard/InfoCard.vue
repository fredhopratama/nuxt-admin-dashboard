<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  icon: any
  color: string
  link?: string
}>()
</script>

<template>
  <div class="rounded-lg text-white shadow" :class="color">
    <div class="flex items-center p-4">
      <div class="flex-1">
        <p class="text-sm uppercase opacity-80">{{ title }}</p>
        <p class="text-3xl font-semibold">{{ value }}</p>
      </div>

      <component
        :is="icon"
        class="h-12 w-12 opacity-30"
      />
    </div>

    <NuxtLink
      :to="link || '#'"
      class="flex items-center justify-center gap-1 bg-black/10 py-2 text-sm hover:bg-black/20"
    >
      More info
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </NuxtLink>
  </div>
</template>
