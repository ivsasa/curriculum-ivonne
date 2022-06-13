import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/cv',
    name: 'cv',
    component: function (){
      return import ('../views/CvView.vue')

    },meta: {
      title:"CV"
    }
    
  },
  {
    path: '/',
    name: 'inicio',
    component: function () {
      return import('../views/InicioView.vue')
    },
    meta: {
      title:"Inicio"
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    },meta: {
      title:"Login"
    }
  },
  
  {
    path: '/cvfirebase',
    name: 'cvfirebase',
    component: function () {
      return import ('../views/CurrFireBase.vue')
    }
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



router.beforeEach((to,from,next) =>{
  window.document.title =to.meta.title?to.meta.title:'Ivsasa`s page';
  next();
});

export default router
