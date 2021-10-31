import { createStore, useStore as useVuexStore, Store } from 'vuex';
import type { margeVuexState, IrootState } from './type';

// module
import { asideModule } from './modules/aside/aside';
import { commentArticalModule } from './modules/commenttArtical/commentArtical';

export const store = createStore<IrootState>({
  state: {
    isShowMask: false,
    isShowLargeQrcode: false,
    isShowLoginHeader: false,
    isShowScroll: false,
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
    setScrollTop(state, positionTop) {
      state.scrollTop = positionTop;
    }
  },
  actions: {},
  modules: {
    asideModule,
    commentArticalModule
  },
  getters: {
    getScrollTop(state) {
      return state.scrollTop;
    }
  }
});

export function useStore(): Store<margeVuexState> {
  return useVuexStore();
}

export function setupSortItem() {
  // store.dispatch('asideModule/getAsideItem');
}

export { IrootState };
