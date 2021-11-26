import { createStore, useStore as useVuexStore, Store } from 'vuex';
import type { margeVuexState, IrootState } from './type';

// module
import { asideModule } from './modules/aside/aside';
import { commentArticalModule } from './modules/commenttArtical/commentArtical';
import { mSearchWindowModule } from './modules/mSearchWindow/mSearchWindow';

import { firebase } from '@/service';
import { localStorage } from '@/hook/localStorageClass';

export const store = createStore<IrootState>({
  state: {
    isShowMask: false,
    isShowLargeQrcode: false,
    isShowLoginHeader: false,
    isShowScroll: false,
    isShowMAside: false,
    scrollTop: 0
  },
  mutations: {
    setShowMask(state) {
      state.isShowMask = !state.isShowMask;
    },
    setShowLargeQrcode(state) {
      state.isShowLargeQrcode = !state.isShowLargeQrcode;
    },
    setIsshowLoginHeader(state, flag) {
      state.isShowLoginHeader = flag;
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
    mSearchWindowModule
  }
});

export function useStore(): Store<margeVuexState> {
  return useVuexStore();
}

export function setupFns() {
  // 刷新頁面時驗證使用者登入的狀態
  firebase.auth().onAuthStateChanged(function (user: any) {
    // if (user.email) {
    //   localStorage.setLocalItem('clone_dcard_user_name', user.email);
    // } else {
    //   localStorage.setLocalItem('clone_dcard_user_name', '');
    // }
    user?.email
      ? localStorage.setLocalItem('clone_dcard_user_name', user.email)
      : localStorage.setLocalItem('clone_dcard_user_name', '');
  });
  store.commit('mSearchWindowModule/resetSearchSort');
}

export { IrootState };
