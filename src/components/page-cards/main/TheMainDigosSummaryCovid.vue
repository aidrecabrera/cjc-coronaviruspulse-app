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
      nowUpdateTime: '',
      NowCases: '',
      WeeklyCases: '',
    }
  },
  async created() {
    await axios.get('https://covid19-api-philippines.herokuapp.com/api/summary').then(response => {
      this.nowUpdatedDate = dayjs(response.data.last_update).format('dddd, MMMM D, YYYY')
      this.nowUpdatedTime = dayjs(response.data.last_update).format('h:mm A')
      console.log(response.data.data.total);
      console.log(dayjs(response.data.last_update).format('h:mm A'))
    })
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
  async created() {
    await axios({
      method: 'get',
      url: 'https://corona.lmao.ninja/v2/historical/PH?lastdays=7',
      headers: {}
    }).then(response => {
      let Last7DCases = Object.values(response.data.timeline.cases);
      this.WeeklyCases = Last7DCases[6] - Last7DCases[0];
      console.log(this.WeeklyCases);
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
          <a href="https://doh.gov.ph/COVID-19/FAQs" target="_blank">
            <u>
              <b>SARS-CoV-2 (COVID-19)</b>
            </u>
          </a>
        </p>
      </div>
      <div class="pt-5">
        <div>
          <!-- <div class="flex justify-center items-center space-x-3 w-full">
            <div class="item h-auto">
              <div class="flex flex-col justify-center w-full">
                <div class="item w-auto h-auto bg-red py-3">
                  <div class=" text-white bg-black py-16 px-16">
                    <h1 class=" font-sans text-2xl">  </h1>
                  </div>
                </div>
                <div class=" bg-pink-700 item w-auto py-16 px-16">

                </div>
              </div>
            </div>

          </div> -->
        </div>
        <div class=" flex flex-col gap-3">
          <div class="flex flex-row gap-2">
            <h1 class=" font-extrabold text-2xl">COVID-19 Cases Last 7 days:</h1>
            <span class=" text-2xl">{{ this.WeeklyCases.toLocaleString('en-US') }}</span>
          </div>
          <div class="flex flex-row gap-2">
            <h1 class=" font-extrabold text-2xl">Total COVID-19 Cases:</h1>
            <h1 class=" text-2xl">{{ this.NowCases.toLocaleString('en-US') }}</h1>
          </div>
        </div>

        <!-- <TheLineSummaryCovidDashboard /> -->
        <CovidChartSummary />
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>