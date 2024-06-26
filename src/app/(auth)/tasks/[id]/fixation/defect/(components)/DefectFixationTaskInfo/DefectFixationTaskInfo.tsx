'use client';

import type { FixationDefectTaskDTO } from '@generated/api';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { getTaskStatusColor, getTaskStatusText } from '@/shared/helpers/getTaskStatusColor';
import { dateFormat } from '@/shared/helpers/dateFormate';

interface IDefectFixationTaskInfo {
  data: FixationDefectTaskDTO;
}

const DefectFixationTaskInfo = ({ data }: IDefectFixationTaskInfo) => (
  <div>
    <Typography tag='h3' variant='h3' className='mb-2 text-center'>
      Подробности задачи
    </Typography>
    <div className='p-1'>
      <div className='flex justify-between'>
        <Typography tag='h6' variant='h7'>
          Фиксация дефекта
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

      <div className='mt-3 space-y-2'>
        <Typography tag='p' variant='body1'>
          Подробности
        </Typography>

        <div className='rounded-lg border-2 p-3'>
          <Typography tag='p' variant='body2'>
            {data.description}
          </Typography>
        </div>
      </div>
    </div>
  </div>
);

export default DefectFixationTaskInfo;
