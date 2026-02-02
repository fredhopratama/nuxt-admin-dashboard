<script setup lang="ts">
const emit = defineEmits(['refresh'])

function onRefresh() {
  emit('refresh')
}
</script>

<template>
  <div class="flex gap-2">
    <button class="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
      <Icon name="heroicons:user-plus" />
      Add User
    </button>

    <button
      @click="onRefresh"
      class="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md"
    >
      <Icon name="heroicons:arrow-path" />
    </button>
  </div>
</template>
