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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
                name='damagedCanvasSquareMeter'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Поврежденная площадь м.кв</FormLabel>
                    <FormControl>
                      <Input {...field} type='number' min='0' max='1000' />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.damagedCanvasSquareMeter && (
                        <Typography tag='p' variant='sub3'>
                          {form.formState.errors.damagedCanvasSquareMeter.message}
                        </Typography>
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='defectTypeId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Тип дефекта</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={defect.taskStatus === 'Completed'}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Дефект' />
                        </SelectTrigger>
                        <SelectContent>
                          {state.defectTypes?.map((defect) => (
                            <SelectItem key={defect.id} value={defect.id}>
                              {defect.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.defectTypeId && (
                        <Typography tag='p' variant='sub3'>
                          {form.formState.errors.defectTypeId.message}
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
