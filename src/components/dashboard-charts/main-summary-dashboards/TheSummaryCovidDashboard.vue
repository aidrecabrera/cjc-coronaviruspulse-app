<template>
  <div class="item w-full h-auto">
    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
      :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
  </div>

</template>

<script>
import axios from 'axios'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  setup() {
    return {
      NowCases: '',
    }
  },
  async created() {
    await axios({
      method: 'get',
      url: 'https://corona.lmao.ninja/v2/historical/PH?lastdays=1',
      headers: {}
    }).then(response => {
      let TodayCases = Object.values(response.data.timeline.cases);
      this.NowCases = TodayCases[0];
      console.log(this.NowCases);
    })
  },
  // COVID-19 Data Summary
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 100
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{ data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>