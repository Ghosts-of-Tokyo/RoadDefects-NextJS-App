import { useMutation } from '@tanstack/react-query';

import type { PutProfileRequestConfig } from '../requests/profile';
import { putProfile } from '../requests/profile';

export const usePutProfileMutation = (
  settings?: MutationSettings<PutProfileRequestConfig, typeof putProfile>
) =>
  useMutation({
    mutationKey: ['putProfile'],
    mutationFn: ({ params, config }) =>
      putProfile({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
