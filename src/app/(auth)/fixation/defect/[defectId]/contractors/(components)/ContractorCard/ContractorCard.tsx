'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import type { ContractorDTO } from '@generated/api';

import { Typography } from '@/components/ui';

import { ContractorDialog } from '../ContractorDialog/ContractorDialog';

import { useContractorCard } from './(hooks)/useContractorCard';

interface ContractorCardProps {
  contractor: ContractorDTO;
}

const ContractorCard = ({ contractor }: ContractorCardProps) => {
  const { state, functions } = useContractorCard();

  return (
    <div className='my-3 border-b-2'>
      <Typography tag='h5' variant='h5' className='mb-2'>
        {contractor.organizationName}
      </Typography>
      <div onClick={functions.onContractorClick}>
        <Typography tag='p' variant='sub3' className='my-1'>
          {contractor.email}
        </Typography>

        <Typography tag='p' variant='sub3'>
          {contractor.contractorFullName}
        </Typography>
      </div>

      <ContractorDialog
        open={state.contractorDialogOpen}
        onOpenChange={functions.onContractorCloseClick}
        contractor={contractor}
      />
    </div>
  );
};

export default ContractorCard;
