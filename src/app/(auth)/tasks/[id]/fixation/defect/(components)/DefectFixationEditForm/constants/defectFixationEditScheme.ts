import * as z from 'zod';

export const defectFixationEditScheme = z.object({
  damagedCanvasSquareMeter: z.string().min(1, { message: 'Это обязательное поле' }),
  defectTypeId: z.string().min(1, { message: 'Это обязательное поле' })
});

export type DefectFixationEditScheme = z.infer<typeof defectFixationEditScheme>;
