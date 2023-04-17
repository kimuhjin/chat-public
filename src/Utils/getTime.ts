export const weekday_ko = [
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
  '일요일',
];
export const getReadableTime = (timeString: string) => {
  const date = new Date(timeString);
  const paddedTime = (date: number) => date.toString().padStart(2, '0');
  return `${paddedTime(date.getHours())}:${paddedTime(date.getMinutes())}`;
};
export const getReadableDate = (
  timeString: string,
  nowDate: Date = new Date(),
) => {
  const compareDate = new Date(timeString);
  const isToday = isSameFullDate(
    nowDate.toDateString(),
    compareDate.toDateString(),
  );

  if (isToday) {
    return getReadableTime(nowDate.toString());
  } else {
    return weekday_ko[compareDate.getDay()];
  }
};

export const isSameFullDate = (a: string, b: string) => {
  const dateA = new Date(a);
  const dateB = new Date(b);
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
};
export const isSameFullDateAndMinute = (a: string, b: string) => {
  const dateA = new Date(a);
  const dateB = new Date(b);
  return isSameFullDate(a, b) && dateA.getMinutes() === dateB.getMinutes();
};

export const getIsNewDate = (prev: string, present: string) => {
  const prevDate = new Date(prev).toDateString();
  const presentDate = new Date(present).toDateString();
  return new Date(prevDate) < new Date(presentDate);
};

export const getReadableFullDate = (timeString: string) => {
  const newDate = new Date(timeString);
  return `${newDate.getFullYear()}년 ${
    newDate.getMonth() + 1
  }월 ${newDate.getDate()}일 `;
};
