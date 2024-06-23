'use client';

import Image from 'next/image';
import { Button, ScrollArea, ScrollBar, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getTaskStatusColor, getTaskStatusText } from '@/shared/helpers/getTaskStatusColor';
import { useDefectFixationEditPage } from './(hooks)/useDefectFixationEditPage';
import { DefectFixationEditForm } from './(components)/DefectFixationEditForm/DefectFixationEditForm';
import { EditActivityDialog } from './(components)/DefectFixationImagesDialog/DefectFixationImagesDialog';

import { baseurl } from '@/utils/constants/baseUrl';
import { Trash2Icon } from 'lucide-react';

const FixationDefectEditPage = () => {
  const { state, functions } = useDefectFixationEditPage();

  if (!state.data) return null;

  return (
    <div className='flex flex-col justify-between p-5'>
      <div>
        <Typography tag='h3' variant='h3' className='mb-2 text-center'>
          Подробности задачи
        </Typography>
        <div className='p-4'>
          <div className='flex justify-between'>
            <Typography tag='h6' variant='h7'>
              Фиксация дефекта
            </Typography>
            <Typography
              tag='h5'
              variant='h7'
              className={cn(getTaskStatusColor(state.data?.data.taskStatus))}
            >
              {getTaskStatusText(state.data?.data.taskStatus!)}
            </Typography>
          </div>
          <Typography tag='p' variant='sub3' className='my-1'>
            {state.data?.data.address}
          </Typography>
          <Typography tag='p' variant='sub3'>
            {new Date(state.data?.data.createdDateTime).toLocaleString()}
          </Typography>

          <div className='mt-3 space-y-2'>
            <Typography tag='p' variant='body1'>
              Подробности
            </Typography>

            <div className='rounded-lg border-2 p-3'>
              <Typography tag='p' variant='body2'>
                {state.data?.data.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {state.data.data.defectFixation && state.data.data.defectFixation.photos && (
        <div className='my-2'>
          <ScrollArea className='w-full space-y-1 whitespace-nowrap'>
            <div className='flex gap-2'>
              {state.data.data.defectFixation.photos.map((photo, index) => (
                <div key={index} className='relative h-[200px] w-[200px]'>
                  <Image
                    className='z-0 rounded-lg object-cover'
                    layout='fill'
                    src={`${baseurl}/${photo.pathName}`}
                    alt='photo'
                  />
                  <div className='absolute right-2 top-2 z-50 rounded-full bg-slate-400'>
                    <Trash2Icon className='m-2 stroke-white' />
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation='horizontal' />
          </ScrollArea>
        </div>
      )}

      {state.data.data.defectFixation && state.data.data.taskStatus !== 'Completed' && (
        <Button onClick={functions.onEditClick} size='sm' className='rounded-full px-[10px] py-2'>
          Добавить фото
        </Button>
      )}

      <EditActivityDialog
        defectTask={state.data.data}
        open={state.imageDialogOpen}
        onOpenChange={functions.onEditCloseClick}
      />

      {state.data.data.defectFixation && state.data.data.taskStatus !== 'Created' && (
        <DefectFixationEditForm defect={state.data.data} />
      )}

      {!state.data.data.defectFixation && state.data.data.taskStatus === 'Processing' && (
        <Button
          type='submit'
          size='lg'
          className='w-full bg-slate-900'
          loading={state.isLoading.fixationDefectCreate}
          onClick={functions.onFixationCreateClick}
        >
          Зафиксировать дефект
        </Button>
      )}

      <div className='space-y-3'>
        <Button
          type='submit'
          size='lg'
          className='w-full bg-destructive'
          loading={state.isLoading.fixationDefectCreate}
          onClick={() => functions.onUpdateTaskStatusClick('CancelTask')}
        >
          Отложить
        </Button>

        <Button
          type='submit'
          size='lg'
          className='w-full bg-green-700'
          loading={state.isLoading.fixationDefectCreate}
          onClick={() => functions.onUpdateTaskStatusClick('FinishTask')}
        >
          Завершить
        </Button>
      </div>
    </div>
  );
};

export default FixationDefectEditPage;
