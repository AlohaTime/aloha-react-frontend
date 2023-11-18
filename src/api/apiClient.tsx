import axios from "axios";
import { ROUTES_PATH_LOGIN } from "constants/Routes";
import { useNavigate } from "react-router-dom";
import { removeAuthInfo } from "utils/Auth";
import { customErrorToast } from "utils/Toast";

export const apiClient = axios.create();

export function ApiClientSetting() {
  const navigate = useNavigate();

  apiClient.defaults.baseURL = process.env.REACT_APP_API_URL;
  apiClient.defaults.headers.common["Content-Type"] = "application/json";
  apiClient.defaults.headers.common.token = `${window.localStorage.getItem(
    process.env.REACT_APP_AUTH_TOKEN_STORAGE_KEY!!
  )}`;

  apiClient.interceptors.response.use(
    (response) => {
      if (response.data.code !== 200) {
        removeAuthInfo();
        navigate(ROUTES_PATH_LOGIN);
        customErrorToast(response.data.message);
        return Promise.reject(new Error(response.data.message));
      }
      return response;
    },
    (error) => {
      customErrorToast(error.message);
      return Promise.reject(error);
    }
  );

  return <></>;
}
