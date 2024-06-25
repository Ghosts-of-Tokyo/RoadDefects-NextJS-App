'use client';

import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Typography
} from '@/components/ui';

import { FixationImages } from '../Images/Images';


interface EditActivityDialogProps extends React.ComponentProps<typeof Dialog> {
  taskId: string;
  fixationId: string;
}

export const ImagesDialog = ({ taskId, fixationId, ...props }: EditActivityDialogProps) => (
  <Dialog {...props}>
    <DialogContent className='flex h-screen w-full flex-col sm:rounded-none md:h-fit md:max-h-[90%] md:w-11/12 md:max-w-[713px] md:rounded-lg'>
      <DialogHeader>
        <DialogTitle>
          <Typography variant='h4' tag='h4'>
            Добавление фото
          </Typography>
        </DialogTitle>
      </DialogHeader>
      <FixationImages taskId={taskId} fixationId={fixationId} />
    </DialogContent>
  </Dialog>
);
