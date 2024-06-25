import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { usePostFixationPhotoMutation } from '@/shared/api/hooks';

import type { DefectFixationImageScheme } from '../constants/ImageScheme';
import { imageScheme } from '../constants/ImageScheme';

interface UseDefectFixationImagesParams {
  taskId: string;
  fixationId: string;
  onAdded: () => void;
}

export const useFixationImages = ({ taskId, fixationId, onAdded }: UseDefectFixationImagesParams) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const postFixationPhotoMutation = usePostFixationPhotoMutation();

  const defectFixationImageForm = useForm<DefectFixationImageScheme>({
    mode: 'onSubmit',
    resolver: zodResolver(imageScheme),
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
      const formData = new FormData();
      formData.append('Photo', values.file);

      await postFixationPhotoMutation.mutateAsync({
        params: { id: fixationId, data: formData }
      });

      toast.success('Фотография успешно добавлена');

      defectFixationImageForm.setValue('file', undefined);

      onAdded();
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
