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
      component: () => import('./views/Vikarielista.vue'),
    },
    {
      path: '/avboka',
      name: 'avboka',
      component: () => import('./views/Avboka.vue')
    },
    {
      path: '/boka',
      name: 'boka',
      component: () => import('./views/Boka.vue'),
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('./views/Confirm.vue')
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('./views/Panel.vue'),
      children: [
        {
          path: '/add',
          name: 'adduser',
          component: () => import('./views/AddUser.vue')
        },
        {
          path: '/edit',
          name: 'edituser',
          component: () => import('./views/EditUser.vue')
        }
      ]
    }
  ]
})
