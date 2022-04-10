<script setup>
const dateUpdated = "Tuesday, 8 March 20200 at 7:00 AM";
</script>

<template>
  <main class="relative flex flex-wrap items-center justify-between my-0 pt-5 bg-white text-black">
    <div class="container flex-wrap mx-auto px-32 items-center">
      <div>
        <h5 class="pt-5 pb-7">Last updated on {{ dateUpdated }}</h5>
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
        <img src="https://i.postimg.cc/VNNstWdV/dummy-Covid-Dashboard.png" alt />
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>