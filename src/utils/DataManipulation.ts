import { ItemProps } from "interfaces/Item";
import { compareDateTime } from "./Date";
import { GetItemResponse } from "interfaces/API";

export const responseToItem = (
  res: GetItemResponse,
  type: string
): ItemProps[] => {
  if (!res?.data?.data) return [];
  const item = res.data.data.map((item) => {
    return {
      title: item.subjectName,
      subTitle: item.itemName,
      type: type,
      completed: item.isDone,
      startDate: item.startDate,
      endDate: item.endDate,
      link: item.itemLink,
    };
  });
  return item;
};

export const sortItems = (items: ItemProps[]) => {
  return items.sort((a, b) => {
    if (a.completed === b.completed) {
      const dateA = new Date(a.endDate);
      const dateB = new Date(b.endDate);
      return compareDateTime(dateA, dateB);
    } else {
      return a.completed ? 1 : -1;
    }
  });
};

export const filterItems = (
  items: ItemProps[],
  selectedDate: Date,
  type: string,
  subject: string
) => {
  return items.filter((item) => {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);
    const isPresent =
      compareDateTime(startDate, selectedDate) <= 0 &&
      compareDateTime(endDate, selectedDate) >= 0;
    const typeMatch = item.type === type || type === "all";
    const subjectMatch = item.title === subject || subject === "all";
    return isPresent && typeMatch && subjectMatch;
  });
};

export const getSubjectList = (items: ItemProps[]) => {
  const subjectList = items.map((item) => item.title);
  const uniqueSubjectList = Array.from(new Set(subjectList));
  return uniqueSubjectList;
};
