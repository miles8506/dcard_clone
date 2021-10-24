import type { IasideType } from '@/store/modules/aside/type';

interface IrootState {
  isShowMask: boolean;
  isShowLargeQrcode: boolean;
  isShowLoginHeader: boolean;
}

interface IotherState {
  asideModule: IasideType;
}

type margeVuexState = IrootState & IotherState;

export { IrootState, margeVuexState };
