import { getAssignments, getAttendances } from "api/authAPI";
import { ItemFilterProps } from "interfaces/Item";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedDateAtom, selectedFiltersAtom } from "recoil/Input";
import { assignmentsAtom, attendancesAtom, itemLoadingAtom } from "recoil/Item";
import {
  filterItems,
  getSubjectList,
  responseToItem,
  sortItems,
} from "utils/DataManipulation";

export const useItem = () => {
  const [itemLoading, setItemLoading] = useRecoilState(itemLoadingAtom);
  const [attendances, setAttendances] = useRecoilState(attendancesAtom);
  const [assignments, setAssignments] = useRecoilState(assignmentsAtom);
  const selectedDate = useRecoilValue(selectedDateAtom);
  const selectedFilters = useRecoilValue(selectedFiltersAtom);

  const addAttendances = async () => {
    const res = await getAttendances();
    setAttendances(responseToItem(res, "출석"));
  };
  const addAssignments = async () => {
    const res = await getAssignments();
    setAssignments(responseToItem(res, "과제"));
  };

  const refreshItems = () => {
    setItemLoading(true);
    Promise.all([addAttendances(), addAssignments()]).then(() =>
      setItemLoading(false)
    );
  };

  const allItems = [...attendances, ...assignments];
  const sortedItems = sortItems(allItems);
  const subjectList = getSubjectList(allItems);
  const getFilterdItems = (options?: ItemFilterProps) =>
    filterItems(
      sortedItems,
      options?.date || selectedDate,
      options?.type || selectedFilters.type,
      options?.subject || selectedFilters.subject
    );

  return {
    itemLoading,
    sortedItems,
    subjectList,
    getFilterdItems,
    refreshItems,
  };
};
