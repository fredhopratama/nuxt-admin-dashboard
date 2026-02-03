<script setup lang="ts">
const props = defineProps<{
  modelValue: {
    email: string
    password: string
  }
}>()

const emit = defineEmits(['update:modelValue', 'submit'])

const showPassword = ref(false)

const updateField = (key: 'email' | 'password', e: Event) => {
  const target = e.target as HTMLInputElement

  emit('update:modelValue', {
    ...props.modelValue,
    [key]: target.value
  })
}
</script>

<template>
  <div class="mx-auto w-full max-w-sm rounded-lg bg-white p-6 shadow">
    <div class="text-center">
      <h1 class="text-2xl font-semibold text-gray-700">
        Selamat Datang Kembali
      </h1>
      <p class="mt-2 text-sm text-gray-400">
        Silakan login untuk melanjutkan
      </p>
    </div>

    <div class="mt-6 flex flex-col">
      <p class="text-sm font-semibold text-gray-500">Email</p>
      <input
        class="mt-1 rounded border py-2 px-3 text-sm shadow-sm"
        placeholder="Masukkan email Anda"
        :value="modelValue.email"
        @input="updateField('email', ($event))"
      />

      <p class="mt-4 text-sm font-semibold text-gray-500">Kata Sandi</p>

      <div class="relative mt-1">
        <input
          type="password"
          class="w-full rounded border py-2 px-3 text-sm shadow-sm"
          placeholder="Masukkan kata sandi Anda"
          :value="modelValue.password"
          @input="updateField('password', $event)"
        />

        <!-- Toggle Password Visibility Button 
        <button
          type="button"
          class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
          @click="showPassword = !showPassword"
        >
          {{ showPassword ? 'Sembunyikan' : 'Tampilkan' }}
        </button>-->
      </div>

      <button
        class="mt-6 rounded bg-indigo-500 py-2 text-sm font-semibold text-white hover:bg-indigo-600"
        @click="emit('submit')"
      >
        Login
      </button>

    </div>
  </div>
</template>

