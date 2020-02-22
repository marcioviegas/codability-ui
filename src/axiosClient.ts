import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 15 * 60 * 1000
});

const axiosClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 10000,
  adapter: cache.adapter
});

axiosClient.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
});

export default axiosClient;
