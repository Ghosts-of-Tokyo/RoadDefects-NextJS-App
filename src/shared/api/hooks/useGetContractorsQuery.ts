import { useQuery } from '@tanstack/react-query';

import type { GetContractorsParams } from '../requests';
import { getContractors } from '../requests';

export const useGetContractorsQuery = (
  params: GetContractorsParams,
  settings?: QuerySettings<typeof getContractors>
) =>
  useQuery({
    queryKey: ['getContractors', params.OrganizationName, params.ContractorFullName],
    queryFn: () => getContractors({ params, config: settings?.config }),
    ...settings?.options
  });
