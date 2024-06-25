'use client';

import Image from 'next/image';
import { Button, ScrollArea, ScrollBar } from '@/components/ui';
import { baseurl } from '@/utils/constants/baseUrl';
import { Trash2Icon } from 'lucide-react';
import { PhotoInfoDTO } from '@generated/api';
import { ImagesDialog } from './components/ImagesDialog/ImagesDialog';
import { useQueryClient } from '@tanstack/react-query';

interface IPhotos {
<<<<<<< HEAD
    taskId: string;
    fixationId: string;
    photos: PhotoInfoDTO[];
    disable: boolean;
    onAddClick: () => void;
    onEditCloselick: () => void;
    imageDialogOpen: boolean;
    isFixationDefectTask: boolean;
}

const Photos : FC<IPhotos> = 
({
    taskId,
    fixationId,
    photos,
    disable,
    onAddClick,
    onEditCloselick,
    imageDialogOpen,
    isFixationDefectTask
}) => {

  const queryClient = useQueryClient();

  const onAdded = () => {
    queryClient.invalidateQueries({
      queryKey: [isFixationDefectTask ? 'getFixationDefectTask' : 'getFixationWorkTask', taskId]
    });
  }

=======
  taskId: string;
  fixationId: string;
  photos: PhotoInfoDTO[];
  disable: boolean;
  onAddClick: () => void;
  onEditCloselick: () => void;
  imageDialogOpen: boolean;
}

const Photos = ({
  taskId,
  fixationId,
  photos,
  disable,
  onAddClick,
  onEditCloselick,
  imageDialogOpen
}: IPhotos) => {
>>>>>>> e2d69ed1d2e3dc3625003ff9ab22bc2edf1ebd91
  return (
    <>
      <div>
        <div className='my-2'>
          <ScrollArea className='w-full space-y-1 whitespace-nowrap'>
            <div className='flex gap-2'>
              {photos.map((photo, index) => (
                <div key={index} className='relative h-[200px] w-[200px]'>
                  <Image
                    className='z-0 rounded-lg object-cover'
                    layout='fill'
                    src={`${baseurl}/${photo.pathName}`}
                    alt='photo'
                  />
                  {}
                  {!disable && (
                    <div className='absolute right-2 top-2 z-50 rounded-full bg-slate-400'>
                      <Trash2Icon className='m-2 stroke-white' />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <ScrollBar orientation='horizontal' />
          </ScrollArea>
        </div>
      </div>

      {!disable && (
        <Button onClick={onAddClick} size='sm' className='rounded-full px-[10px] py-2'>
          Добавить фото
        </Button>
      )}

<<<<<<< HEAD
        <ImagesDialog 
            taskId={taskId}
            fixationId={fixationId}
            open = {imageDialogOpen}
            onOpenChange={onEditCloselick}
            onAdded={onAdded}
        />
=======
      <ImagesDialog
        taskId={taskId}
        fixationId={fixationId}
        open={imageDialogOpen}
        onOpenChange={onEditCloselick}
      />
>>>>>>> e2d69ed1d2e3dc3625003ff9ab22bc2edf1ebd91
    </>
  );
};

export default Photos;

