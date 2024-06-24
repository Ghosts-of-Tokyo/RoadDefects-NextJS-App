import {
  useGetFixationWorkTaskQuery,
  usePostFixationDefectMutation,
  usePostTaskMutation
} from '@/shared/api/hooks';
import { ROUTES } from '@/utils/constants/routes';
import { useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

export const useWorkFixationPage = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const { data } = useGetFixationWorkTaskQuery({ id: params.id });
  const postTaskMutation = usePostTaskMutation();
  const postFixationDefectMutation = usePostFixationDefectMutation();

  const onStartTaskClick = async () => {
    await postTaskMutation.mutateAsync({
      params: { id: params.id, ChangeTaskStatus: 'StartTask' }
    });

    queryClient.invalidateQueries({ queryKey: ['getFixationWorkTask', params.id] });

    router.push(ROUTES.TASKS.FIXATION.WORK.EDIT(params.id));
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
