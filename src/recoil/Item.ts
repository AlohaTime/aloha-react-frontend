import { ItemProps } from "interfaces/Item";
import { atom } from "recoil";

export const attendancesAtom = atom<ItemProps[]>({
  key: "attendancesAtom",
  default: [],
});

export const assignmentsAtom = atom<ItemProps[]>({
  key: "assignmentsAtom",
  default: [],
});

export const quizzesAtom = atom<ItemProps[]>({
  key: "quizzesAtom",
  default: [],
});

export const itemLoadingAtom = atom<boolean>({
  key: "itemLoadingAtom",
  default: false,
});
