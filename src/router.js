import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('./views/Start.vue')
    },
    {
      path: '/vikarielista',
      name: 'vikarielista',
      component: () => import('./views/Vikarielista.vue')
    }
  ]
})
