import { startTransition } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { useGetTaskOwnQuery } from '@/shared/api/hooks';
import { useSearchParams } from '@/utils/hooks';

export const useInspectorTasks = () => {
  const { searchParams, setSearchParams, setSearchParam } = useSearchParams();
  const queryClient = useQueryClient();

  const taskStatus = searchParams.get('TaskStatus') ?? 'None';
  const addressFilter = searchParams.get('Address') ?? '';

  const { data } = useGetTaskOwnQuery({
    TaskStatus: taskStatus,
    Address: addressFilter
  });

  const onTaskStatusClick = (taskStatus: string) => {
    queryClient.invalidateQueries({ queryKey: ['getTaskOwn', taskStatus] });
    startTransition(() => {
      setSearchParam('TaskStatus', taskStatus);
    });
  };

  const onAddressFilterChange = (address: string) => {
    queryClient.invalidateQueries({ queryKey: ['getTaskOwn', taskStatus, address] });
    startTransition(() => {
      setSearchParams([
        { key: 'Address', value: address },
        { key: 'TaskStatus', value: taskStatus }
      ]);
    });
  };

  return {
    state: { data, taskStatus, addressFilter },
    functions: { onTaskStatusClick, onAddressFilterChange }
  };
};
