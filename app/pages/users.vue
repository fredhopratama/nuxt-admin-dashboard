<script setup lang="ts">
import UsersTable from '~/components/dashboard/UsersTable.vue'

const users = [
  { id: 1, name: 'User A', email: 'a@mail.com', role: 'Admin' },
  { id: 2, name: 'User B', email: 'b@mail.com', role: 'User' }
]
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold mb-4">Users</h1>

    <UsersTable :users="users" />
  </div>
</template>

