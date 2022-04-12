import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'
import covidinsights from '../views/InsightsView.vue'
import covidhealth from '../views/HealthWellbeingView.vue'
import covidupdates from '../views/UpdatesView.vue'
import about from '../views/AboutsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
     redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: 'Home - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    },
    {
      path: '/covidinsights',
      name: 'covidinsights',
      component: covidinsights,
      meta: {
        title: 'Insights - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    },
    {
      path: '/covidhealth',
      name: 'covidhealth',
      component: covidhealth,
      meta: {
        title: 'Health & Wellbeing - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    },
    {
      path: '/covidupdates',
      name: 'covidupdates',
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

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next();
})

export default router
