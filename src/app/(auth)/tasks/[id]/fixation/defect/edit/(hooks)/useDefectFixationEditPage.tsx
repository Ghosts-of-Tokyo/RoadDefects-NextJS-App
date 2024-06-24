import {
  useGetFixationDefectTaskQuery,
  useGetFixationPhotoQuery,
  usePostFixationDefectMutation,
  usePostTaskMutation
} from '@/shared/api/hooks';
import { ROUTES } from '@/utils/constants/routes';
import { ChangeTaskStatusEnum } from '@generated/api';
import { useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export const useDefectFixationEditPage = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const queryClient = useQueryClient();

  const [imageDialogOpen, setImageDialogOpen] = useState(false);

  const { data } = useGetFixationDefectTaskQuery({ id: params.id });
  const postTaskMutation = usePostTaskMutation();
  const postFixationDefectMutation = usePostFixationDefectMutation();

  const onEditClick = () => setImageDialogOpen(true);
  const onEditCloseClick = () => setImageDialogOpen(false);

  const onUpdateTaskStatusClick = async (status: ChangeTaskStatusEnum) => {
    await postTaskMutation.mutateAsync({
      params: { id: params.id, ChangeTaskStatus: status }
    });
    queryClient.invalidateQueries({ queryKey: ['getFixationDefectTask', params.id] });

    toast.success('Статус задачи изменен');

    if (status === 'CancelTask') {
      router.push(ROUTES.TASKS.FIXATION.DEFECT.ROOT(params.id));
    }
  };

  const onFixationCreateClick = async () => {
    await postFixationDefectMutation.mutateAsync({
      params: { taskId: params.id }
    });
    queryClient.invalidateQueries({ queryKey: ['getFixationDefectTask', params.id] });

    toast.success('Дефект зафиксирован');
  };

  return {
    state: {
      data,
      isLoading: {
        fixationDefectCreate: postFixationDefectMutation.isPending,
        updateTaskStatus: postTaskMutation.isPending
      },
      imageDialogOpen
    },
    functions: {
      onUpdateTaskStatusClick,
      onFixationCreateClick,
      onEditClick,
      onEditCloseClick
    }
  };
};
