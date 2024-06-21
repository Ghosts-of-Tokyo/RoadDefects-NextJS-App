import React from 'react';

import type { QueryProviderProps, UserProviderProps } from '@/shared/contexts';
import { QueryProvider, UserProvider } from '@/shared/contexts';

interface ProvidersProps {
  children: React.ReactNode;
  query?: Omit<QueryProviderProps, 'children'>;
  user?: Omit<UserProviderProps, 'children'>;
}

export const Providers = ({ children, query, user }: ProvidersProps) => (
  <QueryProvider {...query}>
    <UserProvider {...user}>{children}</UserProvider>
  </QueryProvider>
);
