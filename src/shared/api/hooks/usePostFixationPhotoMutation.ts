import { useMutation } from '@tanstack/react-query';

import type { PostFixationPhotoConfig } from '../requests';
import { postFixationPhoto } from '../requests';

export const usePostFixationPhotoMutation = (
  settings?: MutationSettings<PostFixationPhotoConfig, typeof postFixationPhoto>
) =>
  useMutation({
    mutationKey: ['postFixationPhoto'],
    mutationFn: ({ params, config }) =>
      postFixationPhoto({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
