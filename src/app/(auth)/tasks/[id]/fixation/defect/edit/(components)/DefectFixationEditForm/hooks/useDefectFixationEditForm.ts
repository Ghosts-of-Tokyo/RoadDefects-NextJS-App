import { useForm } from 'react-hook-form';
import type { FixationDefectTaskDTO } from '@generated/api';
import { zodResolver } from '@hookform/resolvers/zod';

import { useGetDefectTypeQuery } from '@/shared/api/hooks';

import type { DefectFixationEditScheme } from '../constants/defectFixationEditScheme';
import { defectFixationEditScheme } from '../constants/defectFixationEditScheme';

interface UseDefectFixationEditFormParams {
  defect: FixationDefectTaskDTO;
}

export const useDefectFixationEditForm = ({ defect }: UseDefectFixationEditFormParams) => {
  const { data } = useGetDefectTypeQuery();

  const defectFixationEditForm = useForm<DefectFixationEditScheme>({
    mode: 'onSubmit',
    resolver: zodResolver(defectFixationEditScheme),
    defaultValues: {
      damagedCanvasSquareMeter: defect.defectFixation.damagedCanvasSquareMeter ?? 0,
      defectTypeId: defect.defectFixation.defectType.id ?? ''
    }
  });

  const onSubmit = defectFixationEditForm.handleSubmit(async (values) => {
    await console.log(values);
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
