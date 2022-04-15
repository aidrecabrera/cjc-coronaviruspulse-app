<template>
  <div>

  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
  data() {
    return {
      arrConfirmedCasesPH: [],
      dateCovidCases: [],
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
        this.arrConfirmedCasesPH.push({ total: Cases });
        this.dateCovidCases.push({ Confirmed: date });
      })
    })
  }
}
</script>

<style lang="scss" scoped>
</style>