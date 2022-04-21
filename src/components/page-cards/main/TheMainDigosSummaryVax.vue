<script>
export default {
  data() {
    return {
      NowVaccinated: '',
    }
  }
} 
</script>

<template>
  <main class="relative flex flex-wrap items-center justify-between py-5 pb-12 bg-white text-black">
    <div class="container flex-wrap mx-auto px-32 items-center">
      <div>
        <h1 class="mainHeading py-3">COVID-19 Vaccination Overview</h1>
        <p class="mainParagraph">
          Currently,
          <b>{{ vaccinationPercentage }}%</b>
          of the Philippine population has received at
          least one dose of a COVID-19 vaccine.
          <b>{{ individualDoses }} million</b>
          doses have been administered nationally, and
          <b>{{ dailyDosesCommas }}</b>
          are now administered each day. Meanwhile,
          <b>{{ digosVaccinationPercentage }}%</b>
          of the
          Digoseño population in Digos City has received at least one dose of
          COVID-19 vaccine, and a total of
          <b>{{ digosTotalVaccinesCommas }}</b> doses were administered.
        </p>
      </div>
      <div class="py-5">
        <img src="https://svgshare.com/i/g7k.svg" alt />
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>