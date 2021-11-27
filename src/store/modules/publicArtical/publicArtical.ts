import type { Module } from 'vuex';
import type { IrootState } from '../../type';
import type { IpublicArtical } from './type';
const publicArticalModule: Module<IpublicArtical, IrootState> = {
  namespaced: true,
  state() {
    return {
      currentItem: ''
    };
  },
  mutations: {
    setCurrentItem(state, item: string) {
      state.currentItem = item;
    }
  }
};

export { publicArticalModule };
