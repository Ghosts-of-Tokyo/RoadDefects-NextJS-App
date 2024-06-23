import { useForm } from 'react-hook-form';
import type { FixationDefectTaskDTO } from '@generated/api';
import { zodResolver } from '@hookform/resolvers/zod';

import type { DefectFixationEditScheme } from '../constants/defectFixationEditScheme';
import { defectFixationEditScheme } from '../constants/defectFixationEditScheme';

interface UseDefectFixationEditFormParams {
  defect: FixationDefectTaskDTO;
}

export const useDefectFixationEditForm = ({ defect }: UseDefectFixationEditFormParams) => {
  const defectFixationEditForm = useForm<DefectFixationEditScheme>({
    mode: 'onSubmit',
    resolver: zodResolver(defectFixationEditScheme),
    defaultValues: {
      description: defect.description ?? '',
      address: defect.address ?? ''
    }
  });

  const onSubmit = defectFixationEditForm.handleSubmit(async (values) => {
    await console.log(values);
  });

  return {
    state: {
      isLoading: false
    },
    form: defectFixationEditForm,
    functions: { onSubmit }
  };
};
