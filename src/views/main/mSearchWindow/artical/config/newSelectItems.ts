import type { ISearchItems } from '../type/type';

const newIssueSelect: ISearchItems = {
  selectName: 'newIssue',
  selectItems: ['最新發佈', '心情數']
};
const timerSelct: ISearchItems = {
  selectName: 'timer',
  selectItems: ['不限時間', '1天內', '7天內', '20天內']
};

export { newIssueSelect, timerSelct };
