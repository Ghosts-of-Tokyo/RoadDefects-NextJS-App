'use client';

import React from 'react';
import type { ErrorResponse } from '@generated/api';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const router = useRouter();
  const [queryClient] = React.useState(
    new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
      queryCache: new QueryCache({
        onError: (cause) => {
          const error = (cause as AxiosError<ErrorResponse>).response;

          if (error?.status === 401) {
            router.replace('/login');
          }
          toast.error(`${error?.data.title}, ${error?.data.status}`);
        }
      }),
      mutationCache: new MutationCache({
        onError: (cause) => {
          const error = (cause as AxiosError<ErrorResponse>).response;

          if (error?.status === 401) {
            router.replace('/login');
          }

          toast.error(`${error?.data.title}, ${error?.data.status}`);
        }
      })
    })
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
