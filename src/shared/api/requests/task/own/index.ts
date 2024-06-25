import type { TaskPagedDTO } from '@generated/api';

import { instance } from '../../../instance';

export type GetTaskOwnParams = {
  TaskStatus?: string;
  Address?: string;
  current?: number;
  size?: number;
};

export type GetTaskOwnRequestConfig = RequestConfig<GetTaskOwnParams>;

export const getTaskOwn = async ({ config, params }: GetTaskOwnRequestConfig) =>
  instance.get<TaskPagedDTO>('/task/own', { ...config, params: { ...config?.params, ...params } });
