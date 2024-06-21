import type { ErrorResponse } from '@generated/api';
import type { AxiosError } from 'axios';
import { toast } from 'sonner';

export const errorInterceptor = (error: AxiosError<ErrorResponse>) => {
  if (error.response?.status === 500) {
    toast.error(`Ошибка сервера:${error.response.data.title}`);
  }
  if (error.response?.status === 401) {
    localStorage.removeItem('token');
    if (!window.location.href.includes('login')) window.location.href = '/login';
  }
  toast.error(`Произошла ошибка:${error.response?.data.title}`);
  return Promise.reject(error);
};
