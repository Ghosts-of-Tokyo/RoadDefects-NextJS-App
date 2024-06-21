import { z } from 'zod';

export const validation = z.object({
  email: z.string().email('Неверный формат').min(1, { message: 'Ожидалось значение' }),
  password: z.string().min(1, { message: 'Ожидалось значение' })
});
