import {
  useGetFixationDefectTaskQuery,
  usePostFixationDefectMutation,
  usePostTaskMutation
} from '@/shared/api/hooks';
import { ChangeTaskStatusEnum } from '@generated/api';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

export const useDefectFixationEditPage = () => {
  const params = useParams<{ id: string }>();

  const { data } = useGetFixationDefectTaskQuery({ id: params.id });
  const postTaskMutation = usePostTaskMutation();
  const postFixationDefectMutation = usePostFixationDefectMutation();

  const onUpdateTaskStatusClick = async (status: ChangeTaskStatusEnum) => {
    await postTaskMutation.mutateAsync({
      params: { id: params.id, ChangeTaskStatus: status }
    });
    toast.success('Статус задачи изменен');
  };

  const onFixationCreateClick = async () => {
    await postFixationDefectMutation.mutateAsync({
      params: { taskId: params.id }
    });

    toast.success('Дефект зафиксирован');
  };

  return {
    state: {
      data,
      isLoading: {
        fixationDefectCreate: postFixationDefectMutation.isPending,
        updateTaskStatus: postTaskMutation.isPending
      }
    },
    functions: { onUpdateTaskStatusClick, onFixationCreateClick }
  };
};
