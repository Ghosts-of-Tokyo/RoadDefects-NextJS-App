'use client';

import { Button, Typography } from '@/components/ui';
import { getTaskStatusColor, getTaskStatusText } from '@/shared/helpers/getTaskStatusColor';
import { cn } from '@/lib/utils';
import { useDefectFixationPage } from './(hooks)/useDefectFixationPage';

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
              {/* {task.taskType === 'FixationDefectTask' && 'Фиксация дефекта'}
              {task.taskType === 'FixationWorkTask' && 'Фиксация выполненных работ'} */}
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

      {state.data.data.taskStatus === 'Created' && (
        <Button
          type='submit'
          size='lg'
          className='w-full'
          loading={state.isLoading.startTask}
          onClick={functions.onStartTaskClick}
        >
          Принять в рассмотрение
        </Button>
      )}
    </div>
  );
};

export default DefectFixationPage;
