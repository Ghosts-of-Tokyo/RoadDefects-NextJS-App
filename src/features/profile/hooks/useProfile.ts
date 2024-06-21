import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import type { EditProfileDTO } from '@generated/api';
import { zodResolver } from '@hookform/resolvers/zod';

import { usePutProfileMutation } from '@/shared/api/hooks';
import { UserContext } from '@/shared/contexts';

import { validation } from '../constants/validation';

export const useProfile = () => {
  const userContext = useContext(UserContext);
  const putProfile = usePutProfileMutation();

  const form = useForm<EditProfileDTO>({
    values: { email: userContext.user?.email ?? '', fullName: userContext.user?.fullName ?? '' },
    resolver: zodResolver(validation)
  });

  const onSubmit = async (data: EditProfileDTO) => {
    await putProfile.mutateAsync({ params: data });
  };

  return {
    state: { form, errors: form.formState.errors, isPending: putProfile.isPending },
    functions: { onSubmit }
  };
};
