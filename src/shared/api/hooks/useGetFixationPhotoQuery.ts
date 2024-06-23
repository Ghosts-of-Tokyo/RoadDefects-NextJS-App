import { useQuery } from '@tanstack/react-query';

import type { GetFixationPhotoConfigParams } from '../requests';
import { getFixationPhoto } from '../requests';

export const useGetFixationPhotoQuery = (
  params: GetFixationPhotoConfigParams,
  settings?: QuerySettings<typeof getFixationPhoto>
) =>
  useQuery({
    queryKey: ['getFixationDefectTask', params.id],
    queryFn: () => getFixationPhoto({ params, config: settings?.config }),
    ...settings?.options
  });
