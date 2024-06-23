'use client';

import { Button, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getTaskStatusColor, getTaskStatusText } from '@/shared/helpers/getTaskStatusColor';
import { useDefectFixationEditPage } from './(hooks)/useDefectFixationEditPage';
import { DefectFixationEditForm } from './(components)/DefectFixationEditForm/DefectFixationEditForm';
import { EditActivityDialog } from './(components)/DefectFixationImagesDialog/DefectFixationImagesDialog';
import { useGetFixationPhotoQuery } from '@/shared/api/hooks';
import { useParams } from 'next/navigation';

const FixationDefectEditPage = () => {
  const params = useParams<{ id: string }>();
  const { state, functions } = useDefectFixationEditPage();

  //   const { data } = useGetFixationPhotoQuery({
  //     id: params.id,
  //     photoId: state.data?.data.defectFixation?.photos?.[0].id
  //   });

  if (state.data?.data.defectFixation?.photos) {
    const { data } = useGetFixationPhotoQuery({
      id: params.id,
      photoId: state.data?.data.defectFixation?.photos?.[0].id
    });
  }

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

      {state.data.data.defectFixation.photos && (
        <div>
          <img
            src={URL.createObjectURL(data?.data)}
            alt='defect'
            // className='h-96 w-full object-cover'
          />
        </div>
      )}

      <Button onClick={functions.onEditClick} size='sm' className='rounded-full px-[10px] py-2'>
        Добавить фото
      </Button>

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
