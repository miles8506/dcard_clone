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
      elseUserComment: [],
      likeComment: {
        status: false,
        timeStamp: 0,
        compute: ''
      }
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
      // selectName 1.newIssue 2.timer
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
    },
    setLikeComment(state, payload) {
      const flag = !state.likeComment.status;
      state.likeComment = {
        status: flag,
        timeStamp: payload.timeStamp,
        compute: payload.computeStatus
      };
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
    },
    getLikeComment(state) {
      return state.likeComment;
    },
    getArticalTimeStamp(state) {
      return state.articalTimeStamp;
    }
  }
};

export { commentArticalModule };

// rgb(234, 92, 92)
