<script setup></script>

<template>
	<main class="relative flex flex-wrap items-center justify-between bg-blue text-yellow">
		<div class="container flex-wrap mx-auto px-32 items-center divide-y divide-yellow pt-10 pb-5">
			<div class="flex font-serif mx-auto justify-evenly pb-7">
				<div class="container">
					<h1 class="text-6xl font-serif">Keep Safe, Digoseños!</h1>
				</div>
				<div class="container text-xs text-right py-3">
					<p class="text-sm ml-5">
						An adaptable, multi-layered approach to keeping our beloved Digos health
						that is grounded in science, our collective knowledge and expertise, and
						public health conditions
					</p>
				</div>
			</div>
			<div class="grid grid-cols-3 py-7 px-0 justify-between text-yellow">
				<div class="main-card">
					<a href="#">
						<img class="rounded-t-lg" src=" " alt />
					</a>
					<div class="p-5">
						<a href="#">
							<h5 class="card-heading">Get vaccinated and boosted</h5>
						</a>
						<p class="card-paragraph">
							Digos City vaccination and boosters are the best defense against
							severe illness from COVID-19. For Cor Jesu College, Inc., COVID-19
							vaccination is required for all community members, that is Cor
							Jesians, as well as COVID-19 boosters for all eligible community
							members. This may include students, faculty, and staff.
						</p>
						<a href="#" class="card-button">
							Vaccine & booster information
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
						<img class="rounded-t-lg" src=" " alt />
					</a>
					<div class="p-5">
						<a href="#">
							<h5 class="card-heading">Stay vigilant and informed</h5>
						</a>
						<p class="card-paragraph">
							Always be updated with COVID-19 related information, and always stay
							vigilant. Informed decisions is a key part of our efforts to contain
							the COVID-19 virus. It allows us to make knowledgable and rational
							decisisons. Hence, through these decisions we will ensure that the
							safety of public health is maintained.
						</p>
						<a href="#" class="card-button">
							COVID-19 related resources
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
						<img class="rounded-t-lg" src=" " alt />
					</a>
					<div class="p-5">
						<a href="#">
							<h5 class="card-heading">Wear a high-quality mask</h5>
						</a>
						<p class="card-paragraph">
							Masking remains critical and is highly effective at reducing the
							spread of COVID-19. Everyone must wear a mask indoors, regardless of
							vaccination and booster status.
						</p>
						<a href="#" class="card-button">
							Masking information
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
	@apply flex justify-between max-w-sm;
}

.card-heading {
	@apply mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow;
}

.card-paragraph {
	@apply pr-5 mb-7 font-sans text-gray-700 dark:text-yellow tracking-wide leading-relaxed text-left;
}

.card-button {
	@apply focus:ring-0 ease-in duration-300 inline-flex items-center py-2 pr-3 text-sm font-medium text-center text-white rounded-lg hover:bg-red hover:text-white hover:pl-3 hover:pr-3 focus:outline-none focus:ring-red dark:text-yellow;
}
</style>
