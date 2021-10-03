import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
