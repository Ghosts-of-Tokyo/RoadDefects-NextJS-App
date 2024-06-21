import type { LoginDTO, TokenResponseDTO } from '@generated/api';

import { instance } from '@/shared/api/instance';

export type PostLoginRequestConfig = RequestConfig<LoginDTO>;

export const postLogin = async ({ params, config }: PostLoginRequestConfig) =>
  instance.post<TokenResponseDTO>('/auth/login', params, config);
