import type { ContractorPagedDTO } from '@generated/api';

import { instance } from '../../../instance';

export type GetContractorsParams = {
  ContractorFullName?: string;
  OrganizationName?: string;
  current?: number;
  size?: number;
};

export type GetContractorsRequestConfig = RequestConfig<GetContractorsParams>;

export const getContractors = async ({ config, params }: GetContractorsRequestConfig) =>
  instance.get<ContractorPagedDTO>('/contractor/contractors', {
    ...config,
    params: { ...config?.params, ...params }
  });
