<script setup lang="ts">
const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

const dates = Array.from({ length: 35 }, (_, i) => i + 1)
</script>

<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div>
      <h1 class="text-2xl font-semibold text-gray-800">Kalender</h1>
      <p class="text-sm text-gray-500">
        Tampilan jadwal dan aktivitas
      </p>
    </div>

    <!-- Calendar Card -->
    <div class="bg-white rounded-lg shadow border">
      <!-- Toolbar -->
       <div class="relative flex items-center px-4 py-3 border-b bg-white">
        <!-- Left controls -->
        <div class="flex items-center gap-2">
            <button class="btn-nav">‹</button>
            <button class="btn-nav">›</button>
            <button class="btn-secondary">Hari ini</button>
        </div>

        <!-- Center title -->
        <div class="absolute left-1/2 -translate-x-1/2 text-sm font-bold text-gray-700" font-size="26px">
            Februari 2026
        </div>

        <!-- Right controls -->
        <div class="ml-auto flex items-center gap-1">
            <button class="btn-view-active">Bulan</button>
            <button class="btn-view">Minggu</button>
            <button class="btn-view">Hari</button>
        </div>
        </div>

      <!-- Calendar Grid -->
      <div class="grid grid-cols-7 border-b">
        <div
          v-for="day in days"
          :key="day"
          class="py-2 text-center text-xs font-semibold text-gray-600 border-r last:border-r-0 bg-gray-50"
        >
          {{ day }}
        </div>
      </div>

      <div class="grid grid-cols-7">
        <div
          v-for="date in dates"
          :key="date"
          class="h-28 border-r border-b last:border-r-0 p-2 text-xs text-gray-600 hover:bg-gray-50"
        >
          <span class="font-medium">{{ date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
 .btn-nav {
  padding: 6px 10px;
  border-radius: 4px;
  background-color: #3b82f6;
  color: white;
  font-size: 14px;
}

.btn-secondary {
  padding: 6px 10px;
  border-radius: 4px;
  background-color: #60a5fa;
  color: white;
  font-size: 13px;
}

.btn-view {
  padding: 6px 10px;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-size: 13px;
  border-radius: 4px;
  background: white;
}

.btn-view-active {
  padding: 6px 10px;
  border-radius: 4px;
  background-color: #3b82f6;
  color: white;
  font-size: 13px;
}
</style>