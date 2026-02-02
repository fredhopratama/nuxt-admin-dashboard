<script setup lang="ts">
defineProps<{
  users: Array<any>
}>()
</script>

<template>
  <div class="bg-white rounded shadow p-4">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="text-left p-2">Name</th>
          <th class="text-left p-2">Email</th>
          <th class="text-left p-2">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="border-t"
        >
          <td class="p-2">{{ user.name }}</td>
          <td class="p-2">{{ user.email }}</td>
          <td class="p-2">{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
