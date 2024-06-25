import { useMutation } from '@tanstack/react-query';

import type { PostAssigmentRequestConfig } from '../requests';
import { postAssignment } from '../requests';

export const usePostAssignmentMutation = (
  settings?: MutationSettings<PostAssigmentRequestConfig, typeof postAssignment>
) =>
  useMutation({
    mutationKey: ['postAssignment'],
    mutationFn: ({ params, config }) =>
      postAssignment({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
