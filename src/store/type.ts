import type { IasideType } from '@/store/modules/aside/type';
import type { IcommentAtical } from '@/store/modules/commenttArtical/type';
import type { IMsearchWindow } from '@/store/modules/mSearchWindow/type';
import type { IpublicArtical } from '@/store/modules/publicArtical/type';
import type { IuserInfo } from '@/store/modules/userInfo/type';

interface IrootState {
  isShowMask: boolean;
  isShowLargeQrcode: boolean;
  isShowScroll: boolean;
  isShowMAside: boolean;
  articalBasisStatus: boolean;
  articalType: string;
  scrollTop: number;
}

interface IotherState {
  asideModule: IasideType;
  commentArticalModule: IcommentAtical;
  mSearchWindowModule: IMsearchWindow;
  publicArticalModule: IpublicArtical;
  userInfoModule: IuserInfo;
}

type margeVuexState = IrootState & IotherState;

export { IrootState, margeVuexState };
