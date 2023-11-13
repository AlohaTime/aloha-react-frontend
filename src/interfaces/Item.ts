export interface ItemFilterProps {
  type: ItemTypes;
  subject: string;
  date?: Date;
}

export interface ItemProps {
  type: string;
  title: string;
  subTitle: string;
  completed: boolean;
  startDate: string;
  endDate: string;
  link: string;
}

export type ItemTypes = "출석" | "과제" | "퀴즈" | "all";
