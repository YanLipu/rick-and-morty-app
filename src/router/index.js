import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('../views/Locations/Locations.vue')
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: () => import('../views/Episodes/Episodes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
