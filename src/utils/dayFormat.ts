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
