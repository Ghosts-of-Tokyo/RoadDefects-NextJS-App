import * as z from 'zod';

export const defectFixationEditScheme = z.object({
  description: z.string().min(1, { message: 'Это обязательное поле' }),
  address: z.string().min(1, { message: 'Это обязательное поле' })
});

export type DefectFixationEditScheme = z.infer<typeof defectFixationEditScheme>;
