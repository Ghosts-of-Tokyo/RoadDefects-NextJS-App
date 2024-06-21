import type { EditProfileDTO, UserInfoDTO } from '@generated/api';

import { instance } from '../../instance';

export type GetProfileRequestConfig = RequestConfig;

export const getProfile = async ({ config }: GetProfileRequestConfig) =>
  instance.get<UserInfoDTO>('/profile', config);

export type PutProfileRequestConfig = RequestConfig<EditProfileDTO>;

export const putProfile = async ({ config, params }: PutProfileRequestConfig) =>
  instance.put('/profile', params, config);
