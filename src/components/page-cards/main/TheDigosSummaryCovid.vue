<script>
import axios from 'axios'
export default {
  setup() {
    return {}
  },
  // COVID-19 Data Summary
  async created() {
    const { data } = await axios.get('https://covid19-api-philippines.herokuapp.com/api/summary').then(response => (this.data = response))
    console.log('Yay, it worked!')
    console.log(data.last_update)
  }
}
const dateaa = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
console.log(dateaa.data.bpi)
const filterData = dateaa.data.bpi.USD.description
console.log(filterData)
</script>
<script setup>
import TheSummaryCovidDashboard from "../../dashboard-charts/main-summary-dashboards/TheSummaryCovidDashboard.vue";
</script>

<template>
  <main class="relative flex flex-wrap items-center justify-between my-0 pt-5 bg-white text-black">
    <div class="container flex-wrap mx-auto px-32 items-center">
      <div>
        <h5 class="pt-5 pb-7">Last updated on {{ filterData }}</h5>
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