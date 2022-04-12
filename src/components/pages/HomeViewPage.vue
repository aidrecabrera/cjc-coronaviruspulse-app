<script setup>
import TheDigosSummaryCovidVue from '../page-cards/main/TheDigosSummaryCovid.vue';
import TheDigosSummaryVax from '../page-cards/main/TheDigosSummaryVax.vue';
import TheDigosAlertLevelBoard from '../page-cards/main/TheDigosAlertLevelBoard.vue';
import TheHealthAndWellbeing from '../page-cards/main/TheHealthAndWellbeing.vue';
import TheCovidUpdatesVue from '../page-cards/main/TheCovidUpdates.vue';
import TheNewsUpdatesComponentVue from '../page-cards/updates/TheNewsUpdatesComponent.vue';
</script>

<template>
  <main>
    <TheDigosSummaryCovidVue />
    <TheDigosSummaryVax />
    <TheDigosAlertLevelBoard />
    <TheHealthAndWellbeing />
    <TheCovidUpdatesVue />
  </main>
</template>

<style>
</style>
