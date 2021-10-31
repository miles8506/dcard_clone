import type { IasideType } from '@/store/modules/aside/type';
import type { IcommentAtical } from '@/store/modules/commenttArtical/type';

interface IrootState {
  isShowMask: boolean;
  isShowLargeQrcode: boolean;
  isShowLoginHeader: boolean;
  isShowScroll: boolean;
  scrollTop: number;
}

interface IotherState {
  asideModule: IasideType;
  commentArticalModule: IcommentAtical;
}

type margeVuexState = IrootState & IotherState;

export { IrootState, margeVuexState };
