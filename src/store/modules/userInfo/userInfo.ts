import { Module } from 'vuex';
import type { IrootState } from '../../type';
import type { IuserInfo } from './type';

const userInfoModule: Module<IuserInfo, IrootState> = {
  namespaced: true,
  state() {
    return {
      likeArtical: [],
      likeComment: []
    };
  },
  mutations: {
    setLikeArtical(state, payload) {
      state.likeArtical = payload;
    },
    addLikeArtical(state, payload) {
      state.likeArtical.push(payload);
    },
    subLikeArtical(state, index) {
      state.likeArtical.splice(index, 1);
    },
    setLikeComment(state, payload) {
      state.likeComment = payload;
    },
    addLikeComment(state, payload) {
      state.likeComment.push(payload);
    },
    subLikeComment(state, index) {
      state.likeComment.splice(index, 1);
    }
  }
};

export { userInfoModule };
