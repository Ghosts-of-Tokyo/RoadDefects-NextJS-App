import { useMutation } from '@tanstack/react-query';

import type { DeleteFixationPhotoConfigRequestConfig } from '../requests';
import { deleteFixationPhoto } from '../requests';

export const useDeleteFixationPhotoMutation = (
  settings?: MutationSettings<DeleteFixationPhotoConfigRequestConfig, typeof deleteFixationPhoto>
) =>
  useMutation({
    mutationKey: ['deleteFixationPhoto'],
    mutationFn: ({ params, config }) =>
      deleteFixationPhoto({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
