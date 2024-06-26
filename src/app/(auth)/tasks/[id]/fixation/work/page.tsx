'use client';

import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';

import { Button, Typography } from '@/components/ui';
import TaskStatusButtons from '@/features/inspectorTasks/components/TaskStatusButtons/TaskStatusButtons';
import Photos from '@/features/photos/Photos';
import { ROUTES } from '@/utils/constants/routes';

import { DefectFixationEditForm } from './(components)/DefectFixationEditForm/DefectFixationEditForm';
import { FixationWorkEditForm } from './(components)/DefectWorkEditForm/FixationWorkEditForm';
import WorkFixationTaskInfo from './(components)/WorkFixationTaskInfo/WorkFixationTaskInfo';
import { useFixationWorkEditPage } from './(hooks)/useFixationWorkEditPage';
import { dateFormat } from '@/shared/helpers/dateFormate';
import ContractorCard from '@/app/(auth)/fixation/defect/[defectId]/contractors/(components)/ContractorCard/ContractorCard';

const DefectWorkFixationPage = () => {
  const { state, functions } = useFixationWorkEditPage();

  if (!state.data) return null;

  return (
    <div className='flex h-full flex-col justify-between p-5'>
      <Link href={ROUTES.TASKS.ROOT} className='absolute'>
        <ChevronLeftIcon className='size-8 rounded-md border' />
      </Link>

      <div className='mb-3 mt-8 flex flex-col'>
        <WorkFixationTaskInfo data={state.data?.data} />

        {/* <------------ fixationWork ------------> */}

        {!(!state.data?.data.fixationWork && state.data?.data.taskStatus === 'Created') && (
          <Typography 
            tag='p' 
            variant='sub2' 
            className='mt-4 pt-3 border-t-2 text-center text-gray-500'
            >
            Зафиксированный факт выполнения работ
          </Typography>
        )}

        {state.data.data.fixationWork && state.data.data.fixationWork.photos && (
          <Photos
            taskId={state.data.data.id}
            fixationId={state.data.data.fixationWork.id}
            photos={state.data.data.fixationWork.photos}
            disable={state.data?.data.taskStatus !== 'Processing'}
            imageDialogOpen={state.imageDialogWorkOpen}
            onAddClick={functions.onEditWorkClick}
            onEditCloselick={functions.onEditCloseWorkClick}
            isFixationDefectTask={false}
          />
        )}

        {state.data.data.fixationWork && (
          <>
            <FixationWorkEditForm defect={state.data.data} />
            <Typography tag='p' variant='sub4' className='my-1'>
              Зафиксировано {dateFormat(new Date(state.data.data.fixationWork.recordedDateTime))}
            </Typography>
          </>
        )}
        {!state.data.data.fixationWork && state.data?.data.taskStatus === 'Processing' && (
          <Button
            type='submit'
            size='lg'
            className='my-2 w-full bg-slate-900'
            loading={state.isLoading.fixationWorkCreate}
            onClick={functions.onFixationWorkCreateClick}
          >
            Созданию фиксацию выполненных работ
          </Button>
        )}

        {/* <------------ defectFixation ------------> */}

        {!(!state.data?.data.defectFixation && state.data?.data.taskStatus === 'Created') && (
          <Typography 
            tag='p' 
            variant='sub2' 
            className='mt-4 pt-3 border-t-2 text-center text-gray-500'
            >
            Дефект обнаруженный в ходе проверки выполненных работ
          </Typography>
        )}

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
            isFixationDefectTask={false}
          />
        )}

        {state.data?.data.defectFixation && <DefectFixationEditForm defect={state.data.data} />}
        {!state.data?.data.defectFixation && state.data?.data.taskStatus === 'Processing' && (
          <Button
            type='submit'
            size='lg'
            className='my-2 w-full bg-slate-900'
            loading={state.isLoading.fixationDefectCreate}
            onClick={functions.onFixationDefectCreateClick}
          >
            Зафиксировать дефект
          </Button>
        )}
      </div>

      {/* <------------ TaskStatusButtons ------------> */}

      <TaskStatusButtons
        taskStatus={state.data.data.taskStatus}
        onUpdateTaskStatusClick={functions.onUpdateTaskStatusClick}
        updateTaskStatus={state.isLoading.updateTaskStatus}
      />

      {state.data.data.taskStatus === 'Completed' && state.data.data.defectFixation && !state.data.data.defectFixation.contractor && (
        <Link href={ROUTES.FIXATION_DEFECT.CONTRACTORS(state.data.data.defectFixation.id)}>
          <Button type='submit' size='lg' className='w-full'>
            Выбрать подрячика для выполнения работ
          </Button>
        </Link>
      )}

      {state.data.data.taskStatus === 'Completed' && state.data.data.defectFixation && state.data.data.defectFixation.contractor && (
        <>
          <Typography
            tag='p'
            variant='sub2'
            className='text-center text-gray-500'
          >
            Подрядчик, назначенный на устранение дефекта
          </Typography>
          <ContractorCard contractor={state.data.data.defectFixation.contractor} />
        </>        
      )}
    </div>
  );
};

export default DefectWorkFixationPage;
