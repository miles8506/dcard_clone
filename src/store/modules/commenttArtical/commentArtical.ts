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
      // mainArtical: {
      //   userName: '',
      //   title: '',
      //   gender: 0,
      //   content: '',
      //   imgPath: '',
      //   timer: 0,
      //   timerStamp: 0,
      //   sort: '',
      //   commentTotal: 0,
      //   tagTotal: 0,
      //   elseUserComment: []
      // }
      articalTimeStamp: 0
    };
  },
  mutations: {
    setIsshowState(state) {
      state.isShowStatus = !state.isShowStatus;
    },
    setTimeStamp(state, timeStamp) {
      // test
      // const date = new Date();
      // const res = dayjs(date).format('MM月DD日 HH:mm');
      // state.mainArtical = { ...articalItem };
      // state.mainArtical.articalDate = res;
      state.articalTimeStamp = timeStamp;
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
