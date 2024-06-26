import { startTransition } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { useGetContractorsQuery } from '@/shared/api/hooks';
import { useSearchParams } from '@/utils/hooks';

export const useContractorsList = () => {
  const { searchParams, setSearchParams } = useSearchParams();
  const queryClient = useQueryClient();

  const organizationName = searchParams.get('OrganizationName') ?? '';
  const contractorFullName = searchParams.get('ContractorFullName') ?? '';

  const { data } = useGetContractorsQuery({
    ContractorFullName: contractorFullName,
    OrganizationName: organizationName
  });

  const onContractorFullNameFilterChange = (contractorFullName: string) => {
    queryClient.invalidateQueries({
      queryKey: ['getContractors', organizationName, contractorFullName]
    });
    startTransition(() => {
      setSearchParams([
        { key: 'OrganizationName', value: organizationName },
        { key: 'ContractorFullName', value: contractorFullName }
      ]);
    });
  };

  return {
    state: {
      data
    },
    functions: {
      onContractorFullNameFilterChange
    }
  };
};
