import React from 'react';
import FinanceHelperNavbar from '@/components/navbar/navbar';
import { Stack, Box } from '@mui/system';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <FinanceHelperNavbar />

      <Stack justifyContent='center' alignItems='center' display='flex'>
        {children}
      </Stack>
    </Box>
  );
};

export default AppLayout;
