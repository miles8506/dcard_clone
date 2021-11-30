import { createStore, useStore as useVuexStore, Store } from 'vuex';
import type { margeVuexState, IrootState } from './type';

// module
import { asideModule } from './modules/aside/aside';
import { commentArticalModule } from './modules/commenttArtical/commentArtical';
import { mSearchWindowModule } from './modules/mSearchWindow/mSearchWindow';
import { publicArticalModule } from './modules/publicArtical/publicArtical';

// firebase
import { firebase } from '@/service';

// utils
import { localStorage } from '@/utils';

// api
import { requestColApi } from '@/service';

export const store = createStore<IrootState>({
  state: {
    isShowMask: false,
    isShowLargeQrcode: false,
    isShowScroll: false,
    isShowMAside: false,
    scrollTop: 0
  },
  mutations: {
    setShowMask(state, flag?: boolean) {
      if (flag !== undefined) {
        state.isShowMask = flag;
      } else {
        state.isShowMask = !state.isShowMask;
      }
    },
    setShowLargeQrcode(state) {
      state.isShowLargeQrcode = !state.isShowLargeQrcode;
    },
    setShowScroll(state, flag) {
      state.isShowScroll = flag;
    },
    setShowMAside(state) {
      // if (flag) state.isShowMAside = flag;
      state.isShowMAside = !state.isShowMAside;
    },
    setScrollTop(state, positionTop) {
      state.scrollTop = positionTop;
    }
  },
  actions: {},
  getters: {
    getScrollTop(state) {
      return state.scrollTop;
    }
  },
  modules: {
    asideModule,
    commentArticalModule,
    mSearchWindowModule,
    publicArticalModule
  }
});

export function useStore(): Store<margeVuexState> {
  return useVuexStore();
}

export function setupFns() {
  // 刷新頁面時驗證使用者登入的狀態

  firebase.auth().onAuthStateChanged(function (user: any) {
    // 判斷user為login status，但並無將userinfo保存至local時執行
    if (user?.email) {
      const userInfo = localStorage.getItem('clone_dcard_user_info');
      if (userInfo === '' || userInfo === null) {
        requestColApi('user').then((res: any) => {
          const filterUser = res.filter(
            (item: any) => item.data().account === user.email
          );
          localStorage.setItem('clone_dcard_user_info', filterUser[0].data());
          location.reload();
        });
      }
    }
  });

  // search sort
  store.commit('mSearchWindowModule/resetSearchSort');

  // sort area
  store.dispatch('asideModule/getImmediatelyItem', {
    colName: 'asideImmediately',
    docName: '94h8mmiunVohLfnTEo8x'
  });
}

export { IrootState };
