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
