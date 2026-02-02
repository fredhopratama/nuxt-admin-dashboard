<script setup lang="ts">
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
}>()
</script>

<template>
  <div
    class="flex items-center justify-between px-4 py-3 border-t border-gray-300 text-sm bg-gray-50"
  >
    <span class="text-gray-600">
      Page {{ currentPage }} of {{ totalPages }}
    </span>

    <div class="flex gap-2">
      <button
        class="px-3 py-1 border rounded bg-white hover:bg-gray-100 disabled:opacity-50"
        :disabled="currentPage === 1"
        @click="emit('prev')"
      >
        Prev
      </button>

      <button
        class="px-3 py-1 border rounded bg-white hover:bg-gray-100 disabled:opacity-50"
        :disabled="currentPage === totalPages"
        @click="emit('next')"
      >
        Next
      </button>
    </div>
  </div>
</template>
