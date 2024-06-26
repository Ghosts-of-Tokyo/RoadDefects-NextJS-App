import ContractorCard from '../ContractorCard/ContractorCard';

import { useContractorsList } from './(hooks)/useContractorsList';

export const ContractorsList = () => {
  const { state, functions } = useContractorsList();

  return (
    <div>
      {state.data?.data.contractors?.map((contractor) => (
        <ContractorCard contractor={contractor} />
      ))}
    </div>
  );
};
