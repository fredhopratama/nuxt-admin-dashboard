<script setup lang="ts">
definePageMeta({ layout: false })

const auth = useAuthStore()

const form = ref({
  email: '',
  password: ''
})

const login = () => {
  if (!form.value.email || !form.value.password) return

  auth.login(form.value.email)
  navigateTo('/')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <LoginForm v-model="form" @submit="login" />
  </div>
</template>
