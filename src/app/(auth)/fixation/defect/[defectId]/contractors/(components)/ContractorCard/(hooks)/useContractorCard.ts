import { useState } from 'react';

export const useContractorCard = () => {
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
