'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  name: string;
  isLoggedIn: boolean;
};

type UserContextType = {
  user: User;
  login: (name: string) => void;
  logout: () => void;
};

const defaultUser: User = {
  name: '',
  isLoggedIn: false,
};

const UserContext = createContext<UserContextType>({
  user: defaultUser,
  login: () => {},
  logout: () => {},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  const login = (name: string) => setUser({ name, isLoggedIn: true });
  const logout = () => setUser(defaultUser);

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

export const useAccount = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAccount must be used within a UserProvider');
  }
  return context;
};
