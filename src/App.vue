<script setup>
// Dear Future Aidre.
// Please forgive me. 
// I can't even begin to
// express how sorry I am.
import { RouterLink, RouterView } from 'vue-router';
</script>

<script>
// A Vue component that is used to toggle the navbar.
export default {
	name: 'purple-navbar',
	data() {
		return {
			showMenu: false,
		};
	},
	methods: {
		toggleNavbar: function () {
			this.showMenu = !this.showMenu;
		},
	},
};
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
					<div v-bind:class="{ hidden: !showMenu, flex: showMenu }" class="lg:flex lg:flex-grow items-center">
						<ul class="flex flex-col lg:flex-row list-none ml-auto">
							<li class="nav-item">
								<a
									class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
									<i class="text-lg leading-lg text-white opacity-75" />
									<RouterLink to="/home" class="text-white">Home</RouterLink>
								</a>
							</li>
							<li class="nav-item">
								<a
									class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
									<i class="text-lg leading-lg text-white opacity-75" />
									<RouterLink to="/covidinsights" class="text-white">COVID-19 Insights</RouterLink>
								</a>
							</li>
							<li class="nav-item">
								<a
									class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
									<i class="text-lg leading-lg text-white opacity-75" />
									<RouterLink to="/covidhealth" class="text-white">Health and Wellbeing</RouterLink>
								</a>
							</li>
							<li class="nav-item">
								<a
									class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
									<i class="text-lg leading-lg text-white opacity-75" />
									<RouterLink to="/covidupdates" class="text-white">COVID-19 Updates</RouterLink>
								</a>
							</li>
							<li class="nav-item">
								<a
									class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
									<i class="text-lg leading-lg text-white opacity-75" />
									<RouterLink to="/about" class="text-white">About</RouterLink>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
	<main>
		<div class="border-b-4 border-yellow bg-black max-w-full">
			<div class="flex flex-wrap items-center justify-center">
				<div class="rounded-sm content-center text-black bg-white box-border w-auto px-5 py-1 my-3">
					<span class="font-bold uppercase py-10">ALWAYS STAY SAFE, DIGOSEñOS!</span>
				</div>
				<span
					class="text-white font-bold tracking-wide uppercase text-sm px-3 py-3 font-sans hover:underline hover:ease-in-out hover:duration-300">
					Wear mask, get vaccinated, and always observe minimum health protocol!
				</span>
			</div>
		</div>
		<RouterView />
	</main>
	<!-- The footer of the COVID Pulse. -->
	<footer>
		<div class="mt-12 mb-16">
			<div class="flex justify-evenly items-baseline w-full">
				<!-- A copyright notice. -->
				<div class="item">
					© 2022 Aidre Cabrera, COVID Pulse, and Cor Jesu College, Inc.
				</div>
				<div class="item">
					<img src="/footer-logo.png" alt="" class="" />
				</div>
				<!-- A flexbox that is used to display the social media links of COVID Pulse. -->
				<div class="item">
					<div class="flex justify-evenly items-center w-auto space-x-10">
						<div class="item">Facebook</div>
						<div class="item">Twitter</div>
						<div class="item">Github</div>
						<div class="item">Cor Jesu College, Inc.</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style>
@import '../src/assets/base.css';
@import './index.css';
</style>
