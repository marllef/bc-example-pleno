import axios from 'axios';
import { configs } from '../config';

// Aqui irão as configurações do Axios

export const api = axios.create({
  baseURL: 'http://localhost:3333/api',
});

api.interceptors.request.use(
  async (config) => {
    if (configs.AuthToken && config.headers) {
      config.headers['auth-token'] = `${configs.AuthToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
