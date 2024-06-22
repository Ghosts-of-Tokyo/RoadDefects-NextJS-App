import { useGetFixationDefectTaskQuery, usePostTaskMutation } from '@/shared/api/hooks';
import { useParams } from 'next/navigation';

export const useDefectFixationPage = () => {
  const params = useParams<{ id: string }>();

  const { data } = useGetFixationDefectTaskQuery({ id: params.id });
  const postTaskMutation = usePostTaskMutation();

  const onStartTaskClick = async () => {
    await postTaskMutation.mutateAsync({
      params: { id: params.id, ChangeTaskStatus: 'StartTask' }
    });
  };

  return {
    state: { isLoading: postTaskMutation.isPending, data },
    functions: { onStartTaskClick }
  };
};
