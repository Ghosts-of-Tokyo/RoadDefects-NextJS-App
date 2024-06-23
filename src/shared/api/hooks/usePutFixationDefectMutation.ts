import { useMutation } from '@tanstack/react-query';

import type { PutFixationDefectRequestConfig } from '../requests';
import { putFixationDefect } from '../requests';

export const usePutFixationDefectMutation = (
  settings?: MutationSettings<PutFixationDefectRequestConfig, typeof putFixationDefect>
) =>
  useMutation({
    mutationKey: ['putFixationDefect'],
    mutationFn: ({ params, config }) =>
      putFixationDefect({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
