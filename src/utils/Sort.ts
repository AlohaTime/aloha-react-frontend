import { ItemProps } from "components/Event";

export const sortItems = (items: ItemProps[]) => {
  return items.sort((a, b) => {
    if (a.completed === b.completed) {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    } else {
      return a.completed ? 1 : -1;
    }
  });
};
