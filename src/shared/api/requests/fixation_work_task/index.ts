import type { FixationWorkTaskDTO } from '@generated/api';

import { instance } from '../../instance';

export type GetFixationWorkTaskParams = {
  id: string;
};

export type GetFixationWorkTaskRequestConfig = RequestConfig<GetFixationWorkTaskParams>;

export const getFixationWorkTask = async ({
  config,
  params: { id, ...params }
}: GetFixationWorkTaskRequestConfig) =>
  instance.get<FixationWorkTaskDTO>(`/fixation_work_task/${id}`, {
    ...config,
    params: { ...config?.params, ...params }
  });
