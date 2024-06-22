import { useMutation } from '@tanstack/react-query';

import type { PostTaskRequestConfig } from '../requests';
import { postTask } from '../requests';

export const usePostTaskMutation = (
  settings?: MutationSettings<PostTaskRequestConfig, typeof postTask>
) =>
  useMutation({
    mutationKey: ['postTask'],
    mutationFn: ({ params, config }) =>
      postTask({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
