<script setup lang="ts">
const props = defineProps<{
  modelValue: {
    email: string
    password: string
  }
}>()

const emit = defineEmits(['update:modelValue', 'submit'])

const updateField = (key: 'email' | 'password', value: string) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [key]: value
  })
}
</script>

<template>
  <div class="mx-auto w-full max-w-sm rounded-lg bg-white p-6 shadow">
    <div class="text-center">
      <h1 class="text-2xl font-semibold text-gray-700">
        Welcome back
      </h1>
      <p class="mt-2 text-sm text-gray-400">
        Please sign in below
      </p>
    </div>

    <div class="mt-6 flex flex-col">
      <p class="text-sm font-semibold text-gray-500">Email</p>
      <input
        class="mt-1 rounded border py-2 px-3 text-sm shadow-sm"
        :value="modelValue.email"
        @input="updateField('email', ($event.target as HTMLInputElement).value)"
      />

      <p class="mt-4 text-sm font-semibold text-gray-500">Password</p>
      <input
        type="password"
        class="mt-1 rounded border py-2 px-3 text-sm shadow-sm"
        :value="modelValue.password"
        @input="updateField('password', ($event.target as HTMLInputElement).value)"
      />

      <button
        class="mt-6 rounded bg-indigo-500 py-2 text-sm font-semibold text-white hover:bg-indigo-600"
        @click="$emit('submit')"
      >
        Sign in
      </button>
    </div>
  </div>
</template>

