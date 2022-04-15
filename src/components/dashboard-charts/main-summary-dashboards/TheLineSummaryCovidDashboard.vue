<template>
  <main>
    <canvas id="myChart" width="400" height="150"></canvas>
  </main>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';
import Chart from 'chart.js/auto';
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
      })
      //   console.log("Hello");
      // console.log(this.arrConfirmedCasesPH);
      // console.log(this.arrConfirmedCasesPH[0].date);
    })
  },
  methods() {
    const ctx = document.getElementById('myChart');
    const ChartDateLabel = this.arrConfirmedCasesPH;
    console.log(this.arrConfirmedCasesPH);
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ChartDateLabel,
        datasets: [{
          label: 'Confirmed COVID-19 Cases in the Philippines',
          data: [2, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(88, 44, 63, 255)'
          ],
          borderColor: [
            'rgba(88,44,63,255)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }
}
</script>

<style lang="scss" scoped>
</style>