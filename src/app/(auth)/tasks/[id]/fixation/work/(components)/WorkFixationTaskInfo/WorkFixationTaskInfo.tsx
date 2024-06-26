'use client';

import type { FixationWorkTaskDTO } from '@generated/api';

import { Button, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getTaskStatusColor, getTaskStatusText } from '@/shared/helpers/getTaskStatusColor';
import Link from 'next/link';
import { getNextFlowLinkByTask } from '@/features/inspectorTasks/helpers/getNextFlowLinkByTask';
import { dateFormat } from '@/shared/helpers/dateFormate';

interface IWorkFixationTaskInfo {
  data: FixationWorkTaskDTO;
}

const WorkFixationTaskInfo = ({ data }: IWorkFixationTaskInfo) => (
  <div>
    <Typography tag='h3' variant='h3' className='mb-2 text-center'>
      Подробности задачи
    </Typography>
    <div className='p-1'>
      <div className='flex justify-between'>
        <Typography tag='h6' variant='h7'>
          Фиксация выполненных работ
        </Typography>
        <Typography tag='h5' variant='h7' className={cn(getTaskStatusColor(data.taskStatus))}>
          {getTaskStatusText(data.taskStatus)}
        </Typography>
      </div>
      <Typography tag='p' variant='sub3' className='my-1'>
        {data.address}
      </Typography>
      <Typography tag='p' variant='sub3'>
        Создано {dateFormat(new Date(data.createdDateTime))}
      </Typography>
    </div>

    <Link href={getNextFlowLinkByTask(data.prevTask)} className='flex flex-col'>
        <Button size='sm' className='rounded-full px-[10px] py-2 mt-3 w-100'>
          Перейти на предыдущую задачу
        </Button>
      </Link>
  </div>
);

export default WorkFixationTaskInfo;
