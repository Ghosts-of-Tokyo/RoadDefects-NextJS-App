'use client';

import { useLayout } from './useLayout';

const AuthLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { state } = useLayout();

  if (state.isLoading) return <div>Loading...</div>;

  return <>{children}</>;
};
export default AuthLayout;
