import type { InavBarType } from '../type/type';

// component
import Synthesize from '../cpns/synthesize.vue';
import Artical from '../cpns/artical.vue';
import Board from '../cpns/board.vue';

const itemNameArr: InavBarType[] = [
  {
    name: '綜合',
    cpnName: Synthesize
  },
  {
    name: '文章',
    cpnName: Artical
  },
  {
    name: '看板',
    cpnName: Board
  }
];

export { itemNameArr };
