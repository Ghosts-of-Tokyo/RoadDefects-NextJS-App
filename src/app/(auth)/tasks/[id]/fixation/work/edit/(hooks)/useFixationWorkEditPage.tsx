import {
  useGetFixationDefectTaskQuery,
  useGetFixationWorkTaskQuery,
  usePostFixationDefectMutation,
  usePostFixationWorkMutation,
  usePostTaskMutation
} from '@/shared/api/hooks';
import { ROUTES } from '@/utils/constants/routes';
import { ChangeTaskStatusEnum } from '@generated/api';
import { useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export const useFixationWorkEditPage = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
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
        updateTaskStatus: postTaskMutation.isPending
      },
      imageDialogOpen,
      imageDialogWorkOpen
    },
    functions: {
      onUpdateTaskStatusClick,
      onFixationCreateClick,
      onFixationWorkCreateClick,
      onEditClick,
      onEditWorkClick,
      onEditCloseClick,
      onEditCloseWorkClick
    }
  };
};
