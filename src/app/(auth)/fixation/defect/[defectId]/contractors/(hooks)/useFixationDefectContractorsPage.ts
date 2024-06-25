import { useState } from 'react';

export const useFixationDefectContractorsPage = () => {
  const [contractorDialogOpen, setContactorDialogOpen] = useState(false);

  const onContractorClick = () => setContactorDialogOpen(true);
  const onContractorCloseClick = () => setContactorDialogOpen(false);

  return {
    state: {
      contractorDialogOpen
    },
    functions: {
      onContractorClick,
      onContractorCloseClick
    }
  };
};
