import { API_POST_LOGIN } from "constants/Api";
import apiClient from "./apiClient";

export const postLogin = ({
  id,
  password,
}: {
  id: string;
  password: string;
}) => {
  return apiClient.post(API_POST_LOGIN, { id, password });
};
