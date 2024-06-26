import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';

import { usePostAssignmentMutation } from '@/shared/api/hooks';

import type { ContractorAssignSchema } from '../(constants)/ContractorAssignScheme';
import { contractorAssignSchema } from '../(constants)/ContractorAssignScheme';

interface useContractorAssignFormParams {
  contractorId: string;
}

export const useContractorAssignForm = ({ contractorId }: useContractorAssignFormParams) => {
  const params = useParams<{ defectId: string }>();

  const contractorAssignForm = useForm<ContractorAssignSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(contractorAssignSchema)
  });

  const postAssignmentMutation = usePostAssignmentMutation();

  const onSubmit = contractorAssignForm.handleSubmit(async (values) => {
    const { deadlineDate } = values;

    await postAssignmentMutation.mutateAsync({
      params: {
        contractorId,
        fixationDefectId: params.defectId,
        deadlineDateOnly: deadlineDate.toISOString().split('T')[0]
      }
    });
  });

  return {
    form: contractorAssignForm,
    state: {
      isLoading: postAssignmentMutation.isPending
    },
    functions: {
      onSubmit
    }
  };
};
