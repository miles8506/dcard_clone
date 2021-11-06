import { setupSortItem } from '@/store';
import { setSearchSort } from './setSearchSort';

export function globalRegisterFn() {
  setSearchSort();
  setupSortItem();
}
