'use client';

import { Typography } from '@/components/typography';
import { Button } from '@/components/ui';
import { TaskCard } from '@/features/inspectorTasks/components/TaskCard/TaskCard';
import {
  getTaskStatusColor,
  getTaskStatusText
} from '@/features/inspectorTasks/helpers/getTaskStatusColor';
import { cn } from '@/lib/utils';
import { useGetFixationDefectTaskQuery, usePostTaskMutation } from '@/shared/api/hooks';
import { useParams } from 'next/navigation';
import { useDefectFixationPage } from './hooks/useDefectFixationPage';

const DefectFixationPage = () => {
  const { state, functions } = useDefectFixationPage();

  if (!state.data) return null;

  return (
    <div className='flex h-screen flex-col justify-between p-5'>
      <div>
        <Typography tag='h3' variant='h3' className='mb-2 text-center'>
          Подробности задачи
        </Typography>
        <div className='p-4'>
          <div className='flex justify-between'>
            <Typography tag='h6' variant='h7'>
              {state.data?.data.id}
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

      <Button
        type='submit'
        size='lg'
        className='w-full'
        loading={state.isLoading}
        onClick={functions.onStartTaskClick}
      >
        Принять в рассмотрение
      </Button>
    </div>
  );
};

export default DefectFixationPage;
