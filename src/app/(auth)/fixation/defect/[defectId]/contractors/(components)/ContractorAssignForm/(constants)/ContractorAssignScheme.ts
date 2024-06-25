import { z } from 'zod';

export const contractorAssignSchema = z.object({
  deadlineDate: z.date()
});

export type ContractorAssignSchema = z.infer<typeof contractorAssignSchema>;
