<script setup lang="ts">
import UsersTable from '~/components/dashboard/UsersTable.vue'

const users = [
  { id: 1, name: 'User A', email: 'a@mail.com', role: 'Admin' },
  { id: 2, name: 'User B', email: 'b@mail.com', role: 'User' },
  { id: 3, name: 'User C', email: 'c@mail.com', role: 'User' },
  { id: 4, name: 'User D', email: 'd@mail.com', role: 'Editor' },
  { id: 5, name: 'User E', email: 'e@mail.com', role: 'User' },
  { id: 6, name: 'User F', email: 'f@mail.com', role: 'Admin' }
]
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold mb-6">Users</h1>
    <UsersTable :users="users" />
  </div>
</template>
