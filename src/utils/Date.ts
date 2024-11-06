export const toMonthYear = (date: Date) => {
  return `${date.getMonth() + 1}월, ${date.getFullYear()}`;
};

export const getCalendarDate = (date: Date) => {
  const newDate = new Date(date);
  newDate.setDate(1);
  newDate.setDate(newDate.getDate() - (newDate.getDay() || 7));
  const dateArray = [new Date(newDate)];
  for (let i = 0; i < 41; i++) {
    newDate.setDate(newDate.getDate() + 1);
    dateArray.push(new Date(newDate));
  }
  return dateArray;
};

export const compareNumber = (num1: number, num2: number) => {
  if (num1 === num2) return 0;
  else if (num1 > num2) return 1;
  else return -1;
};

export const compareDateTime = (date1: Date, date2: Date) => {
  const time1 = date1.getTime();
  const time2 = date2.getTime();
  return compareNumber(time1, time2);
};

export const compareDate = (date1: Date, date2: Date) => {
  const date1Year = date1.getFullYear();
  const date1Month = date1.getMonth();
  const date1Date = date1.getDate();
  const date2Year = date2.getFullYear();
  const date2Month = date2.getMonth();
  const date2Date = date2.getDate();

  const compareYear = compareNumber(date1Year, date2Year);
  const compareMonth = compareNumber(date1Month, date2Month);
  const compareDate = compareNumber(date1Date, date2Date);

  if (compareYear) return compareYear;
  if (compareMonth) return compareMonth;
  if (compareDate) return compareDate;
  return 0;
};

export const dateToString = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day} 00:00`;
};
