import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { useStore } from '@/store';

// firebase
import { firebase } from '@/service';

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

// router.beforeEach((to) => {
//   if (to.path === '/login') return;
//   // firebase.auth().onAuthStateChanged((user) => {
//   //   const store = useStore();
//   //   console.log(store);

//   //   if (user) {
//   //     const store = useStore();
//   //     store.commit('setIsshowLoginHeader', true);
//   //   } else {
//   //     store.commit('setIsshowLoginHeader', false);
//   //   }
//   // });
// });

export default router;
