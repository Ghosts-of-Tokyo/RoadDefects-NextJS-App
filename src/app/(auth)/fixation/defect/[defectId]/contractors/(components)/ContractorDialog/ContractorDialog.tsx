'use client';

import React from 'react';
import type { ContractorDTO } from '@generated/api';

import { Dialog, DialogContent, DialogHeader, DialogTitle, Typography } from '@/components/ui';

import { ContractorAssignForm } from '../ContractorAssignForm/ContractorAssignForm';

interface ContractorDialogProps extends React.ComponentProps<typeof Dialog> {
  contractor: ContractorDTO;
}

export const ContractorDialog = ({ contractor, ...props }: ContractorDialogProps) => (
  <Dialog {...props}>
    <DialogContent className='z-[100] flex h-screen w-full flex-col sm:rounded-none md:h-fit md:max-h-[90%] md:w-11/12 md:max-w-[713px] md:rounded-lg'>
      <DialogHeader>
        <DialogTitle>
          <Typography variant='h4' tag='h4'>
            Подрядчик
          </Typography>
        </DialogTitle>
      </DialogHeader>
      <ContractorAssignForm contractorId={contractor.id} />
    </DialogContent>
  </Dialog>
);
