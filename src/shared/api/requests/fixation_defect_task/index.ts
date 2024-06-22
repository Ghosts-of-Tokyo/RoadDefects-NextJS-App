import type { FixationDefectTaskDTO } from '@generated/api';

import { instance } from '../../instance';

export type GetFixationDefectTaskParams = {
  id: string;
};

export type GetFixationDefectTaskRequestConfig = RequestConfig<GetFixationDefectTaskParams>;

export const getFixationDefectTask = async ({
  config,
  params
}: GetFixationDefectTaskRequestConfig) =>
  instance.get<FixationDefectTaskDTO>(`/fixation_defect_task/${params.id}`, {
    ...config,
    params: { ...config?.params, ...params }
  });
