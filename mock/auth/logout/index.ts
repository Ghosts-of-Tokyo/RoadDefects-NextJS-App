import type { RestRequestConfig } from 'mock-config-server';

export const postLogoutRequest: RestRequestConfig = {
  path: '/auth/logout',
  method: 'post',
  routes: [
    {
      data: {}
    }
  ]
};
