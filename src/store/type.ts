import type { IasideType } from '@/store/modules/aside/type';
import type { IcommentAtical } from '@/store/modules/commenttArtical/type';
import { IMsearchWindow } from './modules/mSearchWindow/type';

interface IrootState {
  isShowMask: boolean;
  isShowLargeQrcode: boolean;
  isShowLoginHeader: boolean;
  isShowScroll: boolean;
  isShowMAside: boolean;
  scrollTop: number;
}

interface IotherState {
  asideModule: IasideType;
  commentArticalModule: IcommentAtical;
  mSearchWindowModule: IMsearchWindow;
}

type margeVuexState = IrootState & IotherState;

export { IrootState, margeVuexState };
