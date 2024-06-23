import { useMutation } from '@tanstack/react-query';

import type { PostFixationDefectRequestConfig } from '../requests';
import { postFixationDefect } from '../requests';

export const usePostFixationDefectMutation = (
  settings?: MutationSettings<PostFixationDefectRequestConfig, typeof postFixationDefect>
) =>
  useMutation({
    mutationKey: ['postFixationDefect'],
    mutationFn: ({ params, config }) =>
      postFixationDefect({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
