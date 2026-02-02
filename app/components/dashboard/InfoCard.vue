<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
}>()
</script>

<template>
  <div class="bg-white rounded shadow p-4">
    <p class="text-sm text-gray-500">{{ title }}</p>
    <p class="text-2xl font-semibold mt-1">{{ value }}</p>
  </div>
</template>
