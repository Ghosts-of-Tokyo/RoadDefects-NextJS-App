'use client';

import DefectFixationTaskInfo from './(components)/DefectFixationTaskInfo/DefectFixationTaskInfo';
import { useDefectFixationTaskPage } from './(hooks)/useDefectFixationTaskPage';
import { Button, Typography } from '@/components/ui';
import { DefectFixationEditForm } from './(components)/DefectFixationEditForm/DefectFixationEditForm';
import TaskStatusButtons from '@/features/inspectorTasks/components/TaskStatusButtons/TaskStatusButtons';
import Photos from '@/features/photos/Photos';
import { ContractorDialog } from './(components)/ContractorDialog/ContractorDialog';

const DefectFixationPage = () => {
  const { state, functions } = useDefectFixationTaskPage();

  if (!state.data) return null;

  return (
    <div className='flex h-full flex-col justify-between p-5'>
      <div className='mb-3 flex flex-col'>
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
            isFixationDefectTask={true}
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

      {state.data.data.taskStatus === 'Completed' && (
        <Button type='submit' size='lg' className='w-full' onClick={functions.onContractorClick}>
          Выбрать подрячика для выполнения работ
        </Button>
      )}

      <ContractorDialog
        open={state.contractorDialogOpen}
        onOpenChange={functions.onContractorCloseClick}
        fixationId={state.data.data.defectFixation.id}
        onAdded={() => console.log('onAdded')}
      />
    </div>
  );
};

export default DefectFixationPage;
