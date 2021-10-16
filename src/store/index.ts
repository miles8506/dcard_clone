import { createStore, useStore as useVuexStore, Store } from 'vuex';
import type { margeVuexState, IrootState } from './type';
import { asideModule } from './modules/aside/aside';

export const store = createStore<IrootState>({
  state: {
    isShowMask: false,
    isShowLargeQrcode: false
  },
  mutations: {
    setShowMask(state) {
      state.isShowMask = !state.isShowMask;
    },
    setShowLargeQrcode(state) {
      state.isShowLargeQrcode = !state.isShowLargeQrcode;
    }
  },
  actions: {},
  modules: {
    asideModule
  }
});

export function useStore(): Store<margeVuexState> {
  return useVuexStore();
}

export function setupSortItem() {
  store.dispatch('asideModule/getAsideItem');
}

export { IrootState };
