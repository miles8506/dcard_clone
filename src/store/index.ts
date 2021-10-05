import { createStore, useStore as useVuexStore, Store } from 'vuex';
import type { margeVuexState, IrootState } from './type';
import { asideModule } from './modules/aside/aside';

export const store = createStore<IrootState>({
  state: {
    name: 'miles'
  },
  mutations: {},
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
