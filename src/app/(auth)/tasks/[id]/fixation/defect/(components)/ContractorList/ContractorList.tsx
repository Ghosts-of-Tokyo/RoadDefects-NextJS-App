import ContractorCard from '../ContractorCard/ContractorCard';
import { useContractorsList } from './(hooks)/useContractorsList';

interface ContractorsListProps {
  fixationId: string;
  onAdded: () => void;
}

export const ContractorsList = ({fixationId, onAdded}: ContractorsListProps) => {
  const { state, functions } = useContractorsList();

  return (
    <div>
      {state.data?.data.contractors?.map((contractor) => (
        <ContractorCard contractor={contractor} />
      ))}
    </div>
  );
};
