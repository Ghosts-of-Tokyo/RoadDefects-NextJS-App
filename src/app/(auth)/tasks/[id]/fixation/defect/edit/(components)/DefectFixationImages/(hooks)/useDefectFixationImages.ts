import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import type { FixationDefectTaskDTO } from '@generated/api';
import { zodResolver } from '@hookform/resolvers/zod';

import { usePostFixationPhotoMutation } from '@/shared/api/hooks';

import type { DefectFixationImageScheme } from '../constants/defectFixationImageScheme';
import { defectFixationImageScheme } from '../constants/defectFixationImageScheme';

interface UseDefectFixationImagesParams {
  defectTask: FixationDefectTaskDTO;
}

export const useDefectFixationImages = ({ defectTask }: UseDefectFixationImagesParams) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const postFixationPhotoMutation = usePostFixationPhotoMutation();

  const defectFixationImageForm = useForm<DefectFixationImageScheme>({
    mode: 'onSubmit',
    resolver: zodResolver(defectFixationImageScheme),
    defaultValues: {
      file: undefined
    }
  });

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      defectFixationImageForm.setValue('file', event.target.files[0]);
    }
  };

  const onSubmit = defectFixationImageForm.handleSubmit(async (values) => {
    if (values.file) {
      console.log(values.file);

      const formData = new FormData();
      formData.append('Photo', values.file);

      console.log(formData);

      const response = await postFixationPhotoMutation.mutateAsync({
        params: { id: defectTask.defectFixation.id, data: formData }
      });

      console.log(response.data.uploadedPhotoId);
    }
  });

  return {
    state: {
      fileInputRef,
      isLoading: defectFixationImageForm.formState.isSubmitting
    },
    form: defectFixationImageForm,
    functions: { onFileChange, onSubmit }
  };
};
