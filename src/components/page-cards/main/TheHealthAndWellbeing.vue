<script setup>
const corEmployeesVax = 100;
const corStudentsVax = 100;
const corVaxDataUpdated = "March 3, 2022";
</script>

<template>
  <main class>
    <div class="main-parent">
      <div class="align-middle py-7">
        <div class>
          <div class>
            <h1 class="main-heading">Cor Jesu College vaccination rates</h1>
            <p>
              Vaccination rates are based on the number of senior high school, undergraduate, graduate students,
              faculty, and
              staff.
            </p>
          </div>
          <div class="main-children-statistics">
            <div>
              <h1 class="percentage">{{ corEmployeesVax }}%</h1>
              <p class="paragraph">of Employees Vaccinated</p>
            </div>
            <div>
              <h1 class="percentage">{{ corStudentsVax }}%</h1>
              <p class="paragraph">of Students Vaccinated</p>
            </div>
          </div>
          <div>
            <p>
              <i>Data as of {{ corVaxDataUpdated }}. We will continue to update the vaccination rates as needed.</i>
            </p>
          </div>
        </div>
      </div>
      <div class>
        <div
          class="rounded-2xl opacity-0 hover:opacity-100 ease-in-out duration-300 bg-red bg-opacity-75 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold"
        >
          <a
            class="text-white font-serif text-3xl text-center"
            href="https://www.cjc.edu.ph/cjc-boosts-digos-lgu-in-vaccinating-digosenos/"
            target="_blank"
          >
            Read: CJC Boosts Digos LGU
            <br />in Vaccinating Digoseños
          </a>
        </div>
        <img
          class="w-144 rounded-2xl"
          src="https://i0.wp.com/www.cjc.edu.ph/wp-content/uploads/2021/06/vaccine.jpg?resize=624%2C468&ssl=1"
          alt
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-parent {
  @apply bg-white text-black grid grid-flow-col justify-between px-52 py-20;
}
.main-children-statistics {
  @apply grid grid-cols-2 py-5;
}
.percentage {
  @apply text-red font-serif text-9xl font-extrabold;
}
.paragraph {
  @apply text-black font-serif text-3xl;
}
.main-heading {
  @apply font-serif text-5xl py-5;
}
</style>