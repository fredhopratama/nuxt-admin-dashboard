<script setup lang="ts">
import InfoCard from '~/components/dashboard/InfoCard.vue'
import SalesChart from '~/components/dashboard/SalesChart.vue'
import {
  UsersIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon
} from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="space-y-8">
    <!-- INFO BOX -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <InfoCard
        title="Users"
        value="120"
        :icon="UsersIcon"
        color="bg-blue-600"
        link="/users"
      />

      <InfoCard
        title="Orders"
        value="75"
        :icon="ShoppingCartIcon"
        color="bg-green-600"
      />

      <InfoCard
        title="Sales"
        value="$1,200"
        :icon="CurrencyDollarIcon"
        color="bg-yellow-500"
      />

      <InfoCard
        title="Errors"
        value="3"
        :icon="ExclamationTriangleIcon"
        color="bg-red-600"
      />
    </div>

    <!-- CHART -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <SalesChart />
    </div>
  </div>
</template>
