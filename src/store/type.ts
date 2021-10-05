import type { IasideType } from '@/store/modules/aside/type';

interface IrootState {
  name: string;
}

interface IotherState {
  asideModule: IasideType;
}

type margeVuexState = IrootState & IotherState;

export { IrootState, margeVuexState };
