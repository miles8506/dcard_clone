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
