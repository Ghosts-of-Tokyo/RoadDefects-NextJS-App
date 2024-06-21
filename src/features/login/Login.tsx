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
  Input
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
        <Button disabled={state.isPending} type='submit' className='mt-3'>
          {state.isPending && <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />}
          Войти
        </Button>
      </form>
    </Form>
  );
};
