'use client';

import { useParams } from 'next/navigation';
import { ContractorsList } from './(components)/ContractorList/ContractorList';
import { Typography } from '@/components/ui';

export const FixationDefectContractorsPage = () => (
  <div className='p-5'>
    <Typography tag='h5' variant='h5' className='mb-2 text-center'>
      Список подрядчиков
    </Typography>
    <ContractorsList />
  </div>
);

export default FixationDefectContractorsPage;
