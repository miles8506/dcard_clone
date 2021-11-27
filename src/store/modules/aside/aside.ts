import type { Module } from 'vuex';
import type { IrootState } from '../../index';
import type { IasideType } from './type';
import type {
  IsortItem,
  IimmediatelyItem
} from '@/components/dAside/type/type';

// api
import { requestApi } from '@/service';

const asideModule: Module<IasideType, IrootState> = {
  namespaced: true,
  state() {
    return {
      asideItem: [],
      immediatelyItem: []
    };
  },
  mutations: {
    setAsideItem(state, payload: IsortItem[]) {
      state.asideItem = payload;
    },
    setImmediatelyItem(state, payload: IimmediatelyItem[]) {
      state.immediatelyItem = payload;
    }
  },
  actions: {
    async getAsideItem({ commit }, { colName, docName }) {
      const res: any = await requestApi(colName, docName);
      commit('setAsideItem', res.aside_item);
    },
    async getImmediatelyItem({ commit }, { colName, docName }) {
      const res: any = await requestApi(colName, docName);
      commit('setImmediatelyItem', res.asideImmediately);
    }
  }
};

export { asideModule };
