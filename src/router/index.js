import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/cv',
    name: 'cv',
    component: function (){
      return import ('../views/CvView.vue')

    }
    
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: function () {
      return import('../views/InicioView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
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
