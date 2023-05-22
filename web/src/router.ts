import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@views/admin/layout.vue'),
      children: [
        {
          path: '',
          name: 'admin_loading',
          component: () => import('@views/admin/loading.vue')
        },
      ],
    },
    {
      path: '/admin/login',
      name: 'admin_login',
      component: () => import('@views/admin/login/login.vue')
    },
    {
      path: '/',
      component: () => import('@views/client/layout.vue'),
      children: [
        {
          path: '/',
          component: () => import('@views/client/home/home.vue'),
        },
      ]
    },
  ]
})