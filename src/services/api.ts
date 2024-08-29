import axios from "axios";
import { BASE_URL } from "./Urls";

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? token : "";
  return config;
});

export default axios;
