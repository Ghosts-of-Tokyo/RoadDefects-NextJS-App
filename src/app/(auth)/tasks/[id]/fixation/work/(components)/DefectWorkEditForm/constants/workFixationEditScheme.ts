import * as z from 'zod';

export const workFixationEditScheme = z.object({
  workDone: z.string().min(1, { message: 'Это обязательное поле' })
});

export type WorkFixationEditScheme = z.infer<typeof workFixationEditScheme>;
