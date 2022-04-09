import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsightsView from '../views/InsightsView.vue'
import HealthWellbeingView from '../views/HealthWellbeingView.vue'
import UpdatesView from '../views/UpdatesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/homeview',
      name: 'home',
      component: HomeView
    },
    {
      path: '/insightsview',
      name: 'insights',
      component: InsightsView
    },
    {
      path: '/healthwellbeingview',
      name: 'healthwellbeing',
      component: HealthWellbeingView
    },
    {
      path: '/updatesview',
      name: 'updates',
      component: UpdatesView
    }
  ]
})

export default router
