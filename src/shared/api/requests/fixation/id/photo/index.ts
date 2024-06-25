import type { PhotoUploadResponseDTO } from '@generated/api';

import { instance } from '@/shared/api/instance';

export type PostFixationPhotoParams = { id: string; data: FormData };

export type PostFixationPhotoConfig = RequestConfig<PostFixationPhotoParams>;

export const postFixationPhoto = async ({
  params: { id, data },
  config
}: PostFixationPhotoConfig) =>
  instance.post<PhotoUploadResponseDTO>(`fixation/${id}/photo`, data, {
    ...config,
    headers: { 'Content-Type': 'multipart/form-data' }
  });

export type GetFixationPhotoConfigParams = {
  id: string;
  photoId: string;
};

export type GetFixationPhotoConfigRequestConfig = RequestConfig<GetFixationPhotoConfigParams>;

export const getFixationPhoto = async ({ config, params }: GetFixationPhotoConfigRequestConfig) =>
  instance.get<any>(`/fixation/${params.id}/photo/${params.photoId}`, config);
