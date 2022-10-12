import axios from 'axios';
import { configs } from '../config';

export const api = axios.create({
  baseURL: configs.API_HOST || 'http://localhost:3333/api',
});

api.interceptors.request.use(
  async (config) => {
    if (configs.AUTH_TOKEN && config.headers) {
      config.headers['auth-token'] = `${configs.AUTH_TOKEN}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
