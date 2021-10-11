import type { Module } from 'vuex';
import type { IrootState } from '../../index';
import type { IasideType } from './type';
import type { IsortItem } from '@/components/dAside/type/type';

// server
import { db } from '@/service';

const asideModule: Module<IasideType, IrootState> = {
  namespaced: true,
  state() {
    return {
      asideItem: []
    };
  },
  mutations: {
    setAsideItem(state, payload: IsortItem[]) {
      state.asideItem = payload;
      console.log(payload);
    }
  },
  actions: {
    async getAsideItem({ commit }) {
      const dataArr: any = [];
      const res = await db.collection('aside').get();
      res.forEach((item) => {
        dataArr.push(item.data());
      });
      commit('setAsideItem', dataArr[0].aside_item);
    }
  },
  getters: {}
};

export { asideModule };
