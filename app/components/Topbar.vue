<script setup lang="ts">
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()

const logout = () => {
  auth.logout()
  navigateTo('/login')
}
</script>

<template>
  <header class="topbar">
    <span>Dashboard</span>
    <button @click="logout">Logout</button>
  </header>
</template>

<style scoped>
.topbar {
  height: 56px;
  background: #ffffff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

button {
  background: #dc3545;
  border: none;
  color: white;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
