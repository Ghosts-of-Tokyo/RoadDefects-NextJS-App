import type { ChangeTaskStatusEnum } from '@generated/api';

import { instance } from '@/shared/api/instance';

export interface PostTaskParams {
  id: string;
  ChangeTaskStatus: ChangeTaskStatusEnum;
}

export type PostTaskRequestConfig = RequestConfig<PostTaskParams>;

export const postTask = async ({
  params: { id, ChangeTaskStatus, ...params },
  config
}: PostTaskRequestConfig) =>
  instance.post(`task/${id}/?ChangeTaskStatus=${ChangeTaskStatus}`, {
    ...config,
    params: { ...config?.params, ...params }
  });
