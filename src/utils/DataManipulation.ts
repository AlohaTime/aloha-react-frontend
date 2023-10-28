import { ItemProps } from "components/Event";
import { compareDate } from "./Date";

export const sortItems = (items: ItemProps[]) => {
  return items.sort((a, b) => {
    if (a.completed === b.completed) {
      const dateA = new Date(a.endDate);
      const dateB = new Date(b.endDate);
      return compareDate(dateA, dateB);
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
      compareDate(startDate, selectedDate) <= 0 &&
      compareDate(endDate, selectedDate) >= 0;
    const typeMatch = item.type === type || type === "all";
    const subjectMatch = item.title === subject || subject === "all";
    return isPresent && typeMatch && subjectMatch;
  });
};
