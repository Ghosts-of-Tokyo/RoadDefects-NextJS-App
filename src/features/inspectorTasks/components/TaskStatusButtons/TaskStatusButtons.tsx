'use client';

import { Button } from '@/components/ui';
import { ChangeTaskStatusEnum, StatusTask } from '@generated/api';

interface ITaskStatusButtons {
  taskStatus: StatusTask;
  onUpdateTaskStatusClick: (status: ChangeTaskStatusEnum) => void;
  updateTaskStatus: boolean;
}

const TaskStatusButtons = ({
  taskStatus,
  onUpdateTaskStatusClick,
  updateTaskStatus
}: ITaskStatusButtons) => {
  return (
    <div>
      {taskStatus === 'Created' && (
        <Button
          type='submit'
          size='lg'
          className='w-full'
          loading={updateTaskStatus}
          onClick={() => onUpdateTaskStatusClick('StartTask')}
        >
          Принять в рассмотрение
        </Button>
      )}

      {taskStatus === 'Processing' && (
        <div className='space-y-1'>
          <Button
            type='submit'
            size='lg'
            className='w-full bg-destructive'
            loading={updateTaskStatus}
            onClick={() => onUpdateTaskStatusClick('CancelTask')}
          >
            Отложить
          </Button>

          <Button
            type='submit'
            size='lg'
            className='w-full bg-green-700'
            loading={updateTaskStatus}
            onClick={() => onUpdateTaskStatusClick('FinishTask')}
          >
            Завершить
          </Button>
        </div>
      )}
    </div>
  );
};

export default TaskStatusButtons;

