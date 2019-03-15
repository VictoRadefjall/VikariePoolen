import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

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
      children: [
        {
          path: '/vikarielista/:id',
          name: 'vikarieprofil',
          component: () => import('./views/Vikarieprofil.vue')
        }
      ]
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('./views/Panel.vue'),
      children: [
        {
          path: '/edit',
          name: 'edituser',
          component: () => import('./views/EditUser.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'adduser',
      component: () => import('./views/AddUser.vue')
    },
  ]
});
