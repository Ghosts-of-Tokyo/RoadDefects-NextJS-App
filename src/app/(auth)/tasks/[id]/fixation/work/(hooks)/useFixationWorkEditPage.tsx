import { useState } from 'react';
import type { ChangeTaskStatusEnum } from '@generated/api';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import {
  useGetFixationWorkTaskQuery,
  usePostFixationDefectMutation,
  usePostFixationWorkMutation,
  usePostTaskMutation
} from '@/shared/api/hooks';

export const useFixationWorkEditPage = () => {
  const params = useParams<{ id: string }>();

  const queryClient = useQueryClient();

  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [imageDialogWorkOpen, setImageDialogWorkOpen] = useState(false);

  const { data } = useGetFixationWorkTaskQuery({ id: params.id });
  // const fixationDefectTaskQuery = useGetFixationDefectTaskQuery({ id: params.id });

  // console.log(fixationDefectTaskQuery.data?.data);
  const postTaskMutation = usePostTaskMutation();
  const postFixationDefectMutation = usePostFixationDefectMutation();
  const postFixationWorkMutation = usePostFixationWorkMutation();

  const onEditWorkClick = () => setImageDialogWorkOpen(true);
  const onEditClick = () => setImageDialogOpen(true);
  const onEditCloseClick = () => setImageDialogOpen(false);
  const onEditCloseWorkClick = () => setImageDialogWorkOpen(false);

  const onUpdateTaskStatusClick = async (status: ChangeTaskStatusEnum) => {
    await postTaskMutation.mutateAsync({
      params: { id: params.id, ChangeTaskStatus: status }
    });
    queryClient.invalidateQueries({ queryKey: ['getFixationWorkTask', params.id] });

    toast.success('Статус задачи изменен');

    // if (status === 'CancelTask') {
    //   router.push(ROUTES.TASKS.FIXATION.DEFECT.ROOT(params.id));
    // }
  };

  const onFixationDefectCreateClick = async () => {
    await postFixationDefectMutation.mutateAsync({
      params: { taskId: params.id }
    });
    queryClient.invalidateQueries({ queryKey: ['getFixationWorkTask', params.id] });

    toast.success('Дефект зафиксирован');
  };

  const onFixationWorkCreateClick = async () => {
    await postFixationWorkMutation.mutateAsync({
      params: { taskFixationWorkId: params.id }
    });
    queryClient.invalidateQueries({ queryKey: ['getFixationWorkTask', params.id] });

    toast.success('Фиксация выполненных работ создана');
  };

  return {
    state: {
      data,
      isLoading: {
        fixationDefectCreate: postFixationDefectMutation.isPending,
        fixationWorkCreate: postFixationWorkMutation.isPending,
        updateTaskStatus: postTaskMutation.isPending
      },
      imageDialogOpen,
      imageDialogWorkOpen
    },
    functions: {
      onUpdateTaskStatusClick,
      onFixationDefectCreateClick,
      onFixationWorkCreateClick,

      onEditWorkClick,
      onEditCloseWorkClick,

      onEditClick,
      onEditCloseClick
    }
  };
};
