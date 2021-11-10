import type { InavBarType } from '../type/type';

// component
import Synthesize from '../synthesize/synthesize.vue';
import Artical from '../artical/artical.vue';
import Board from '../board/board.vue';

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
