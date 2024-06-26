import ContractorCard from '../ContractorCard/ContractorCard';

import { useContractorsList } from './(hooks)/useContractorsList';

export const ContractorsList = () => {
  const { state } = useContractorsList();

  return (
    <div>
      {state.data?.data.contractors?.map((contractor) => (
        <ContractorCard contractor={contractor} />
      ))}
    </div>
  );
};
