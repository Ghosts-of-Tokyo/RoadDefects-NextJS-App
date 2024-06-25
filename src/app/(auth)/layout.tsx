'use client';

import LoadingSpinner from '@/features/loadingSpiner/loadingSpinner';
import { useLayout } from './useLayout';

const AuthLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { state } = useLayout();

  if (state.isLoading) 
    return <LoadingSpinner />;

  return <>{children}</>;
};
export default AuthLayout;
