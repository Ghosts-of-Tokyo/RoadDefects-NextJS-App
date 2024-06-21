'use client';

import { useMemo, useState } from 'react';
import type { UserInfoDTO } from '@generated/api';

import { UserContext } from './utils/userContext';

export interface UserProviderProps {
  children: React.ReactNode;
  userDefault?: UserInfoDTO;
}

export const UserProvider = ({ children, userDefault }: UserProviderProps) => {
  const [user, setUser] = useState<UserInfoDTO | undefined>(userDefault);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
