import {
  getIsNewDate,
  getReadableDate,
  getReadableFullDate,
  getReadableTime,
  isSameFullDate,
  isSameFullDateAndMinute,
  weekday_ko,
} from './getTime';

// 아래 모든 테스트코드 ISO date string은 UTC+0 기준입니다. (ko-KR UTC+9)

describe('getReadableTime', () => {
  it('should return a readable time string from an ISO date string', () => {
    const isoDate = '2023-04-17T08:30:00.000Z';
    const expectedReadableTime = '17:30';
    const actualReadableTime = getReadableTime(isoDate);

    expect(actualReadableTime).toEqual(expectedReadableTime);
  });

  it('should return a readable time string with zero-padded hours and minutes', () => {
    const isoDate = '2023-04-17T04:05:00.000Z';
    const expectedReadableTime = '13:05';
    const actualReadableTime = getReadableTime(isoDate);

    expect(actualReadableTime).toEqual(expectedReadableTime);
  });

  it('should handle edge cases like midnight and noon', () => {
    const isoDateMidnight = '2023-04-17T00:00:00.000Z';
    const expectedReadableTimeMidnight = '09:00';
    const actualReadableTimeMidnight = getReadableTime(isoDateMidnight);
    expect(actualReadableTimeMidnight).toEqual(expectedReadableTimeMidnight);

    const isoDateNoon = '2023-04-17T12:00:00.000Z';
    const expectedReadableTimeNoon = '21:00';
    const actualReadableTimeNoon = getReadableTime(isoDateNoon);
    expect(actualReadableTimeNoon).toEqual(expectedReadableTimeNoon);
  });
});

describe('getReadableDate', () => {
  const fixedNowDate = new Date('2023-04-17T01:30:00.000Z');

  it('should return readable time string for today', () => {
    const timeString = '2023-04-17T01:30:00.000Z';
    const result = getReadableDate(timeString, fixedNowDate);
    expect(result).toEqual('10:30');
  });

  it('should return weekday string for not today', () => {
    const timeString = '2023-04-18T10:30:00.000Z';
    const compareDate = new Date(timeString);
    const isToday = isSameFullDate(
      fixedNowDate.toDateString(),
      compareDate.toDateString(),
    );
    const result = getReadableDate(timeString, fixedNowDate);
    expect(isToday).toBe(false);
    expect(result).toEqual(weekday_ko[compareDate.getDay()]);
  });
});

describe('isSameFullDate', () => {
  it('should return true if both dates are the same', () => {
    const date1 = '2023-04-17T10:30:00.000Z';
    const date2 = '2023-04-17T10:45:00.000Z';
    const result = isSameFullDate(date1, date2);
    expect(result).toBe(true);
  });

  it('should return false if the dates are different', () => {
    const date1 = '2023-04-17T10:30:00.000Z';
    const date2 = '2023-04-18T10:30:00.000Z';
    const result = isSameFullDate(date1, date2);
    expect(result).toBe(false);
  });

  it('should return false if the months are different', () => {
    const date1 = '2023-04-17T10:30:00.000Z';
    const date2 = '2023-05-17T10:30:00.000Z';
    const result = isSameFullDate(date1, date2);
    expect(result).toBe(false);
  });

  it('should return false if the years are different', () => {
    const date1 = '2023-04-17T10:30:00.000Z';
    const date2 = '2022-04-17T10:30:00.000Z';
    const result = isSameFullDate(date1, date2);
    expect(result).toBe(false);
  });
});

describe('isSameFullDateAndMinute', () => {
  it('should return true if both dates have the same minute and are on the same day', () => {
    const date1 = '2023-04-17T10:30:00.000Z';
    const date2 = '2023-04-17T10:30:00.000Z';
    const sameDay = isSameFullDate(date1, date2);
    const result = isSameFullDateAndMinute(date1, date2);
    expect(sameDay).toBe(true);
    expect(result).toBe(true);
  });

  it('should return false if the dates have different minutes but are on the same day', () => {
    const date1 = '2023-04-17T10:30:00.000Z';
    const date2 = '2023-04-17T10:31:00.000Z';
    const sameDay = isSameFullDate(date1, date2);
    const result = isSameFullDateAndMinute(date1, date2);
    expect(sameDay).toBe(true);
    expect(result).toBe(false);
  });

  it('should return false if the dates have the same minute but are on different days', () => {
    const date1 = '2023-04-17T10:30:00.000Z';
    const date2 = '2023-04-18T10:30:00.000Z';
    const sameDay = isSameFullDate(date1, date2);
    const result = isSameFullDateAndMinute(date1, date2);
    expect(sameDay).toBe(false);
    expect(result).toBe(false);
  });

  it('should return false if both dates have different minutes and are on different days', () => {
    const date1 = '2023-04-17T10:30:00.000Z';
    const date2 = '2023-04-18T10:31:00.000Z';
    const sameDay = isSameFullDate(date1, date2);
    const result = isSameFullDateAndMinute(date1, date2);
    expect(sameDay).toBe(false);
    expect(result).toBe(false);
  });
});

describe('getIsNewDate', () => {
  it('should return true if the present date is newer than the previous date', () => {
    const prevDate = '2023-04-17T10:30:00.000Z';
    const presentDate = '2023-04-18T10:30:00.000Z';
    const result = getIsNewDate(prevDate, presentDate);
    expect(result).toBe(true);
  });

  it('should return false if the present date is the same as the previous date', () => {
    const prevDate = '2023-04-17T10:30:00.000Z';
    const presentDate = '2023-04-17T13:30:00.000Z';
    const result = getIsNewDate(prevDate, presentDate);
    expect(result).toBe(false);
  });

  it('should return false if the present date is older than the previous date', () => {
    const prevDate = '2023-04-18T10:30:00.000Z';
    const presentDate = '2023-04-17T10:30:00.000Z';
    const result = getIsNewDate(prevDate, presentDate);
    expect(result).toBe(false);
  });
});

describe('getReadableFullDate', () => {
  it('should return a readable full date string', () => {
    const timeString = '2023-04-17T10:30:00.000Z';
    const result = getReadableFullDate(timeString);
    expect(result).toBe('2023년 4월 17일 ');
  });

  it('should return a readable full date string with correct month and date', () => {
    const timeString = '2023-12-31T14:59:00.000Z';
    const result = getReadableFullDate(timeString);
    expect(result).toBe('2023년 12월 31일 ');
  });

  it('should return a readable full date string with correct year', () => {
    const timeString = '1999-01-01T00:00:00.000Z';
    const result = getReadableFullDate(timeString);
    expect(result).toBe('1999년 1월 1일 ');
  });
});
