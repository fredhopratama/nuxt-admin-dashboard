<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 12,
      right: 12,
      top: 8,
      bottom: 12
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        padding: 8
      }
    },
    y: {
      grid: {
        color: '#e5e7eb'
      },
      ticks: {
        padding: 8
      },
      beginAtZero: true
    }
  }
}
const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: '#3b82f6',
      data: [30, 45, 28, 80, 99, 43, 65, 75, 90, 120, 110, 150]
    }
  ]
}

</script>

<template>
  <div class="bg-white rounded-lg shadow p-5">
  <h3 class="text-lg font-semibold mb-4 text-gray-700">
    Monthly Sales
  </h3>

  <div class="relative h-72">
    <Bar :data="data" :options="options" />
  </div>
</div>

</template>
