import type { Module } from 'vuex';
import type { IcommentAtical } from './type';
import type { IrootState } from '../../type';

const commentArticalModule: Module<IcommentAtical, IrootState> = {
  namespaced: true,
  state() {
    return {
      isShowStatus: false
    };
  },
  mutations: {
    setIsshowState(state) {
      state.isShowStatus = !state.isShowStatus;
    }
  }
};

export { commentArticalModule };
