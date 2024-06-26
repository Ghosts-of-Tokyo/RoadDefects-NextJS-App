import { useState } from 'react';
import type { ChangeTaskStatusEnum } from '@generated/api';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import {
  useGetFixationDefectTaskQuery,
  usePostFixationDefectMutation,
  usePostTaskMutation
} from '@/shared/api/hooks';

export const useDefectFixationTaskPage = () => {
  const params = useParams<{ id: string }>();
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
  };

  const onFixationCreateClick = async () => {
    await postFixationDefectMutation.mutateAsync({
      params: { taskId: params.id }
    });
    queryClient.invalidateQueries({ queryKey: ['getFixationDefectTask', params.id] });

    toast.success('Дефект зафиксирован');
  };

  const onDefectSaveAsync = async () => {
    await queryClient.invalidateQueries({ queryKey: ['getFixationDefectTask', params.id] });
  };

  const taskFinishDisable: boolean =
    (data?.data.defectFixation ?? false) &&
    (!data?.data.defectFixation.defectType || !data.data.defectFixation.damagedCanvasSquareMeter);

  return {
    state: {
      data,
      isLoading: {
        startTask: postTaskMutation.isPending,
        fixationDefectCreate: postFixationDefectMutation.isPending,
        updateTaskStatus: postTaskMutation.isPending
      },
      taskFinishDisable,
      imageDialogOpen
    },
    functions: {
      onUpdateTaskStatusClick,
      onFixationCreateClick,
      onEditClick,
      onEditCloseClick,
      onDefectSaveAsync
    }
  };
};
