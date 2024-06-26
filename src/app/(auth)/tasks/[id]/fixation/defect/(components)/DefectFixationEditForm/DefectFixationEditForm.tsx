'use client';

import React from 'react';
import type { FixationDefectTaskDTO } from '@generated/api';

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
import { dateFormat } from '@/shared/helpers/dateFormate';

interface DefectFixationEditFormProps {
  defect: FixationDefectTaskDTO;
  onSaveAsync: () => void;
}

export const DefectFixationEditForm = ({ defect, onSaveAsync }: DefectFixationEditFormProps) => {
  const { state, form, functions } = useDefectFixationEditForm({ defect, onSaveAsync});

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='my-2 w-full'>
        <fieldset
          disabled={state.isLoading || defect.taskStatus !== 'Processing'}
          className='flex w-full flex-col items-end'
        >
          <div className='smx:flex-col mb-7 flex w-full gap-5'>
            <div className='flex-1 space-y-3'>
              <FormField
                control={form.control}
                name='damagedCanvasSquareMeter'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Поврежденная площадь м.кв</FormLabel>
                    <FormControl>
                      <Input type='number' min='0' max='1000' step='0.01' {...field} />
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
                          <SelectValue placeholder='Выберите дефект' />
                        </SelectTrigger>
                        <SelectContent className='max-w-[calc(100vw-20px)]'>
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
              <Typography tag='p' variant='sub4' className='my-1'>
                Зафиксировано {dateFormat(new Date(defect.defectFixation.recordedDateTime))}
              </Typography>
            </div>
          </div>
          {defect.taskStatus === 'Processing' && (
            <Button type='submit' size='lg' className='w-full' loading={state.isLoading}>
              Сохранить
            </Button>
          )}
        </fieldset>
      </form>
    </Form>
  );
};
