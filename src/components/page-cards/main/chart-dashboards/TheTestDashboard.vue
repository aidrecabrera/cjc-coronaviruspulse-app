<template>
  <div>  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
export default {
  setup() {
    return {

    }
  },
  extends: Line,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Objects
    }
  },
  mounted() {
    const dates = this.chartData.map(d => d.date).reverse();
    const totals = this.chartData.map(d => d.total).reverse(); const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      backgroundColor
    } = this.chartColors; this.renderChart({
      labels: dates,
      datasets: [{
        label: this.label,
        data: totals,
        borderColor: borderColor,
        pointBorderColor: pointBorderColor,
        pointBackgroundColor: pointBackgroundColor,
        backgroundColor: backgroundColor
      }]
    },
      this.options);
  }
}
</script>

<style lang="scss" scoped>
</style>