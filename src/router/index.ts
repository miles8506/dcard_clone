import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

// firebase
import { firebase } from '@/service';

import { localStorage } from '@/hook/localStorageClass';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/main/mSearchWindow/mSearchWindow.vue')
  },
  {
    path: '/publicArtical',
    name: 'publicArtical',
    component: () => import('@/views/main/publicArtical/publicArtical.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// router.beforeEach((to) => {
//   if (to.path !== '/login') {
//     // 刷新頁面時驗證使用者登入的狀態
//     firebase.auth().onAuthStateChanged(function (user: any) {
//       user
//         ? localStorage.setLocalItem('clone_dcard_user_info', user.email)
//         : localStorage.removeLocalItem('clone_dcard_user_info');
//     });
//   }
// });

export default router;
