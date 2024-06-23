import {
  useGetFixationDefectTaskQuery,
  usePostFixationDefectMutation,
  usePostTaskMutation
} from '@/shared/api/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export const useDefectFixationPage = () => {
  const params = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const { data } = useGetFixationDefectTaskQuery({ id: params.id });
  const postTaskMutation = usePostTaskMutation();
  const postFixationDefectMutation = usePostFixationDefectMutation();

  const onStartTaskClick = async () => {
    await postTaskMutation.mutateAsync({
      params: { id: params.id, ChangeTaskStatus: 'StartTask' }
    });

    if (postTaskMutation.isSuccess) {
      queryClient.invalidateQueries({ queryKey: ['getFixationDefectTask', params.id] });
    }
  };

  return {
    state: {
      isLoading: {
        startTask: postTaskMutation.isPending,
        fixationDefectCreate: postFixationDefectMutation.isPending
      },
      data
    },
    functions: { onStartTaskClick }
  };
};
