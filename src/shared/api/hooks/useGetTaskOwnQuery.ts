import { useQuery } from '@tanstack/react-query';

import type { GetTaskOwnParams } from '../requests';
import { getTaskOwn } from '../requests';

export const useGetTaskOwnQuery = (
  params: GetTaskOwnParams,
  settings?: QuerySettings<typeof getTaskOwn>
) =>
  useQuery({
    queryKey: ['getTaskOwn', params.TaskStatus],
    queryFn: () => getTaskOwn({ params, config: settings?.config }),
    ...settings?.options
  });
