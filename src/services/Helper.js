import axios from "axios";
import { getToken } from "./../auth/index";

export const BASE_URL = "http://localhost:8283";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    let token = getToken();
    config.headers.common.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
