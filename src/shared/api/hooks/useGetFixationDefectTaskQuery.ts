import { useQuery } from '@tanstack/react-query';

import type { GetFixationDefectTaskParams } from '../requests';
import { getFixationDefectTask } from '../requests';

export const useGetFixationDefectTaskQuery = (
  params: GetFixationDefectTaskParams,
  settings?: QuerySettings<typeof getFixationDefectTask>
) =>
  useQuery({
    queryKey: ['getFixationDefectTask', params.id],
    queryFn: () => getFixationDefectTask({ params, config: settings?.config }),
    ...settings?.options
  });
