import type { Module } from 'vuex';
import type { IcommentAtical } from './type';
import type { IrootState } from '../../type';

const commentArticalModule: Module<IcommentAtical, IrootState> = {
  namespaced: true,
  state() {
    return {
      isShowStatus: false,
      isShowSelectWindow: false,
      issueCurrentName: '最新發佈',
      itmerCurrentName: '不限時間',
      articalTimeStamp: 0,
      elseUserComment: []
    };
  },
  mutations: {
    setIsshowState(state, flag?: boolean) {
      if (flag !== undefined) {
        state.isShowStatus = flag;
      } else {
        state.isShowStatus = !state.isShowStatus;
      }
    },
    setTimeStamp(state, timeStamp) {
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
    },
    // 將comment存放到array中
    setOtherComment(state, payload) {
      state.elseUserComment = payload;
    },
    // add comment push to elseUserComment array
    pushOtherComment(state, commentItem) {
      state.elseUserComment.push(commentItem);
    }
  },
  getters: {
    getIsShowStatus(state) {
      return state.isShowStatus;
    },
    getIssueCurrentName(state) {
      return state.issueCurrentName;
    },
    getTimerCurrentName(state) {
      return state.itmerCurrentName;
    }
  }
};

export { commentArticalModule };
