import { useForm } from 'react-hook-form';
import type { LoginDTO } from '@generated/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { usePostLoginMutation } from '@/shared/api/hooks';

import { validation } from '../constants/validation';

export const useLoginForm = () => {
  const form = useForm<LoginDTO>({ resolver: zodResolver(validation) });
  const postLogin = usePostLoginMutation();
  const router = useRouter();

  const onSubmit = async (data: LoginDTO) => {
    const response = await postLogin.mutateAsync({ params: data });
    localStorage.setItem('token', response.data.access);

    router.push('/main');
  };

  return {
    state: {
      form,
      errors: form.formState.errors,
      isPending: postLogin.isPending
    },
    functions: { onSubmit }
  };
};
