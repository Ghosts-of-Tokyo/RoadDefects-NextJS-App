import type { PhotoUploadResponseDTO } from '@generated/api';

import { instance } from '@/shared/api/instance';

export type PostFixationPhotoParams = { id: string; data: FormData };

export type PostFixationPhotoConfig = RequestConfig<PostFixationPhotoParams>;

export const postFixationPhoto = async ({
  params: { id, data },
  config
}: PostFixationPhotoConfig) =>
  instance.post<PhotoUploadResponseDTO>(`fixation/${id}/photo`, data, config);
