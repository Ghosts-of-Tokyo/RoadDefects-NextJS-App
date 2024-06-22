import { Typography } from '@/components/typography';
import { FixationDefectTaskDTO, TaskDTO } from '@generated/api';
import { getTaskStatusColor, getTaskStatusText } from '../../helpers/getTaskStatusColor';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ROUTES } from '@/utils/constants/routes';

export const TaskCard = (task: TaskDTO) => (
  <Link
    href={
      task.taskType === 'FixationDefectTask'
        ? ROUTES.TASKS.FIXATION.DEFECT(task.id)
        : ROUTES.TASKS.FIXATION.WORK(task.id)
    }
  >
    <div className='border-b-2 p-4'>
      <div className='flex justify-between'>
        <Typography tag='h6' variant='h7'>
          {task.id}
        </Typography>
        <Typography tag='h5' variant='h7' className={cn(getTaskStatusColor(task.taskStatus))}>
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
  </Link>
);
