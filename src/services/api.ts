import axios from 'axios';
import { BASE_URL } from './Urls';


axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((config) => {
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIrOTk4NTA4ODkwMDM3In0.PDAUgTvdTY39g0j2BMGxe5rMhjEOcIGKfRQIHzT78XJI-mZ9Dzhd7_1j2EBwM1U5eEg6--X6q9JH3BDooiYnoA';
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axios;