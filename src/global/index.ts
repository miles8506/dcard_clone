import { setupFns } from '@/store';
import { setSearchSort } from './setSearchSort';

export function globalRegisterFn() {
  setSearchSort();
  setupFns();
}
