import { localStorage } from '@/utils';

export function setSearchSort() {
  const res = localStorage.getItem('synthesizeRecode');
  if (res === null) localStorage.setItem('synthesizeRecode', []);
}
