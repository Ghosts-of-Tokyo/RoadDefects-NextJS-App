import { useSearchParams } from '@/utils/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { startTransition, useState } from 'react';

export const useInspectorTasks = () => {
  const { setSearchParam, searchParams } = useSearchParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [taskStatus, setTaskStatus] = useState(searchParams.get('TaskStatus') ?? '');

  const onTaskStatusClick = (taskStatus: string) => {
    queryClient.invalidateQueries({ queryKey: ['getTaskOwn', taskStatus] });
    startTransition(() => {
      setSearchParam('TaskStatus', taskStatus);
    });
  };

  return { state: { taskStatus }, functions: { onTaskStatusClick } };
};
