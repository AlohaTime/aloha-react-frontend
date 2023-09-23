import axios from "axios";

const apiClient = axios.create();

apiClient.defaults.baseURL = process.env.REACT_APP_API_URL;
apiClient.defaults.headers.common["Content-Type"] = "application/json";
apiClient.defaults.headers.common.token = `${window.localStorage.getItem(
  process.env.REACT_APP_AUTH_TOKEN_STORAGE_KEY!!
)}`;

export default apiClient;
