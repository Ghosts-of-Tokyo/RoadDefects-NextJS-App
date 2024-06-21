import axios from 'axios';

import { errorInterceptor } from './interceptors/errorInterceptor';
import { tokenInterceptor } from './interceptors/tokenInterceptor';

export const instance = axios.create({
  baseURL: 'http://89.111.172.231/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(tokenInterceptor);
instance.interceptors.response.use(undefined, errorInterceptor);
