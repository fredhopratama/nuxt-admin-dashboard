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
  <div class="mx-auto flex w-full max-w-sm flex-col">
    <h1 class="mt-8 text-2xl font-semibold text-gray-700">
      Welcome back
    </h1>
    <p class="mt-2 text-sm text-gray-400">Please sign in below</p>

    <p class="mt-5 text-sm font-semibold text-gray-500">Email</p>
    <input
      class="mt-1 rounded border py-1 px-3 text-sm shadow"
      :value="modelValue.email"
      @input="updateField('email', $event.target.value)"
    />

    <p class="mt-5 text-sm font-semibold text-gray-500">Password</p>
    <input
      type="password"
      class="mt-1 rounded border py-1 px-3 text-sm shadow"
      :value="modelValue.password"
      @input="updateField('password', $event.target.value)"
    />

    <button
      class="mt-5 rounded bg-indigo-400 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
      @click="$emit('submit')"
    >
      Sign in
    </button>
  </div>
</template>
