'use client';

import React from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Typography
} from '@/components/ui';
import { DefectFixationImages } from '../DefectFixationImages/DefectFixationImages';
import { FixationWorkTaskDTO } from '@generated/api';

interface DefectFixationImagesDialogProps extends React.ComponentProps<typeof Dialog> {
  defectTask: FixationWorkTaskDTO;
}

export const DefectFixationImagesDialog = ({
  defectTask,
  ...props
}: DefectFixationImagesDialogProps) => (
  <Dialog {...props}>
    <DialogContent className='flex h-screen w-full flex-col sm:rounded-none md:h-fit md:max-h-[90%] md:w-11/12 md:max-w-[713px] md:rounded-lg'>
      <DialogHeader>
        <DialogTitle>
          <Typography variant='h4' tag='h4'>
            Добавление фото
          </Typography>
        </DialogTitle>
      </DialogHeader>
      <DefectFixationImages defectTask={defectTask} />
    </DialogContent>
  </Dialog>
);
