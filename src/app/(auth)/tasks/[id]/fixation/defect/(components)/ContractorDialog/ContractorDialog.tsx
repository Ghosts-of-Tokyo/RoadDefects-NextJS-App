'use client';

import React from 'react';

import { Dialog, DialogContent, DialogHeader, DialogTitle, Typography } from '@/components/ui';
import { ContractorsList } from '../ContractorList/ContractorList';

interface ContractorDialogDialogProps extends React.ComponentProps<typeof Dialog> {
  fixationId: string;
  onAdded: () => void;
}

export const ContractorDialog = ({
  fixationId,
  onAdded,
  ...props
}: ContractorDialogDialogProps) => (
  <Dialog {...props}>
    <DialogContent className='flex h-screen w-full flex-col sm:rounded-none md:h-fit md:max-h-[90%] md:w-11/12 md:max-w-[713px] md:rounded-lg'>
      <DialogHeader>
        <DialogTitle>
          <Typography variant='h4' tag='h4'>
            Список подрядчиков
          </Typography>
        </DialogTitle>
      </DialogHeader>
      <ContractorsList fixationId={fixationId} onAdded={onAdded} />
    </DialogContent>
  </Dialog>
);
