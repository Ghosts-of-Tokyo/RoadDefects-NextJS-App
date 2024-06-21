import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useGetProfileQuery } from '@/shared/api/hooks';
import { UserContext } from '@/shared/contexts';

export const useLayout = () => {
  const userContext = useContext(UserContext);
  const router = useRouter();
  const getProfileQuery = useGetProfileQuery();

  useEffect(() => {
    if (getProfileQuery.isError) router.push('/login');
    if (getProfileQuery.isSuccess) userContext.setUser(getProfileQuery.data?.data);
  }, [getProfileQuery.isError, getProfileQuery.isSuccess]);

  return { state: { isLoading: getProfileQuery.isPending } };
};
