import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/admin',
      component: () => import('@/views/admin/home/home.vue')
    },
    {
      path: '/admin/login',
      component: () => import('@/views/admin/login/login.vue')
    },
    {
      path: '/',
      component: () => import('@/views/client/home/home.vue')
    },
  ]
})