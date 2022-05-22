/* Importing the router and the views. */
import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/TheHomeView.vue'
import covidinsights from '../views/TheInsightsView.vue'
import covidhealth from '../views/TheHealthWellbeingView.vue'
import covidupdates from '../views/TheUpdatesView.vue'
import about from '../views/TheAboutsView.vue'

/* Creating a router object. */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
     redirect: '/home'
    }, 
    {
      path: '/home',
      name: 'Home',
      component: home,
      meta: {
        title: 'Home - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    },
    {
      path: '/covidinsights',
      name: 'CovidInsights',
      component: covidinsights,
      meta: {
        title: 'Insights - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    },
    {
      path: '/covidhealth',
      name: 'CovidHealth',
      component: covidhealth,
      meta: {
        title: 'Health & Wellbeing - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    },
    {
      path: '/covidupdates',
      name: 'CovidUpdates',
      component: covidupdates,
      meta: {
        title: 'COVID-19 Updates - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: 'About - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    }
  ]
})

/* A router guard that is called before each route change. */
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next();
})

export default router
