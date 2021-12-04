import { createStore, useStore as useVuexStore, Store } from 'vuex';
import type { margeVuexState, IrootState } from './type';

// module
import { asideModule } from './modules/aside/aside';
import { commentArticalModule } from './modules/commenttArtical/commentArtical';
import { mSearchWindowModule } from './modules/mSearchWindow/mSearchWindow';
import { publicArticalModule } from './modules/publicArtical/publicArtical';
import { userInfoModule } from './modules/userInfo/userInfo';

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
    articalBasisStatus: true,
    isShowUserMIcon: true,
    articalType: '',
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
      state.isShowMAside = !state.isShowMAside;
    },
    setArticalBasisStatus(state) {
      state.articalBasisStatus = !state.articalBasisStatus;
    },
    setArticalType(state, payload) {
      state.articalType = payload;
    },
    setScrollTop(state, positionTop) {
      state.scrollTop = positionTop;
    },
    setShowUserMIcon(state, status) {
      state.isShowUserMIcon = status;
    }
  },
  actions: {},
  getters: {
    getScrollTop(state) {
      return state.scrollTop;
    },
    getArticalBasisStatus(state) {
      return state.articalBasisStatus;
    },
    getArticalType(state) {
      return state.articalType;
    }
  },
  modules: {
    asideModule,
    commentArticalModule,
    mSearchWindowModule,
    publicArticalModule,
    userInfoModule
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
      } else {
        // 將user likeArtical and likeComment save for vuex
        requestColApi('user').then((res: any) => {
          const filterUser = res.filter(
            (item: any) => item.data().account === user.email
          );
          localStorage.setItem('clone_dcard_user_info', filterUser[0].data());
          store.commit(
            'userInfoModule/setLikeArtical',
            filterUser[0].data().likeArtical
          );
          store.commit(
            'userInfoModule/setLikeComment',
            filterUser[0].data().likeComment
          );
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

  // aritcal basis
  localStorage.setItem('artical_basis', '熱門');

  // artical type
  localStorage.setItem('artical_type', '所有看板');

  // artical sort
  // localStorage.setItem('artical_sort', '所有看板');
}

export { IrootState };
