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

export const compareDateTime = (date1: Date, date2: Date) => {
  const time1 = date1.getTime();
  const time2 = date2.getTime();
  if (time1 === time2) return 0;
  else if (time1 > time2) return 1;
  else return -1;
};

export const dateToString = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day} 00:00`;
};
