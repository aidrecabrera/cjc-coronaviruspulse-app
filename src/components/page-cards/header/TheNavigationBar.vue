<script>
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
  <nav class="relative flex flex-wrap items-center justify-between py-8 bg-red mb-3">
    <div class="container px-36 mx-auto flex flex-wrap items-center justify-between">
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <a href="https://cjc.edu.com" class="flex items-center">
          <img
            src="https://apps.cjc.edu.ph/wp-content/uploads/2017/09/cjclogo.png"
            class="mr-3 h-14 sm:h-14"
            alt="COVID Pulse"
          />
          <span
            class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white"
          >COVID Pulse</span>
        </a>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-white block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="fas fa-bars text-black">Hamburger</i>
        </button>
      </div>
      <div
        v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
              <span class="ml-2">Share</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" />
              <span class="ml-2">Tweet</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
              <span class="ml-2">Pin</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>