'use client';

import { Typography } from '@/components/ui';

import { ContractorDTO } from '@generated/api';
import { useContractorCard } from './(hooks)/useContractorCard';
import { ContractorDialog } from '../ContractorDialog/ContractorDialog';

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
