<script>
import axios from 'axios'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      nowUpdatedDate: '',
      NowCases: '',
      WeeklyCases: '',
    }
  },
  async created() {
    await axios({
      method: 'get',
      url: 'https://api.covid19api.com/country/philippines',
      headers: {}
    }).then(response => {
      // Selecting the last element of the COVID-19 API response 
      // This is to get the latest data of Philippine COVID-19 information
      let latestCovidInfo = response.data[response.data.length - 1];
      this.WeeklyCases = ((response.data[response.data.length - 1].Confirmed) - (response.data[response.data.length - 7].Confirmed)).toLocaleString('en-US');
      this.NowCases = latestCovidInfo.Confirmed.toLocaleString('en-US')
      this.nowUpdatedDate = dayjs(latestCovidInfo.Date).format('dddd, MMMM D, YYYY')
      console.log(latestCovidInfo);
    }).catch((err) => console.log(err));
  },
}
</script>

<script setup>
import TheLineSummaryCovidDashboardVue from '../../dashboard-charts/main-summary-dashboards/TheLineSummaryCovidDashboard.vue';
</script>

<template>
  <main class="relative flex flex-wrap items-center justify-between my-0 pt-5 bg-white text-black">
    <div class="container flex-wrap mx-auto px-32 items-center">
      <div>
        <h5 class="pt-5">Last updated on {{ this.nowUpdatedDate }} </h5>
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
            <h1 class=" font-extrabold text-2xl">Weekly Cases:</h1>
            <span class=" text-2xl">{{ WeeklyCases }}</span>
          </div>
          <div class="flex flex-row gap-2">
            <h1 class=" font-extrabold text-2xl">Total Cases:</h1>
            <h1 class=" text-2xl">{{ NowCases }}</h1>
          </div>
          <div class="flex flex-row gap-2">
            <h1 class=" font-extrabold text-2xl">Deaths:</h1>
            <h1 class=" text-2xl">{{ NowCases }}</h1>
          </div>
          <div class="flex flex-row gap-2">
            <h1 class=" font-extrabold text-2xl">Recoveries:</h1>
            <h1 class=" text-2xl">{{ NowCases }}</h1>
          </div>
        </div>
      </div>
      <TheLineSummaryCovidDashboardVue />
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