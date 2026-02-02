<script setup lang="ts">
const users = [
  { id: 1, name: 'User A', email: 'a@mail.com' },
  { id: 2, name: 'User B', email: 'b@mail.com' }
]
</script>

<template>
  <div>
    <h1>Users</h1>

    <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="u in users" :key="u.id">
      <td>{{ u.id }}</td>
      <td>{{ u.name }}</td>
      <td>{{ u.email }}</td>
    </tr>
  </tbody>
</table>

  </div>
</template>
