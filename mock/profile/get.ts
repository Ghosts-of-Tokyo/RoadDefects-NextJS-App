import type { RestRequestConfig } from 'mock-config-server';

export const getProfileRequest: RestRequestConfig = {
  path: '/profile',
  method: 'get',
  routes: [
    {
      data: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        fullName: 'string',
        email: 'string',
        highestRole: 'Admin'
      }
    }
  ]
};
