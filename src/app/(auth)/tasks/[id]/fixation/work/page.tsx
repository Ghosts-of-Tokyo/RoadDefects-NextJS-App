'use client';

import { Button, Typography } from '@/components/ui';
import { getTaskStatusColor, getTaskStatusText } from '@/shared/helpers/getTaskStatusColor';
import { cn } from '@/lib/utils';
import { useWorkFixationPage } from './(hooks)/useWorkFixationPage';

const DefectWorkFixationPage = () => {
  const { state, functions } = useWorkFixationPage();

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
              Фиксация выполненных работ
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

export default DefectWorkFixationPage;
