<script>
import $ from "jquery";
export default {
  mounted() {
    $(function () {
      $("#TheCard0").hover(
        function () {
          $("#TheButton0").css({
            "border-width": "1px",
            "border-color": "black",
            "padding-left": "1.25rem",
            "padding-right": "1.25rem",
            "transition-timing-function": "ease-in",
          });
        },
        function () {
          // on mouseout, reset the background colour
          $("#TheButton0").css({
            "border-width": "0px",
            "border-opacity": "0",
            "padding-left": "0rem",
            "padding-right": "0rem",
            "transition-timing-function": "ease-out",
            "transition-delay": "0.1s",
          });
        }
      ),
        $("#TheCard1").hover(
          function () {
            $("#TheButton1").css({
              "border-width": "1px",
              "border-color": "black",
              "padding-left": "1.25rem",
              "padding-right": "1.25rem",
              "transition-timing-function": "ease-in",
            });
          },
          function () {
            // on mouseout, reset the background colour
            $("#TheButton1").css({
              "border-width": "0px",
              "border-opacity": "0",
              "padding-left": "0rem",
              "padding-right": "0rem",
              "transition-timing-function": "ease-out",
              "transition-delay": "0.1s",
            });
          }
        ),
        $("#TheCard2").hover(
          function () {
            $("#TheButton2").css({
              "border-width": "1px",
              "border-color": "black",
              "padding-left": "1.25rem",
              "padding-right": "1.25rem",
              "transition-timing-function": "ease-in",
            });
          },
          function () {
            // on mouseout, reset the background colour
            $("#TheButton2").css({
              "border-width": "0px",
              "border-opacity": "0",
              "padding-left": "0rem",
              "padding-right": "0rem",
              "transition-timing-function": "ease-out",
              "transition-delay": "0.1s",
            });
          }
        );
    });
  },
};
</script>

<template>
  <main class="bg-white">
    <div class="flex flex-wrap items-center justify-center max-w-full py-5 pb-20">
      <div class="
          container
          flex flex-initial
          items-center
          justify-center
          px-36
          divide-x divide-gray-500
          mb-7
        ">
        <div class="w-full">
          <h1 class="font-serif text-black text-5xl pt-20 pb-5">
            Latest COVID-19 Updates and Messages
          </h1>
        </div>
        <div class="col-span-2 text-black pl-7 pt-16 pb-5">
          <p>
            You can stay updated by continue reading the latest COVID-19 updates
            from the Government of Digos City, Department of Health, World
            Health Organization, and other various organizations.
          </p>
          <button onclick="window.open('http://google.com','_blank')" class="
              mt-5
              px-5
              py-2
              flex
              align-middle
              bg-white
              border border-black
              hover:bg-black hover:text-white
              ease-in-out
              duration-300
            ">
            Check the latest COVID-19 updates and messages
            <div>
              <svg class="ml-2 -mr-1 w-5 h-5 pt-1" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="flex">
        <div id="TheCard0" class="main-card">
          <a href="#">
            <img class="rounded-t-lg" src="    " alt />
          </a>
          <div class="p-5">
            <a href="#">
              <span class="main-card-heading">National COVID-19 Vaccination Days Schedule</span>
            </a>
            <p class="main-card-date">March 7, 2022</p>
            <a href="#" id="TheButton0" class="main-card-b">
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
        <div id="TheCard1" class="main-card">
          <a href="#">
            <img class="rounded-t-lg" src=" " alt />
          </a>
          <div class="p-5">
            <a href="#">
              <span class="main-card-heading">City of Government COVID-19 Guidance Update</span>
            </a>
            <p class="main-card-date">March 1, 2022</p>
            <a href="#" id="TheButton1" class="main-card-b">
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
        <div id="TheCard2" class="main-card">
          <a href="#">
            <img class="rounded-t-lg" src="    " alt />
          </a>
          <div class="p-5">
            <a href="#">
              <span class="main-card-heading">Digos City Under COVID-19 Executive Order No.001</span>
            </a>
            <p class="main-card-date">January 17, 2022</p>
            <a href="#" id="TheButton2" class="main-card-b">
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
    <div></div>
  </main>
</template>

<style scoped>
.main-card {
  @apply max-w-sm bg-yellow hover:bg-transparent ease-in-out duration-500 shadow-md font-serif p-5 mb-3.5 mx-3 content-between bg-opacity-50;
}

.main-card-heading {
  @apply link-underline link-underline-black text-black py-1 pb-2 text-3xl tracking-wide leading-relaxed;
}

.main-card-date {
  @apply py-1 pt-5 pb-3 font-normal text-black;
}

.main-card-b {
  @apply mt-1 inline-flex items-center py-2 text-sm font-medium text-center text-black rounded-lg hover:border hover:border-red hover:px-5 focus:ring-4 focus:outline-none focus:ring-slate-500 ease-in-out duration-300;
}

.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 3px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.7s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#582c3f, #582c3f);
}

.link-underline:hover {
  background-size: 100% 3px;
  background-position: 0 100%;
}

.svg-wrapper {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 500px;
}

.shape1,
.shape2 {
  stroke-dasharray: 1120;
  stroke-width: 5px;
  fill: transparent;
  stroke: #19f6e8;
  border-bottom: 5px solid black;
  transition-timing-function: linear;
  transition: stroke-dashoffset 4s, stroke-dasharray 4s;
}

.shape1 {
  stroke-dashoffset: 1120;
}

.shape2 {
  stroke-dashoffset: -1120;
}

.text {
  font-family: "Roboto Condensed";
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 8px;
  color: #fff;
  top: -48px;
  position: relative;
}

.svg-wrapper:hover .shape1,
.svg-wrapper:hover .shape2 {
  stroke-dashoffset: 0;
  stroke-dasharray: 1120;
}
</style>