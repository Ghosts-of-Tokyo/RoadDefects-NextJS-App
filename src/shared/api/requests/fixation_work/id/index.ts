import type {
  CreateFixationResponseDTO,
  CreateFixationWorkDTO,
  EditFixationWorkDTO
} from '@generated/api';

import { instance } from '@/shared/api/instance';

export type PostFixationWorkRequestConfig = RequestConfig<CreateFixationWorkDTO>;

export const postFixationWork = async ({ params, config }: PostFixationWorkRequestConfig) =>
  instance.post<CreateFixationResponseDTO>('fixation_work', params, config);

type PutFixationWorkParams = EditFixationWorkDTO & { id: string };

export type PutFixationWorkRequestConfig = RequestConfig<PutFixationWorkParams>;

export const putFixationWork = async ({
  config,
  params: { id, ...params }
}: PutFixationWorkRequestConfig) => instance.put(`fixation_work/${id}`, params, config);
