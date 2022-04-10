<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<script>
import axios from 'axios';
export default {
  name: "purple-navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<template>
  <header>
    <div>
      <nav class="flex items-center justify-between py-8 bg-red">
        <div class="container px-32 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full flex justify-between lg:w-auto lg:flex-col lg:justify-between">
            <a href="https://www.cjc.edu.com" class="flex items-center">
              <img src="../src/assets/covidpulselogo.svg" class="mr-3 h-14 sm:h-14" alt="COVID Pulse" />
            </a>
            <button type="button"
              class="text-red-700 hover:text-white border border-red-700 hover:bg-white ease-in duration-300 focus:ring-1 focus:ring-red-300 font-medium rounded-lg text-sm px-5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 lg:hidden outline-none focus:outline-none"
              v-on:click="toggleNavbar()">
              <div class="space-y-1">
                <div class="w-5 h-0.5 bg-white"></div>
                <div class="w-5 h-0.5 bg-white"></div>
                <div class="w-5 h-0.5 bg-white"></div>
              </div>
            </button>
            <button class type="button" v-on:click="toggleNavbar()"></button>
          </div>
          <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center">
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i class="text-lg leading-lg text-white opacity-75" />
                  <RouterLink to="/HomeView" class="text-white">Home</RouterLink>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i class="text-lg leading-lg text-white opacity-75" />
                  <RouterLink to="/InsightsView" class="text-white">COVID-19 Insights</RouterLink>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i class="text-lg leading-lg text-white opacity-75" />
                  <RouterLink to="/HealthWellbeing" class="text-white">Health and Wellbeing</RouterLink>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i class="text-lg leading-lg text-white opacity-75" />
                  <RouterLink to="/Insights" class="text-white">COVID-19 Updates</RouterLink>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i class="text-lg leading-lg text-white opacity-75" />
                  <RouterLink to="/Insights" class="text-white">About</RouterLink>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
@import "../src/assets/base.css";
@import "./index.css";
</style>
