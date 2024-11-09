import React from 'react';
import { FinanceHelperNavbar } from '@/components/NavBar/navbar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <FinanceHelperNavbar />
      {children}
    </div>
  );
};

export default AppLayout;
