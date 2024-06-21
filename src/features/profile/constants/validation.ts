import { z } from 'zod';

export const validation = z.object({
  email: z.string().email('Неверный формат').min(1, { message: 'Ожидалось значение' }),
  fullname: z.string().min(1, { message: 'Ожидалось значение' })
});
