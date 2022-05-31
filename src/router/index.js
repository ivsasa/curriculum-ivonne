import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/experience',
    name: 'experience',
    component: function () {
      return import('../views/ExperienceView.vue')
    }
  },
  {
    path: '/prueba',
    name: 'prueba',
    component: function () {
      return import ('../views/PruebaView.vue')
    }
  },
  {
    path: '/prueba2',
    name: 'prueba2',
    component: function () {
      return import ('../views/Prueba2View.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
