<template>
  <div>  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
export default {
  setup() {
    const labels = Utils.months({ count: 7 });
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>