import type { DefectTypeDTO } from '@generated/api';

import { instance } from '../../instance';

export type GetDefectTypeRequestConfig = RequestConfig;

export const getDefectType = async ({ config }: GetDefectTypeRequestConfig) =>
  instance.get<DefectTypeDTO[]>('/defect_type', config);
