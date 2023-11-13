import { ItemFilterProps } from "interfaces/Item";
import { atom } from "recoil";

export const selectedFiltersAtom = atom<ItemFilterProps>({
  key: "selectedFiltersAtom",
  default: {
    type: "all",
    subject: "all",
  },
});

export const selectedDateAtom = atom<Date>({
  key: "selectedDateAtom",
  default: new Date(),
});

export const viewDateAtom = atom<Date>({
  key: "viewDateAtom",
  default: new Date(),
});
