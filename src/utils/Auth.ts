import { apiClient } from "api/apiClient";

export const getToken = () =>
  window.localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_STORAGE_KEY!!);

export const removeToken = () =>
  window.localStorage.removeItem(
    process.env.REACT_APP_AUTH_TOKEN_STORAGE_KEY!!
  );

export const setAuthInfo = (token: string) => {
  window.localStorage.setItem(
    process.env.REACT_APP_AUTH_TOKEN_STORAGE_KEY!!,
    token
  );
  apiClient.defaults.headers.common.Authorization = `${token}`;
};

export const removeAuthInfo = () => {
  getToken() && removeToken();
};
