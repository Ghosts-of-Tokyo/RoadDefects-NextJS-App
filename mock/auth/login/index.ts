import type { RestRequestConfig } from 'mock-config-server';

export const postLoginRequest: RestRequestConfig = {
  path: '/auth/login',
  method: 'post',
  routes: [
    {
      data: {
        title: 'Неверная почта или пароль',
        status: 0,
        errors: {
          additionalProp1: ['string'],
          additionalProp2: ['string'],
          additionalProp3: ['string']
        }
      },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(401);
          return data;
        }
      }
    },
    {
      data: { access: 'kfspeofkpsoefjoseifj' },
      entities: {
        body: {
          email: 'admin1@gmail.com',
          password: 'stringA1'
        }
      }
    }
  ]
};
