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
import dayjs from 'dayjs'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  setup() {
    return {
      arrConfirmedCasesPH: [],
    }
  },
  async created() {
    await axios({
      method: 'get',
      url: 'https://api.covid19api.com/country/philippines/status/confirmed',
      headers: {}
    }).then(response => {
      // This is for Object Destructuring the retrieved data from COVID-19 API
      let dailyCases = response.data
      dailyCases.forEach(individualDate => {
        const date = dayjs(individualDate.Date, "YYYYMMDD").format("MM/DD");
        const {
          Cases,
        } = individualDate;
        this.arrConfirmedCasesPH.push({ date, total: Cases });
      }),
        console.log("Hello");
      console.log(this.arrConfirmedCasesPH);
      console.log(this.arrConfirmedCasesPH[0].date);
    })
  },
  // ChartJS COVID-19 Data Summary
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