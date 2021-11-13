import type { Module } from 'vuex';
import type { IcommentAtical } from './type';
import type { IrootState } from '../../type';
import dayjs from 'dayjs';

const commentArticalModule: Module<IcommentAtical, IrootState> = {
  namespaced: true,
  state() {
    return {
      isShowStatus: false,
      isShowSelectWindow: false,
      issueCurrentName: '最新發佈',
      itmerCurrentName: '不限時間',
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
    },
    setIsShowSelectWindow(state) {
      state.isShowSelectWindow = !state.isShowSelectWindow;
    },
    setCurrentName(state, { item, selectName }) {
      if (selectName === 'newIssue') {
        state.issueCurrentName = item;
      } else {
        state.itmerCurrentName = item;
      }
    }
  }
};

export { commentArticalModule };
