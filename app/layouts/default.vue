<script setup lang="ts">
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()

const logout = () => {
  auth.logout()
  navigateTo('/login')
}
</script>

<template>
  <div class="layout">
    <Sidebar />

    <div class="main">
      <Topbar />
      <main class="content">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  background: #f4f6f9;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 24px;
}
</style>
