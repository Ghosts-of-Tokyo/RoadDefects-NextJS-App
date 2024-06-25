'use client';

import Image from 'next/image';
import DefectFixationTaskInfo from './(components)/DefectFixationTaskInfo/DefectFixationTaskInfo';
import { useDefectFixationTaskPage } from './(hooks)/useDefectFixationTaskPage';
import { Trash2Icon } from 'lucide-react';
import { EditActivityDialog } from './(components)/DefectFixationImagesDialog/DefectFixationImagesDialog';
import { baseurl } from '@/utils/constants/baseUrl';
import { Button, ScrollArea, ScrollBar, Typography } from '@/components/ui';
import { DefectFixationEditForm } from './(components)/DefectFixationEditForm/DefectFixationEditForm';
import TaskStatusButtons from '@/features/inspectorTasks/components/TaskStatusButtons/TaskStatusButtons';

const DefectFixationPage = () => {
  const { state, functions } = useDefectFixationTaskPage();

  if (!state.data) return null;

  return (
    <div className='flex h-screen flex-col justify-between p-5'>
      <div className='flex flex-col mb-3'>
        <DefectFixationTaskInfo data={state.data?.data}/>

        <Typography tag='p' variant='sub2' className='mt-4 text-center text-gray-500'>
          Зафиксированный дефект
        </Typography>

        {state.data.data.defectStatus === 'ThereIsNotDefect' && (
          <Typography tag='p' variant='sub3' className='my-1 text-center'>
            Дефект не обнаружен
          </Typography>
        )}

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
                    {}
                    {state.data?.data.taskStatus === 'Processing' && (
                      <div className='absolute right-2 top-2 z-50 rounded-full bg-slate-400'>
                        <Trash2Icon className='m-2 stroke-white' />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </div>
        )}

        {state.data.data.defectFixation && state.data.data.taskStatus === 'Processing' && (
          <Button onClick={functions.onEditClick} size='sm' className='rounded-full px-[10px] py-2'>
            Добавить фото
          </Button>
        )}

        <EditActivityDialog
          defectTask={state.data.data}
          open={state.imageDialogOpen}
          onOpenChange={functions.onEditCloseClick}
        />

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
    </div>
  );
};

export default DefectFixationPage;
