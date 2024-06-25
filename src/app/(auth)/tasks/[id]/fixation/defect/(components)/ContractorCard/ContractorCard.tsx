'use client';

import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getTaskStatusColor, getTaskStatusText } from '@/shared/helpers/getTaskStatusColor';
import { ContractorDTO, FixationWorkTaskDTO } from '@generated/api';

interface ContractorCardProps {
  contractor: ContractorDTO;
}

const ContractorCard = ({ contractor }: ContractorCardProps) => (
  <div className='my-3 border-b-2'>
    <Typography tag='h5' variant='h5' className='mb-2'>
      {contractor.organizationName}
    </Typography>
    <div>
      {/* <div className='flex justify-between'>
        <Typography tag='h6' variant='h7'>
          Фиксация выполненных работ
        </Typography>
        <Typography tag='h5' variant='h7' className={cn(getTaskStatusColor(data.taskStatus))}>
          {getTaskStatusText(data.taskStatus!)}
        </Typography>
      </div> */}
      <Typography tag='p' variant='sub3' className='my-1'>
        {contractor.email}
      </Typography>
      <Typography tag='p' variant='sub3'>
        {contractor.contractorFullName}
      </Typography>
    </div>
  </div>
);

export default ContractorCard;
