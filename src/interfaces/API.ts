import { AxiosResponse } from "axios";

interface APIResponse<D> {
  code: number;
  message: string;
  data: D;
}

export interface Attendance {
  subjectName: string;
  lectureName: string;
  attendedDateTo: string;
  attendedDateFrom: string;
  isAttended?: boolean;
  errorMsg?: string;
}

export interface Assignment {
  subjectName: string;
  assignName: string;
  submitDate: string;
  dueDate?: any;
  errorMsg?: any;
}

export type PostLoginResponse = AxiosResponse<APIResponse<string>>;
export type GetAttendancesResponse = AxiosResponse<APIResponse<Attendance[]>>;
export type GetAssignmentsResponse = AxiosResponse<APIResponse<Assignment[]>>;
