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
      searchIptModel: '',
      judgeListLen: false,
      isShowSearchArea: false,
      searchValue: ''
    };
  },
  mutations: {
    resetSearchSort(state) {
      state.searchSortArr = localStorage.getItem('synthesizeRecode');
    },
    setSearchSortArr(state, searchRecode: string[]) {
      state.searchSortArr = searchRecode;
    },
    setShowSerchSort(state, flag: boolean) {
      state.isShowSearchSort = flag;
    },
    setSearchIconModel(state, content) {
      state.searchIconModel = content;
    },
    setJudgeListLen(state, flag: boolean) {
      state.judgeListLen = flag;
    },
    setShowSearchArea(state) {
      state.isShowSearchArea = !state.isShowSearchArea;
    },
    setSearchValue(state, payload) {
      state.searchValue = payload;
    },
    setSearchIptModel(state, searchText) {
      state.searchIptModel = searchText;
    }
    // setPcSearchValue(state, payload) {
    //   state.pcSearchValue = payload;
    // }
    // setScreenWidthStatus(state, flag) {
    //   state.screenWidthStatus = flag;
    // }
  }
  // getters: {
  //   getSearchIconModel(state) {
  //     return state.searchIconModel;
  //   }
  // }
};

export { mSearchWindowModule };
