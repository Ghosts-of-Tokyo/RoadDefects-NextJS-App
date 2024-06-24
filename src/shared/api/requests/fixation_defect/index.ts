import type {
  CreateFixationDefectDTO,
  CreateFixationResponseDTO,
  EditFixationDefectDTO
} from '@generated/api';

import { instance } from '@/shared/api/instance';

export type PostFixationDefectRequestConfig = RequestConfig<CreateFixationDefectDTO>;

export const postFixationDefect = async ({ params, config }: PostFixationDefectRequestConfig) =>
  instance.post<CreateFixationResponseDTO>('fixation_defect', params, config);

type PutFixationDefectParams = EditFixationDefectDTO & { id: string };

export type PutFixationDefectRequestConfig = RequestConfig<PutFixationDefectParams>;

export const putFixationDefect = async ({
  config,
  params: { id, ...params }
}: PutFixationDefectRequestConfig) =>
  instance.put<CreateFixationResponseDTO>(`fixation_defect/${id}`, params, config);
