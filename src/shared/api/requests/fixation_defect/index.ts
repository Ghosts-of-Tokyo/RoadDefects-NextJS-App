import type { CreateFixationDefectDTO, CreateFixationResponseDTO } from '@generated/api';

import { instance } from '@/shared/api/instance';

export type PostFixationDefectRequestConfig = RequestConfig<CreateFixationDefectDTO>;

export const postFixationDefect = async ({ params, config }: PostFixationDefectRequestConfig) =>
  instance.post<CreateFixationResponseDTO>('fixation_defect', params, config);
