<script setup>
const corEmployeesVax = 100;
const corStudentsVax = 100;
const corVaxDataUpdated = "March 3, 2022";
</script>

<template>
  <div class="flex">
    <div>
      <div>
        <h1>Cor Jesu College vaccination rates</h1>
        <p>
          Vaccination rates are based on the number of senior high school, undergraduate, graduate students, faculty, and
          staff.
        </p>
      </div>
      <div class="flex">
        <div>
          <h1>{{ corEmployeesVax }}%</h1>
          <p>of Employees Vaccinated</p>
        </div>
        <div>
          <h1>{{ corStudentsVax }}%</h1>
          <p>of Students Vaccinated</p>
        </div>
      </div>
      <div>
        <p>Data as of {{ corVaxDataUpdated }}. We will continue to update the vaccination rates as needed.</p>
      </div>
    </div>
    <div>
      <img
        src="https://i0.wp.com/www.cjc.edu.ph/wp-content/uploads/2021/06/vaccine.jpg?resize=624%2C468&ssl=1"
        alt
      />
    </div>
  </div>
</template>

<style scoped>
</style>