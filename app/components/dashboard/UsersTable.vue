<script setup lang="ts">
import { computed, ref } from 'vue'
import TablePagination from '~/components/ui/TablePagination.vue'

interface User {
  id: number
  name: string
  email: string
  role?: string
}

const props = defineProps<{
  users: User[]
}>()

const currentPage = ref(1)
const perPage = 5

const totalPages = computed(() =>
  Math.ceil(props.users.length / perPage)
)

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return props.users.slice(start, start + perPage)
})

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function editUser(user: User) {
  console.log('Edit', user)
}

function deleteUser(user: User) {
  console.log('Delete', user)
}
</script>

<template>
  <div class="bg-white rounded shadow">
    <!-- TABLE -->
    <table class="w-full border-collapse">
      <thead class="bg-gray-200 text-gray-700 text-sm">
        <tr>
          <th class="px-4 py-3 border-r">ID</th>
          <th class="px-4 py-3 border-r">Name</th>
          <th class="px-4 py-3 border-r">Email</th>
          <th class="px-4 py-3 border-r">Role</th>
          <th class="px-4 py-3 text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="user in paginatedUsers"
          :key="user.id"
          class="border-t border-gray-300 text-sm odd:bg-white even:bg-gray-50 hover:bg-blue-50"
        >
          <td class="px-4 py-3 border-r">{{ user.id }}</td>
          <td class="px-4 py-3 border-r">{{ user.name }}</td>
          <td class="px-4 py-3 border-r">{{ user.email }}</td>
          <td class="px-4 py-3 border-r">
            {{ user.role || '-' }}
          </td>

          <td class="px-4 py-3">
            <div class="flex justify-center gap-2">
              <button
                class="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                @click="editUser(user)"
              >
                Edit
              </button>
              <button
                class="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                @click="deleteUser(user)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>

        <tr v-if="paginatedUsers.length === 0">
          <td colspan="5" class="text-center py-6 text-gray-500">
            No users found
          </td>
        </tr>
      </tbody>
    </table>

    <!-- PAGINATION -->
     <!-- PAGINATION -->
      <TablePagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @prev="prevPage"
      @next="nextPage"
    />
  </div>
</template>
