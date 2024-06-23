import * as z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const defectFixationImageScheme = z.object({
  file: z
    .custom<File>((file) => file instanceof File)
    .optional()
    .refine((file) => !file || (file instanceof File && file.size <= MAX_FILE_SIZE), {
      message: 'Вы превысили размер загружаемого файла в 5МБ'
    })
    .refine(
      (file) => {
        if (!file) return true;
        return ACCEPTED_IMAGE_TYPES.includes(file?.type);
      },
      { message: 'Неправильный формат фото, доступны: jpeg, jpg, png, webp ' }
    )
});

export type DefectFixationImageScheme = z.infer<typeof defectFixationImageScheme>;
