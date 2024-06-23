import type { ChangeTaskStatusEnum } from '@generated/api';

import { instance } from '@/shared/api/instance';

export interface PostTaskParams {
  id: string;
  ChangeTaskStatus: ChangeTaskStatusEnum;
}

export type PostTaskRequestConfig = RequestConfig<PostTaskParams>;

export const postTask = async ({ params, config }: PostTaskRequestConfig) =>
  instance.post(`task/${params.id}`, params, config);
