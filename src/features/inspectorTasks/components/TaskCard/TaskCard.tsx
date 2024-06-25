import { Typography } from '@/components/ui/typography';
import { TaskDTO } from '@generated/api';
import { getTaskStatusColor, getTaskStatusText } from '@/shared/helpers/getTaskStatusColor';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { getNextFlowLinkByTask } from '../../helpers/getNextFlowLinkByTask';

export const TaskCard = (task: TaskDTO) => (
  <Link href={getNextFlowLinkByTask(task)}>
    <div className='border-b-2 p-4'>
      <div className='flex justify-between'>
        <Typography tag='h6' variant='h7'>
          {task.taskType === 'FixationDefectTask' && 'Фиксация дефекта'}
          {task.taskType === 'FixationWorkTask' && 'Фиксация выполненных работ'}
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
      {task.defectStatus === 'ThereIsDefect' && (
        <Typography tag='p' variant='sub3'>
          Дефект зафиксирован
        </Typography>
      )}
      {task.defectStatus === 'ThereIsNotDefect' && (
        <Typography tag='p' variant='sub3' style={{color: '#777'}}>
          Дефект не обнаружен
        </Typography>
      )}
    </div>
  </Link>
);
