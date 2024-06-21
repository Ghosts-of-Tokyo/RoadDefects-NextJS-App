'use client';

import { createContext } from 'react';
import type { UserInfoDTO } from '@generated/api';

interface UserContextProps {
  user?: UserInfoDTO;
  setUser: (user: UserInfoDTO) => void;
}

export const UserContext = createContext<UserContextProps>({ setUser: () => {} });
