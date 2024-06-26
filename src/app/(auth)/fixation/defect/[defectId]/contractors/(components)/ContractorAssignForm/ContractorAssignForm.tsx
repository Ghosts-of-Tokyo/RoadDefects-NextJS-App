'use client';

import React from 'react';

import {
  Button,
  DatePicker,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Typography
} from '@/components/ui';

import { useContractorAssignForm } from './(hooks)/useContractorAssignForm';

interface ContractorAssignFormProps {
  contractorId: string;
}

export const ContractorAssignForm = ({ contractorId }: ContractorAssignFormProps) => {
  const { state, functions, form } = useContractorAssignForm({ contractorId });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='my-2 w-full'>
        <fieldset disabled={state.isLoading} className='flex w-full flex-col items-end'>
          <div className='smx:flex-col mb-7 flex w-full gap-5'>
            <div className='flex-1 space-y-3'>
              <FormField
                control={form.control}
                name='deadlineDate'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Поврежденная площадь м.кв</FormLabel>
                    <FormControl>
                      <DatePicker {...field} classname='w-full' />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.deadlineDate && (
                        <Typography tag='p' variant='sub3'>
                          {form.formState.errors.deadlineDate.message}
                        </Typography>
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type='submit' size='lg' className='w-full' loading={state.isLoading}>
            Назначить
          </Button>
        </fieldset>
      </form>
    </Form>
  );
};
