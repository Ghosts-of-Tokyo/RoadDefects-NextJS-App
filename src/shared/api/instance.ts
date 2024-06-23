import axios from 'axios';

import { baseurl } from '@/utils/constants/baseUrl';

import { errorInterceptor } from './interceptors/errorInterceptor';
import { tokenInterceptor } from './interceptors/tokenInterceptor';

export const instance = axios.create({
  baseURL: `${baseurl}/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(tokenInterceptor);
instance.interceptors.response.use(undefined, errorInterceptor);
