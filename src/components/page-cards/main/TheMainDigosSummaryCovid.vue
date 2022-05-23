<script>
import axios from 'axios'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      NowCases: '',
      NowDeaths: '',
      NowRecovered: '',
      nowUpdatedDate: 'May 22, 2022',
    }
  },
  async created() {
    await axios({
      method: 'get',
      url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/Philippines/phl',
      headers: {
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'X-RapidAPI-Key': '4654f7147bmsha14fefd6aba622ep12dcb9jsne9b3877e70a2'
      }
    }).then(response => {
      // Selecting the last element of the COVID-19 API response 
      // This is to get the latest data of Philippine COVID-19 information
      let latestCovidPH = response.data[0]
      this.NowCases = latestCovidPH.TotalCases.toLocaleString('en-US')
      this.NowDeaths = latestCovidPH.TotalDeaths.toLocaleString('en-US')
      this.NowUpdatedDate = dayjs(latestCovidPH.Date).format('dddd, MMMM D, YYYY')
    }).catch((err) => console.log(err));
  },
}
</script>

<template>
  <main class="relative flex flex-wrap items-center justify-between my-0 pt-5 bg-white text-black">
    <div class="container flex-wrap mx-auto px-32 items-center">
      <div>
        <h5 class="pt-5">Last updated on {{ nowUpdatedDate }} </h5>
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
      <div class="pt-2">
        <div class="">
          <p>Globally, there have been <b>{{ NowCases }}</b> confirmed cases of COVID-19,
            including <b>{{ NowDeaths }}</b> deaths, reported by the Department of Health.</p>
        </div>
        
        <div class="py-5">
        <img src="https://svgshare.com/i/hao.svg" alt />
      </div>

      </div>
    </div>
    <div>
      
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