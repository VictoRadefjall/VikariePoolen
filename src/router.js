import Vue from 'vue';
import Router from 'vue-router';
import auth from './auth';

Vue.use(Router);
let router = new Router({
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
      meta: { 
        requiresAuth: true
      },
      component: () => import('./views/Panel.vue'),
      children: [
        {
          path: '/panel/:id',
          name: 'edituser',
          meta: { 
            requiresAuth: true
          },
          component: () => import('./views/EditUser.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'adduser',
      meta: { 
        requiresAuth: true
      },
      component: () => import('./views/AddUser.vue')
    },
    {
      path: '/login',
      name: 'admin',
      component: () => import('./views/Admin.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.isAuthenticated()) {
    next({ path: '/admin' });
  } else {
    next();
  }
});

export default router;