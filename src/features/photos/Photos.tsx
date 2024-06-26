'use client';

import type { PhotoInfoDTO } from '@generated/api';
import { useQueryClient } from '@tanstack/react-query';
import { Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

import { Button, ScrollArea, ScrollBar } from '@/components/ui';
import { useDeleteFixationPhotoMutation } from '@/shared/api/hooks';
import { baseurl } from '@/utils/constants/baseUrl';

import { ImagesDialog } from './components/ImagesDialog/ImagesDialog';

interface IPhotos {
  taskId: string;
  fixationId: string;
  photos: PhotoInfoDTO[];
  disable: boolean;
  onAddClick: () => void;
  onEditCloselick: () => void;
  imageDialogOpen: boolean;
  isFixationDefectTask: boolean;
}

const Photos = ({
  taskId,
  fixationId,
  photos,
  disable,
  onAddClick,
  onEditCloselick,
  imageDialogOpen,
  isFixationDefectTask
}: IPhotos) => {
  const queryClient = useQueryClient();

  const deleteFixationPhotoMutation = useDeleteFixationPhotoMutation();

  const onFixationPhotoDelete = async (fixationId: string, photoId: string) => {
    await deleteFixationPhotoMutation.mutateAsync(
      { params: { fixationId, photoId } },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [
              isFixationDefectTask ? 'getFixationDefectTask' : 'getFixationWorkTask',
              taskId
            ]
          });
          toast.success('Фото успешно удалено');
        }
      }
    );
  };

  const onAdded = () => {
    queryClient.invalidateQueries({
      queryKey: [isFixationDefectTask ? 'getFixationDefectTask' : 'getFixationWorkTask', taskId]
    });
  };

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
                  {!disable && (
                    <Button
                      type='button'
                      variant='outline'
                      size='icon'
                      className='z-50 absolute right-2 top-2 rounded-full bg-slate-400 hover:bg-slate-400'
                      onClick={() => onFixationPhotoDelete(fixationId, photo.id)}
                    >
                      <Trash2Icon className='m-2 stroke-white' />
                    </Button>
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

      <ImagesDialog
        taskId={taskId}
        fixationId={fixationId}
        open={imageDialogOpen}
        onOpenChange={onEditCloselick}
        onAdded={onAdded}
      />
    </>
  );
};

export default Photos;
