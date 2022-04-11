<script>
import axios from 'axios'
import TheSummaryCovidDashboard from "../../dashboard-charts/main-summary-dashboards/TheSummaryCovidDashboard.vue"
import dayjs from 'dayjs'
const dateaa = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
let filterData = dateaa.data.bpi.USD.description
export default {
  data() {
    return {
      nowUpdated: ''
    }
  },
  async created() {
    await axios.get('https://covid19-api-philippines.herokuapp.com/api/summary').then(response => {
      this.nowUpdated = dayjs(response.data.last_update).format('MMMM D, YYYY, h:mm A')
      console.log(dayjs(response.data.last_update).format('MMMM D, YYYY, h:mm A'))
    })
  }
}
</script>

<template>
  <main class="relative flex flex-wrap items-center justify-between my-0 pt-5 bg-white text-black">
    <div class="container flex-wrap mx-auto px-32 items-center">
      <div>
        <h5 class="pt-5">Last updated on {{ nowUpdated }} </h5>
      </div>
      <div>
        <h1 class="mainHeading py-3">Digos City Summary</h1>
        <p class="mainParagraph">
          The official Digos City government website for data and insights on
          <a href>
            <u>
              <b>SARS-CoV-2 (COVID-19)</b>
            </u>
          </a>
        </p>
      </div>
      <div class="pt-5">
        <the-summary-covid-dashboard />
        <img src="https://i.postimg.cc/VNNstWdV/dummy-Covid-Dashboard.png" alt />
      </div>
    </div> </main>
</template>

<style scoped>
</style>