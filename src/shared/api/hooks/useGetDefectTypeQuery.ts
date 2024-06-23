import { useQuery } from '@tanstack/react-query';

import { getDefectType } from '../requests';

export const useGetDefectTypeQuery = (settings?: QuerySettings<typeof getDefectType>) =>
  useQuery({
    queryKey: ['getDefectType'],
    queryFn: () => getDefectType({ config: settings?.config }),
    ...settings?.options
  });
