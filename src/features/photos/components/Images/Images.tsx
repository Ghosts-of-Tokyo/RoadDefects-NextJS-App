import { UploadIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Typography
} from '@/components/ui';

import { useFixationImages } from './(hooks)/useFixationImages';

interface DefectFixationImagesProps {
  taskId: string;
  fixationId: string;
  onAdded: () => void;
}

export const FixationImages = ({ taskId, fixationId, onAdded }: DefectFixationImagesProps) => {
  const { state, form, functions } = useFixationImages({
    taskId,
    fixationId,
    onAdded
  });

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='w-full'>
        <fieldset disabled={state.isLoading} className='flex w-full flex-col items-end'>
          <div className='smx:flex-col mb-7 flex w-full justify-center gap-5'>
            <FormField
              control={form.control}
              name='file'
              render={() => {
                const fileFieldValue = form.getValues('file');
                return (
                  <FormItem className='flex items-center justify-center gap-2'>
                    <FormControl>
                      <div className='flex flex-col items-center justify-center gap-3'>
                        {fileFieldValue && (
                          <Image
                            className='rounded-lg'
                            width={200}
                            height={200}
                            src={URL.createObjectURL(fileFieldValue)}
                            alt='photo'
                          />
                        )}

                        <input
                          type='file'
                          onChange={functions.onFileChange}
                          className='hidden'
                          accept='image/*'
                          ref={state.fileInputRef}
                          id='file-upload'
                        />

                        {!form.getValues('file') && (
                          <div
                            className='size-48'
                            onClick={() =>
                              state.fileInputRef.current && state.fileInputRef.current.click()
                            }
                            role='button'
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                if (state.fileInputRef.current) {
                                  state.fileInputRef.current.click();
                                }
                              }
                            }}
                            aria-labelledby='file-upload'
                          >
                            <div className='relative flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed hover:bg-secondary/20'>
                              <div className='rounded-full bg-secondary p-2'>
                                <div className='rounded-full bg-input p-2'>
                                  <UploadIcon className='h-4 w-4 text-foreground' />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {form.getValues('file') && (
                          <Button
                            variant='ghost'
                            onClick={() =>
                              form.setValue('file', undefined, { shouldValidate: false })
                            }
                            type='button'
                          >
                            <Typography variant='body3' tag='p' className='flex-1'>
                              Удалить фото
                            </Typography>
                          </Button>
                        )}
                      </div>
                    </FormControl>
                    <div>
                      <FormMessage>
                        {form.formState?.errors?.file && (
                          <Typography tag='p' variant='sub3'>
                            {form.formState.errors.file.message}
                          </Typography>
                        )}
                      </FormMessage>
                    </div>
                  </FormItem>
                );
              }}
            />
          </div>
          <Button type='submit' size='lg' className='w-full' loading={state.isLoading}>
            Сохранить
          </Button>
        </fieldset>
      </form>
    </Form>
  );
};
