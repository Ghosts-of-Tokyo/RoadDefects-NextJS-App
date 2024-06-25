import { useMutation } from '@tanstack/react-query';

import type { PutFixationWorkRequestConfig } from '../requests';
import { putFixationWork } from '../requests';

export const usePutFixationWorkMutation = (
  settings?: MutationSettings<PutFixationWorkRequestConfig, typeof putFixationWork>
) =>
  useMutation({
    mutationKey: ['putFixationWork'],
    mutationFn: ({ params, config }) =>
      putFixationWork({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
