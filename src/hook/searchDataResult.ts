// testconfig
import { articalListConfig } from '@/views/main/artical/config/listTestConfig';
import { boardList } from '@/views/main/mSearchWindow/synthesize/config/boardItemConfig';
// import { boardList } from '@/views/main/mSearchWindow/board/config/testListConfig';

import { Store } from 'vuex';
import { margeVuexState } from '@/store/type';

// utils
import { setAllQueryApi } from '@/service/requestApi';

// get search list result
export async function searchDataResult(
  index: number,
  emits: any,
  store: Store<margeVuexState>
) {
  let res: any;
  switch (index) {
    case 0:
      res = await setAllQueryApi('artical', 'asideImmediately');
      emits('emitCpnsData', res[0].value, res[1].value);
      store.commit('mSearchWindowModule/setShowSerchSort', false);
      break;
    case 1:
      res = await setAllQueryApi('artical', 'asideImmediately');
      emits('emitCpnsData', res[0].value, res[1].value);
      break;
    case 2:
      res = await setAllQueryApi('artical', 'asideImmediately');
      emits('emitCpnsData', res[0].value, res[1].value);
      break;
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
