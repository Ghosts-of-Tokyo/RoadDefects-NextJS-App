'use client';

import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';

import { Button, Typography } from '@/components/ui';
import TaskStatusButtons from '@/features/inspectorTasks/components/TaskStatusButtons/TaskStatusButtons';
import Photos from '@/features/photos/Photos';
import { ROUTES } from '@/utils/constants/routes';

import { DefectFixationEditForm } from './(components)/DefectFixationEditForm/DefectFixationEditForm';
import DefectFixationTaskInfo from './(components)/DefectFixationTaskInfo/DefectFixationTaskInfo';
import { useDefectFixationTaskPage } from './(hooks)/useDefectFixationTaskPage';

const DefectFixationPage = () => {
  const { state, functions } = useDefectFixationTaskPage();

  if (!state.data) return null;

  return (
    <div className='flex h-full flex-col justify-between p-5'>
      <Link href={ROUTES.TASKS.ROOT} className='absolute'>
        <ChevronLeftIcon className='size-8 rounded-md border' />
      </Link>

      <div className='mb-3 mt-9 flex flex-col'>
        <DefectFixationTaskInfo data={state.data?.data} />
        <Typography
          tag='p'
          variant='sub2'
          className='mt-4 border-t-2 pt-3 text-center text-gray-500'
        >
          Зафиксированный дефект
        </Typography>

        {state.data.data.defectStatus === 'ThereIsNotDefect' && (
          <Typography tag='p' variant='sub3' className='my-1 text-center'>
            Дефект не обнаружен
          </Typography>
        )}

        {state.data.data.defectFixation && state.data.data.defectFixation.photos && (
          <Photos
            taskId={state.data.data.id}
            fixationId={state.data.data.defectFixation.id}
            photos={state.data.data.defectFixation.photos}
            disable={state.data?.data.taskStatus !== 'Processing'}
            onAddClick={functions.onEditClick}
            onEditCloselick={functions.onEditCloseClick}
            imageDialogOpen={state.imageDialogOpen}
            isFixationDefectTask
          />
        )}

        {state.data.data.defectFixation && <DefectFixationEditForm defect={state.data.data} />}

        {!state.data.data.defectFixation && state.data.data.taskStatus === 'Processing' && (
          <Button
            type='submit'
            size='lg'
            className='my-2 w-full bg-slate-900'
            loading={state.isLoading.fixationDefectCreate}
            onClick={functions.onFixationCreateClick}
          >
            Зафиксировать дефект
          </Button>
        )}
      </div>

      <TaskStatusButtons
        taskStatus={state.data.data.taskStatus}
        onUpdateTaskStatusClick={functions.onUpdateTaskStatusClick}
        updateTaskStatus={state.isLoading.updateTaskStatus}
      />

      {state.data.data.taskStatus === 'Completed' && state.data.data.defectFixation && (
        <Link href={ROUTES.FIXATION_DEFECT.CONTRACTORS(state.data.data.defectFixation.id)}>
          <Button type='submit' size='lg' className='w-full'>
            Выбрать подрячика для выполнения работ
          </Button>
        </Link>
      )}
    </div>
  );
};

export default DefectFixationPage;
