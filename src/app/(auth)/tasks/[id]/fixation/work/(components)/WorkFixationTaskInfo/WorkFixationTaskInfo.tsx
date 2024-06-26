'use client';

import type { FixationWorkTaskDTO } from '@generated/api';

import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getTaskStatusColor, getTaskStatusText } from '@/shared/helpers/getTaskStatusColor';

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
        {new Date(data.createdDateTime).toLocaleString()}
      </Typography>
    </div>
  </div>
);

export default WorkFixationTaskInfo;
