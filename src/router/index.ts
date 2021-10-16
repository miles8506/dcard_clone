import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: [
    //   {
    //     path: '/all',
    //     name: 'all',
    //     component: () =>
    //       import('@/views/main/artical/articalAll/articalAll.vue')
    //   }
    // ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
