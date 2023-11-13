import { ItemTypes } from "interfaces/Item";
import { useRecoilState } from "recoil";
import {
  selectedDateAtom,
  selectedFiltersAtom,
  viewDateAtom,
} from "recoil/Input";

export const useInput = () => {
  const [{ type, subject }, setSelectedFilters] =
    useRecoilState(selectedFiltersAtom);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);
  const [viewDate, setViewDate] = useRecoilState(viewDateAtom);

  const setType = (type: ItemTypes) => setSelectedFilters({ type, subject });
  const setSubject = (subject: string) => setSelectedFilters({ type, subject });

  return {
    type,
    subject,
    selectedDate,
    setType,
    setSubject,
    setSelectedDate,
    viewDate,
    setViewDate,
  };
};
