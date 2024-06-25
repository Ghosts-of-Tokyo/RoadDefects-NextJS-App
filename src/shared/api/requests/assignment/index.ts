import type { CreateAssignmentDTO } from '@generated/api';

import { instance } from '../../instance';

export type PostAssigmentParams = CreateAssignmentDTO;

export type PostAssigmentRequestConfig = RequestConfig<PostAssigmentParams>;

export const postAssignment = async ({ params, config }: PostAssigmentRequestConfig) =>
  instance.post('assignment', params, config);
