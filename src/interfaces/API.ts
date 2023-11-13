import { AxiosResponse } from "axios";

interface APIResponse<D> {
  code: number;
  message: string;
  data: D;
}

export interface ItemResponse {
  subjectName: string;
  itemName: string;
  isDone: boolean;
  itemLink: string;
  startDate: string;
  endDate: string;
}

export type PostLoginResponse = AxiosResponse<APIResponse<string>>;
export type GetItemResponse = AxiosResponse<APIResponse<ItemResponse[]>>;
