import axios from 'axios';
import { getCookie } from './utils/auth';
const api = axios.create({
  baseURL: 'http://localhost:8000/api/'
});
const token = getCookie('token');

api.interceptors.request.use(
  config => {
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => Promise.reject(error)
);

export default api;