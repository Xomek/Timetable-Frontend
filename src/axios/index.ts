import axios from "axios";
import { IAuthResponse } from "../interfaces/authResponse.interface";

export const API_URL = process.env.REACT_APP_BASE_URL;

const $api = axios.create({ withCredentials: true, baseURL: API_URL });

$api.interceptors.request.use((config) => {
  (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await $api.get<IAuthResponse>(`/auth/refresh`);
        localStorage.setItem("token", response.data.token);
        return $api.request(originalRequest);
      } catch (error) {
        console.log("Не авторизован");
      }
    }
  }
);

export default $api;
