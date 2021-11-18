// testconfig
import { articalListConfig } from '@/views/main/artical/config/listTestConfig';
import { boardList } from '@/views/main/mSearchWindow/synthesize/config/boardItemConfig';
// import { boardList } from '@/views/main/mSearchWindow/board/config/testListConfig';

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
      emits('emitCpnsData', articalListConfig, boardList);
      store.commit('mSearchWindowModule/setShowSerchSort');
      break;
    case 1:
      emits('emitCpnsData', articalListConfig, boardList);
      break;
    case 2:
      emits('emitCpnsData', articalListConfig, boardList);
  }
}

// init search list
// export function initSearchData(index: number, emits: any) {
// switch (index) {
//   case 0:
// emits('emitCpnsData', [], []);
// break;
// case 1:
// emits('emitCpnsData', []);
// }
// }
