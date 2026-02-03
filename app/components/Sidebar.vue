<script setup lang="ts">
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
</script>

<template>
  <aside class="flex h-screen w-[230px] flex-col bg-gray-800 text-gray-300">
    <!-- Logo -->
    <div class="flex items-center gap-2 border-b border-gray-700 px-4 py-4">
      <img src="/favicon.ico" alt="Logo" class="h-8 w-8" />
      <span class="text-lg font-semibold text-white">Admin Panel</span>
    </div>

    <!-- User info -->
    <div class="border-b border-gray-700 px-4 py-4">
      <p class="text-sm text-gray-400">Login sebagai</p>
      <p class="mt-1 font-medium text-white">
        {{ auth.user || 'Administrator' }}
      </p>
    </div>

    <!-- Menu -->
    <nav class="flex-1 px-2 py-4">
      <NuxtLink
        to="/"
        class="menu-item"
        exact-active-class="menu-active"
      >
        Dashboard
      </NuxtLink>

      <NuxtLink
        to="/users"
        class="menu-item"
        exact-active-class="menu-active"
      >
        Customers
      </NuxtLink>

      <NuxtLink
        to="/settings"
        class="menu-item"
        exact-active-class="menu-active"
      >
        Settings
      </NuxtLink>
    </nav>
  </aside>
</template>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  margin-bottom: 4px;
  border-radius: 4px;
  color: #c2c7d0;
  transition: background-color 0.2s, color 0.2s;
}

.menu-item:hover {
  background-color: #495057;
  color: #ffffff;
}

.menu-active {
  background-color: #4f46e5;
  color: #ffffff;
}
</style>
