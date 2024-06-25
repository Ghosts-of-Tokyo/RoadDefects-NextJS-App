import { useQuery } from '@tanstack/react-query';

import type { GetFixationWorkTaskParams } from '../requests';
import { getFixationWorkTask } from '../requests';

export const useGetFixationWorkTaskQuery = (
  params: GetFixationWorkTaskParams,
  settings?: QuerySettings<typeof getFixationWorkTask>
) =>
  useQuery({
    queryKey: ['getFixationWorkTask', params.id],
    queryFn: () => getFixationWorkTask({ params, config: settings?.config }),
    ...settings?.options
  });
