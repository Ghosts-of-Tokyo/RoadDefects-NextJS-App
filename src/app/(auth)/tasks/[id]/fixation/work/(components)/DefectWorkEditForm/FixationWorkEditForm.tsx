'use client';

import React from 'react';
import type { FixationWorkTaskDTO } from '@generated/api';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
  Typography
} from '@/components/ui';

import { useFixationWorkEditForm } from './hooks/useFixationWorkEditForm';

interface DefectFixationEditFormProps {
  defect: FixationWorkTaskDTO;
  onSaveAsync: () => void;
}

export const FixationWorkEditForm = ({ defect, onSaveAsync }: DefectFixationEditFormProps) => {
  const { state, form, functions } = useFixationWorkEditForm({ defect, onSaveAsync });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='my-2 w-full rounded-lg border-2 p-3'>
        <fieldset
          disabled={state.isLoading || defect.taskStatus !== 'Processing'}
          className='flex w-full flex-col items-end'
        >
          <div className='smx:flex-col mb-7 flex w-full gap-5'>
            <div className='flex-1 space-y-3'>
              <FormField
                control={form.control}
                name='workDone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Работа выполнена?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value.toString()}
                        className='flex flex-col space-y-1'
                      >
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='true' />
                          </FormControl>
                          <FormLabel>Да</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='false' />
                          </FormControl>
                          <FormLabel>Нет</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.workDone && (
                        <Typography tag='p' variant='sub3'>
                          {form.formState.errors.workDone.message}
                        </Typography>
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>
          {defect.taskStatus === 'Processing' && (
            <Button type='submit' size='sm' className='w-full' loading={state.isLoading}>
              Сохранить
            </Button>
          )}
        </fieldset>
      </form>
    </Form>
  );
};
