<script setup>
const vaccinationPercentage = 63.4;
const individualDoses = 100;
const dailyDoses = 40000;
const digosVaccinationPercentage = 58;
const digosTotalVaccines = 80918;
</script>

<template>
  <div>
    <h1>COVID-19 Vaccination Overview</h1>
    <p>
      {{ vaccinationPercentage }}% of the Philippine population has received at
      least one dose of a COVID-19 vaccine. {{ individualDoses }} million doses
      have been administered nationally, and {{ dailyDoses }} are now
      administered each day. Meanwhile, {{ digosVaccinationPercentage }}% of the
      Digoseño population in Digos City has received at least one dose of
      COVID-19 vaccine, and a total of {{ 80918 }} doses were administered.
    </p>
  </div>
  <div class="dashboard">
    <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>
  </div>
</template>

<style scoped>
</style>