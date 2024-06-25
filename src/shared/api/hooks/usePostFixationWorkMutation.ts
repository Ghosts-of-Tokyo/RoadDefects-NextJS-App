import { useMutation } from '@tanstack/react-query';

import type { PostFixationWorkRequestConfig } from '../requests';
import { postFixationWork } from '../requests';

export const usePostFixationWorkMutation = (
  settings?: MutationSettings<PostFixationWorkRequestConfig, typeof postFixationWork>
) =>
  useMutation({
    mutationKey: ['postFixationWork'],
    mutationFn: ({ params, config }) =>
      postFixationWork({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
