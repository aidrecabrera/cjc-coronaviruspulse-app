<script>
</script>

<template>
  <main class=" bg-white">
    <div class="flex flex-wrap items-center justify-center max-w-full">
      <div class="container flex flex-initial items-center justify-center px-36 divide-x divide-gray-500 mb-7">
        <div class="w-full">
          <h1 class="font-serif text-black text-5xl pt-16 pb-5">Latest COVID-19 Updates and Messages</h1>
        </div>
        <div class="col-span-2 text-black pl-7 pt-16 pb-5">
          <p>Read the latest COVID-19 updates from the Government of Digos City, Department of Health, World Health
            Organization, and other various organizations.</p>
          <button class=" pt-5">See all the latest COVID-19 updates and messages</button>
        </div>
      </div>
      <div class="flex">
        <div class="main-card">
          <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="main-card-heading">National Vaccination
                Days
                Schedule</h5>
            </a>
            <p class="main-card-date">March 7, 2022</p>
            <a href="#" class="main-card-b">
              Read More
              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div class="main-card">
          <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="main-card-heading">COVID-19
                Guidance Update</h5>
            </a>
            <p class="main-card-date">March 1, 2022</p>
            <a href="#" class="main-card-b">
              Read More
              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div class="main-card">
          <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="main-card-heading">Digos City Under
                COVID-19 Executive Order No.001</h5>
            </a>
            <p class="main-card-date">January 17, 2022</p>
            <a href="#" class="main-card-b">
              Read More
              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    </main>
  
</template>

<style scoped>
.main-card {
  @apply max-w-sm bg-yellow shadow-md font-serif p-5 mb-3.5 mx-3 content-between;
}

.main-card-heading {
  @apply py-1 pb-3 text-3xl text-black tracking-wide;
}

.main-card-date {
  @apply py-2 font-normal text-black;
}

.main-card-b {
  @apply inline-flex items-center py-2 text-sm font-medium text-center text-black rounded-lg hover:border hover:border-red hover:px-5 focus:ring-4 focus:outline-none focus:ring-slate-500 ease-in-out duration-300;
}
</style>