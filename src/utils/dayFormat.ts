import dayjs from 'dayjs';
export function nowTimerFn(date: Date) {
  return dayjs(date).format('YYYY/MM/DD hh:mm:ss');
}

export function timeStampFn(date: Date) {
  return dayjs(date).valueOf();
}

export function computedTimeGapFn(beforeStamp: number) {
  const nowTime = timeStampFn(new Date());
  return nowTime - beforeStamp;
}

export function timeAgoFn(timer: number) {
  // const timer = store.state.commentArticalModule.articalTimeStamp;
  const dayMs = computedTimeGapFn(timer);
  let res: any;
  if (dayMs < 3600000) {
    // minute
    res = `${(dayMs / 1000 / 60).toFixed(0)} 分鐘前`;
  } else if (dayMs < 86400000) {
    // hour
    res = `${(dayMs / 1000 / 60 / 60).toFixed(0)} 小時前`;
  } else {
    // day
    res = `${(dayMs / 1000 / 60 / 60 / 24).toFixed(0)} 天前`;
  }
  return res;
}

// 計算特定天數範圍區間
export function dayRange(dataList: any[], limitStamp: number) {
  const currentTime: number = dayjs(new Date()).valueOf();
  const limitTimer = currentTime - limitStamp;
  const resFilter = dataList.filter((item) => item.timerStamp >= limitTimer);
  return resFilter;
}

// a day total time stamp
export function currentDayStamp(dataList: any[]) {
  const y = new Date().getFullYear();
  const m = new Date().getMonth();
  const d = new Date().getDate();
  const timeStamp = dayjs(`${y}/${m}/${d}`).valueOf();
  const currentTimeStamp = timeStamp + 86400000;
  const filterRes = dataList.filter(
    (item) =>
      item.timerStamp >= timeStamp && item.timerStamp <= currentTimeStamp
  );
  return filterRes;
}
