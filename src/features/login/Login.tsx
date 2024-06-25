'use client';

import { ReloadIcon } from '@radix-ui/react-icons';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Typography
} from '@/components/ui';

import { useLoginForm } from './hooks/useLoginForm';

export const Login = () => {
  const { state, functions } = useLoginForm();

  return (
    <Form {...state.form}>
      <form
        className='flex max-w-prose flex-col gap-8'
        onSubmit={state.form.handleSubmit(functions.onSubmit)}
      >
        <Typography tag='h1' variant='h1' className='my-1 text-center'>
          <span>Road</span><span className='text-primary'>Wise</span>
        </Typography>

        <FormField
          control={state.form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' {...field} />
              </FormControl>
              <FormMessage>{state.errors.email && state.errors.email.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={state.form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input type='password' {...field} />
              </FormControl>
              <FormMessage>{state.errors.email && state.errors.email.message}</FormMessage>
            </FormItem>
          )}
        />

        <Button
          type='submit'
          size='lg'
          className='w-full'
          loading={state.isPending}
          disabled={state.isPending}
        >
          Войти
        </Button>
      </form>
    </Form>
  );
};

