import type { Module } from 'vuex';
import type { IrootState } from '../../type';
import type { IMsearchWindow } from './type';

// utils
import { localStorage } from '@/utils';

const mSearchWindowModule: Module<IMsearchWindow, IrootState> = {
  namespaced: true,
  state() {
    return {
      searchSortArr: [],
      isShowSearchSort: true,
      searchIconModel: '',
      judgeListLen: false
    };
  },
  mutations: {
    resetSearchSort(state) {
      state.searchSortArr = localStorage.getItem('synthesizeRecode');
    },
    setSearchSortArr(state, searchRecode: string[]) {
      state.searchSortArr = searchRecode;
    },
    setShowSerchSort(state) {
      state.isShowSearchSort = !state.isShowSearchSort;
    },
    setSearchIconModel(state, content) {
      state.searchIconModel = content;
    },
    setJudgeListLen(state, flag: boolean) {
      state.judgeListLen = flag;
    }
  },
  getters: {
    getSearchIconModel(state) {
      return state.searchIconModel;
    }
  }
};

export { mSearchWindowModule };
