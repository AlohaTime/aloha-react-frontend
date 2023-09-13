export const toMonthYear = (date: Date) => {
  return `${date.getMonth() + 1}월, ${date.getFullYear()}`;
};

export const getCalendarDate = (date: Date) => {
  const newDate = new Date(date);
  newDate.setDate(1);
  newDate.setDate(newDate.getDate() - newDate.getDay());
  const dateArray = [new Date(newDate)];
  for (let i = 0; i < 41; i++) {
    newDate.setDate(newDate.getDate() + 1);
    dateArray.push(new Date(newDate));
  }
  return dateArray;
};
