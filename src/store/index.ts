import { createStore, useStore as useVuexStore, Store } from 'vuex';
import type { margeVuexState, IrootState } from './type';

// module
import { asideModule } from './modules/aside/aside';
import { commentArticalModule } from './modules/commenttArtical/commentArtical';
import { mSearchWindowModule } from './modules/mSearchWindow/mSearchWindow';
import { publicArticalModule } from './modules/publicArtical/publicArtical';

// import { firebase } from '@/service';
// import { localStorage } from '@/hook/localStorageClass';

export const store = createStore<IrootState>({
  state: {
    isShowMask: false,
    isShowLargeQrcode: false,
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

  // firebase.auth().onAuthStateChanged(function (user: any) {

  //   // user?.email
  //   //   ? localStorage.setLocalItem('clone_dcard_user_info', user.email)
  //   //   : localStorage.setLocalItem('clone_dcard_user_info', '');
  // });

  // search sort
  store.commit('mSearchWindowModule/resetSearchSort');

  // sort area
  store.dispatch('asideModule/getImmediatelyItem', {
    colName: 'asideImmediately',
    docName: '94h8mmiunVohLfnTEo8x'
  });
}

export { IrootState };
