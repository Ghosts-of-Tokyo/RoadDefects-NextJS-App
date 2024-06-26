import type { TaskDTO } from '@generated/api';
import Link from 'next/link';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { getTaskStatusColor, getTaskStatusText } from '@/shared/helpers/getTaskStatusColor';

import { getNextFlowLinkByTask } from '../../helpers/getNextFlowLinkByTask';
import { dateFormat } from '@/shared/helpers/dateFormate';

interface TaskCardProps {
  task: TaskDTO;
}

export const TaskCard = ({ task }: TaskCardProps) => (
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
        {dateFormat(new Date(task.createdDateTime))}
      </Typography>
      {task.defectStatus === 'ThereIsDefect' && (
        <Typography tag='p' variant='sub3' style={{color: '#777'}}>
          Дефект зафиксирован
        </Typography>
      )}
      {task.defectStatus === 'ThereIsNotDefect' && (
        <Typography tag='p' variant='sub3' style={{ color: '#777' }}>
          Дефект не обнаружен
        </Typography>
      )}
    </div>
  </Link>
);
