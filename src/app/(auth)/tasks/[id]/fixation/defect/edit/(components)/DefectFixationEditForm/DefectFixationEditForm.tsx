'use client';

import React from 'react';

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
import { useDefectFixationEditForm } from './hooks/useDefectFixationEditForm';
import { FixationDefectTaskDTO } from '@generated/api';

interface DefectFixationEditFormProps {
  defect: FixationDefectTaskDTO;
}

export const DefectFixationEditForm = ({ defect }: DefectFixationEditFormProps) => {
  const { state, form, functions } = useDefectFixationEditForm({ defect });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='w-full'>
        <fieldset disabled={state.isLoading} className='flex w-full flex-col items-end'>
          <div className='smx:flex-col mb-7 flex w-full gap-5'>
            <div className='flex-1 space-y-3'>
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Описание</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.description && (
                        <Typography tag='p' variant='sub3'>
                          {form.formState.errors.description.message}
                        </Typography>
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='address'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Адрес</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.address && (
                        <Typography tag='p' variant='sub3'>
                          {form.formState.errors.address.message}
                        </Typography>
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type='submit' size='lg' className='w-full' loading={state.isLoading}>
            Сохранить
          </Button>
        </fieldset>
      </form>
    </Form>
  );
};
