import axios from 'axios';
import { BASE_URL } from './Urls';


axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((config) => {
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIrOTk4OTA4Njg4NzgxIn0.0Vyy8Rbxup4sZH8ZpCLQtRya3BYi84JX2jnAA-fbcB2zrZG7n_CYZM9C8q0oe-B2y3bRpktZjlQC6QiYg6DfaQ';
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axios;