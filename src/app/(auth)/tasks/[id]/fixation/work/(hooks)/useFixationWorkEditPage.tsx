import {
  useGetFixationWorkTaskQuery,
  usePostFixationDefectMutation,
  usePostFixationWorkMutation,
  usePostTaskMutation
} from '@/shared/api/hooks';
import { ChangeTaskStatusEnum } from '@generated/api';
import { useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export const useFixationWorkEditPage = () => {
  const params = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [imageDialogWorkOpen, setImageDialogWorkOpen] = useState(false);

  const { data } = useGetFixationWorkTaskQuery({ id: params.id });

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

  const onSaveAsync = async () => {
    queryClient.invalidateQueries({ queryKey: ['getFixationWorkTask', params.id] });
  }

  const taskFinishDisable : boolean = (data?.data.defectFixation ?? false) && (!data?.data.defectFixation.defectType || !data.data.defectFixation.damagedCanvasSquareMeter) ||
                                      (!data?.data.fixationWork || (data?.data.fixationWork ?? false) && data?.data?.fixationWork.workDone === null);

  return {
    state: {
      data,
      isLoading: {
        fixationDefectCreate: postFixationDefectMutation.isPending,
        fixationWorkCreate: postFixationWorkMutation.isPending,
        updateTaskStatus: postTaskMutation.isPending
      },
      imageDialogOpen,
      imageDialogWorkOpen,
      taskFinishDisable
    },
    functions: {
      onUpdateTaskStatusClick,
      onFixationDefectCreateClick,
      onFixationWorkCreateClick,
      onEditWorkClick,
      onEditCloseWorkClick,
      onEditClick,
      onEditCloseClick,
      onSaveAsync
    }
  };
};
