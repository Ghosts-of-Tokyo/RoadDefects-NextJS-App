'use client';

import { ContractorsList } from './(components)/ContractorList/ContractorList';
import { Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants/routes';
import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
// import { useParams } from 'next/navigation';

export const FixationDefectContractorsPage = () => {
  // const params = useParams<{ defectId: string }>();
  //fix back page
  return (
    <div className='p-5'>
      <Link href={ROUTES.TASKS.ROOT} className='absolute'>
        <ChevronLeftIcon className='size-8 rounded-md border' />
      </Link>
      <Typography tag='h5' variant='h5' className='mb-2 text-center'>
        Список подрядчиков
      </Typography>
      <ContractorsList />
    </div>
  );
};

export default FixationDefectContractorsPage;
