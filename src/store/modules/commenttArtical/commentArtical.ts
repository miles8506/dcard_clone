import type { Module } from 'vuex';
import type { IcommentAtical } from './type';
import type { IrootState } from '../../type';
import dayjs from 'dayjs';

const commentArticalModule: Module<IcommentAtical, IrootState> = {
  namespaced: true,
  state() {
    return {
      isShowStatus: false,
      mainArtical: {
        gender: 0,
        userName: '',
        title: '',
        sort: '',
        articalDate: '',
        tagTotal: 0,
        commentTotal: 0,
        content: ''
      }
    };
  },
  mutations: {
    setIsshowState(state) {
      state.isShowStatus = !state.isShowStatus;
    },
    setMainArtical(state, articalItem) {
      // test
      const date = new Date();
      const res = dayjs(date).format('MM月DD日 HH:mm');
      state.mainArtical = { ...articalItem };
      state.mainArtical.articalDate = res;
    }
  }
};

export { commentArticalModule };
