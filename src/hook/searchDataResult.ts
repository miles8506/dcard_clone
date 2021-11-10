// testconfig
import { articalListConfig } from '@/views/main/artical/config/listTestConfig';
import { boardItemConfig } from '@/views/main/mSearchWindow/synthesize/config/boardItemConfig';

import { Store } from 'vuex';
import { margeVuexState } from '@/store/type';

// get search list result
export function searchDataResult(
  index: number,
  emits: any,
  store: Store<margeVuexState>
) {
  switch (index) {
    case 0:
      emits('emitSynthesizeData', articalListConfig, boardItemConfig);
      store.commit('mSearchWindowModule/setShowSerchSort');
      break;
  }
}

// init search list
export function initSearchData(index: number, emits: any) {
  switch (index) {
    case 0:
      emits('emitSynthesizeData', [], []);
      break;
  }
}
