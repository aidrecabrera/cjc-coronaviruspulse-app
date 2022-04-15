<script>
import axios from 'axios'
import dayjs from 'dayjs'
import CovidChartSummary from '../../dashboard-charts/main-summary-dashboards/TheSummaryCovidDashboard.vue'
export default {
  name: 'Chart',
  components: { CovidChartSummary },
  data() {
    return {
      nowUpdatedDate: '',
      nowUpdateTime: '',
      NowCases: '',
      WeeklyCases: '',
    }
  },
  // async created() {
  //   await axios.get('https://covid19-api-philippines.herokuapp.com/api/summary').then(response => {
  //     this.nowUpdatedDate = dayjs(response.data.last_update).format('dddd, MMMM D, YYYY')
  //     this.nowUpdatedTime = dayjs(response.data.last_update).format('h:mm A')
  //     console.log(response.data.data.total);
  //     console.log(dayjs(response.data.last_update).format('h:mm A'))
  //   })
  // },
  async created() {
    await axios({
      method: 'get',
      url: 'https://api.covid19api.com/country/philippines/status/confirmed',
      headers: {}
    }).then(response => {
      // Selecting the last element of the COVID-19 API response 
      // This is to get the latest data of Philippine COVID-19 information
      let latestCovidInfo = response.data[response.data.length - 1];
      this.WeeklyCases = ((response.data[response.data.length - 1].Cases) - (response.data[response.data.length - 7].Cases)).toLocaleString('en-US');
      this.NowCases = latestCovidInfo.Cases.toLocaleString('en-US')
    })
  },
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
        <div class=" flex flex-col gap-3">
          <div class="flex flex-row gap-2">
            <h1 class=" font-extrabold text-2xl">COVID-19 Cases Last 7 days:</h1>
            <span class=" text-2xl">{{ WeeklyCases }}</span>
          </div>
          <div class="flex flex-row gap-2">
            <h1 class=" font-extrabold text-2xl">Total COVID-19 Cases:</h1>
            <h1 class=" text-2xl">{{ NowCases }}</h1>
          </div>
        </div>
        <CovidChartSummary />
      </div>
      <!-- <iframe class=" w-full h-screen"
        src="https://app.powerbi.com/view?r=eyJrIjoiYWRiZWVkNWUtNmM0Ni00MDAwLTljYWMtN2EwNTM3YjQzYmRmIiwidCI6ImY2MTBjMGI3LWJkMjQtNGIzOS04MTBiLTNkYzI4MGFmYjU5MCIsImMiOjh9"
        frameborder="0"></iframe>
      <div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0"
          marginwidth="0" title="COVID-19"
          src="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"></iframe></div> -->
    </div>
  </main>
</template>

<style>
.embed-container {
  position: relative;
  padding-bottom: 80%;
  height: 0;
  max-width: 100%;
}

.embed-container iframe,
.embed-container object,
.embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

small {
  position: absolute;
  z-index: 40;
  bottom: 0;
  margin-bottom: -15px;
}
</style>