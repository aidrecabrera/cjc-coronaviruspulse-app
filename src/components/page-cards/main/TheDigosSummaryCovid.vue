<script>
import axios from 'axios'
import dayjs from 'dayjs'
import CovidChartSummary from '../../dashboard-charts/main-summary-dashboards/TheSummaryCovidDashboard.vue'
import TheLineSummaryCovidDashboard from '../../dashboard-charts/main-summary-dashboards/TheLineSummaryCovidDashboard.vue'
export default {
  name: 'Chart',
  components: { CovidChartSummary, TheLineSummaryCovidDashboard },
  data() {
    return {
      nowUpdatedDate: '',
      nowUpdateTime: ''
    }
  },
  async created() {
    await axios.get('https://covid19-api-philippines.herokuapp.com/api/summary').then(response => {
      this.nowUpdatedDate = dayjs(response.data.last_update).format('dddd, MMMM D, YYYY')
      this.nowUpdatedTime = dayjs(response.data.last_update).format('h:mm A')

      console.log(dayjs(response.data.last_update).format('h:mm A'))
    })
  }
}
</script>

<template>
  <main class="relative flex flex-wrap items-center justify-between my-0 pt-5 bg-white text-black">
    <div class="container flex-wrap mx-auto px-32 items-center">
      <div>
        <h5 class="pt-5">Last updated on {{ nowUpdatedDate }} at {{ nowUpdatedTime }} </h5>
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
        <TheLineSummaryCovidDashboard />
        <CovidChartSummary />
      </div>
    </div> </main>
</template>

<style scoped>
</style>