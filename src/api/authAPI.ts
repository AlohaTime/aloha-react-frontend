import {
  API_GET_ASSIGNMENTS,
  API_GET_ATTENDANCES,
  API_GET_QUIZZES,
  API_POST_LOGIN,
} from "constants/Api";
import { apiClient } from "./apiClient";
import { getToken } from "utils/Auth";

export const postLogin = ({
  id,
  password,
}: {
  id: string;
  password: string;
}) => {
  return apiClient.post(API_POST_LOGIN, { id, password });
};

export const getAttendances = () => {
  return apiClient.get(`${API_GET_ATTENDANCES}?token=${getToken()}`);
};

export const getAssignments = () => {
  return apiClient.get(`${API_GET_ASSIGNMENTS}?token=${getToken()}`);
};

export const getQuizzes = () => {
  return apiClient.get(`${API_GET_QUIZZES}?token=${getToken()}`);
};
