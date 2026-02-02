<script setup lang="ts">
import InfoCard from '~/components/dashboard/InfoCard.vue'
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold mb-6">Dashboard</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <InfoCard title="Users" value="120" />
      <InfoCard title="Orders" value="75" />
      <InfoCard title="Sales" value="$1,200" />
      <InfoCard title="Errors" value="3" />
    </div>
  </div>
</template>
