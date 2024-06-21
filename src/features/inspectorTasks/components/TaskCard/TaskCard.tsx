import { Typography } from '@/components/typography';
import { TaskDTO } from '@generated/api';
import { getTaskStatusColor, getTaskStatusText } from '../../helpers/getTaskStatusColor';
import { cn } from '@/lib/utils';

export const TaskCard = (task: TaskDTO) => {
  return (
    <div className='rounded-lg border-2 p-4'>
      <div className='flex justify-between'>
        <Typography tag='h5' variant='h5'>
          {task.id}
        </Typography>
        <Typography tag='h5' variant='h5' className={cn(getTaskStatusColor(task.taskStatus))}>
          {getTaskStatusText(task.taskStatus)}
        </Typography>
      </div>
      <Typography tag='p' variant='sub3'>
        {task.address}
      </Typography>
      <Typography tag='p' variant='sub3'>
        {new Date(task.createdDateTime).toLocaleString()}
      </Typography>
      {task.taskType === 'FixationDefectTask' && (
        <Typography tag='p' variant='sub2'>
          Дефект зафиксирован
        </Typography>
      )}
    </div>
  );
};
