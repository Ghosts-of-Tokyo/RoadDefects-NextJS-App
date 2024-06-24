import { useForm } from 'react-hook-form';
import type { FixationWorkTaskDTO } from '@generated/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { useGetDefectTypeQuery, usePutFixationDefectMutation } from '@/shared/api/hooks';

import type { DefectFixationEditScheme } from '../constants/defectFixationEditScheme';
import { defectFixationEditScheme } from '../constants/defectFixationEditScheme';

interface UseDefectFixationEditFormParams {
  defect: FixationWorkTaskDTO;
}

export const useDefectFixationEditForm = ({ defect }: UseDefectFixationEditFormParams) => {
  const { data } = useGetDefectTypeQuery();

  const putFixationDefectMutation = usePutFixationDefectMutation();

  const defectFixationEditForm = useForm<DefectFixationEditScheme>({
    mode: 'onSubmit',
    resolver: zodResolver(defectFixationEditScheme),
    defaultValues: {
      damagedCanvasSquareMeter: defect.defectFixation.damagedCanvasSquareMeter?.toString() ?? '0',
      defectTypeId: (defect.defectFixation.defectType && defect.defectFixation.defectType.id) ?? ''
    }
  });

  const onSubmit = defectFixationEditForm.handleSubmit(async (values) => {
    await putFixationDefectMutation.mutateAsync({
      params: {
        id: defect.defectFixation.id,
        damagedCanvasSquareMeter: Number(values.damagedCanvasSquareMeter),
        defectTypeId: values.defectTypeId
      }
    });

    toast.success('Фиксация дефекта успешно отредактирована');
  });

  return {
    state: {
      isLoading: false,
      defectTypes: data?.data
    },
    form: defectFixationEditForm,
    functions: { onSubmit }
  };
};
