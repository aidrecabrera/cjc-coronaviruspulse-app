import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsightsView from '../views/UpdatesView.vue'
import HealthWellbeingView from '../views/HealthWellbeingView.vue'
import UpdatesView from '../views/UpdatesView.vue'
import AboutView from '../views/AboutsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/homeview',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    },
    {
      path: '/insightsview',
      name: 'insights',
      component: InsightsView,
      meta: {
        title: 'Insights - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    },
    {
      path: '/healthwellbeingview',
      name: 'healthwellbeing',
      component: HealthWellbeingView,
      meta: {
        title: 'Health & Wellbeing - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    },
    {
      path: '/updatesview',
      name: 'updates',
      component: UpdatesView,
      meta: {
        title: 'COVID-19 Updates - COVID Pulse | Digos City Coronavirus Resource Center'
      }
    },
    {
      path: '/aboutview',
      name: 'about',
      component: AboutView,
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
