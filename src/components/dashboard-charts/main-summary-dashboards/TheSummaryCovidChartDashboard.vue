<template>
  <div>
    <Line :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
      :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
export default {

}
</script>

<style lang="scss" scoped>
</style>