import { useForm } from 'react-hook-form';
import type { FixationWorkTaskDTO } from '@generated/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { usePutFixationWorkMutation } from '@/shared/api/hooks';

import type { WorkFixationEditScheme } from '../constants/workFixationEditScheme';
import { workFixationEditScheme } from '../constants/workFixationEditScheme';

interface UseDefectWorkEditFormParams {
  defect: FixationWorkTaskDTO;
  onSaveAsync: () => void;
}

export const useFixationWorkEditForm = ({ defect, onSaveAsync }: UseDefectWorkEditFormParams) => {
  const putFixationWorkMutation = usePutFixationWorkMutation();

  const workFixationEditForm = useForm<WorkFixationEditScheme>({
    mode: 'onSubmit',
    resolver: zodResolver(workFixationEditScheme),
    defaultValues: {
      workDone: defect.fixationWork.workDone ? defect.fixationWork.workDone.toString() : 'false'
    }
  });

  const onSubmit = workFixationEditForm.handleSubmit(async (values) => {
    console.log(values);
    await putFixationWorkMutation.mutateAsync({
      params: {
        id: defect.fixationWork.id,
        workDone: values.workDone === 'true'
      }
    });

    await onSaveAsync();

    toast.success('Фиксация выполненных работ успешно отредактирована');
  });

  return {
    state: {
      isLoading: false
    },
    form: workFixationEditForm,
    functions: { onSubmit }
  };
};
