<template>
  Test
  <Bar :chart-data="chartData" />
</template>

<script>
import axios from 'axios'
import LineChart from '../main-summary-dashboards/TheCovidDailyChart.vue'
import dayjs from 'dayjs'

export default {
  components: {
    LineChart
  },
  setup() {
    return {
      arrConfirmedCasesPH: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
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
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12]
          }
        ]
      }
    }
  },
}
</script>
<style lang="scss" scoped>
</style>