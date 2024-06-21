import type { InternalAxiosRequestConfig } from 'axios';

export const tokenInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  const token = localStorage.getItem('token');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
