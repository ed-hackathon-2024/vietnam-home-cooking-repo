'use client';

import '@/styles/globals.css';
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { responsiveDarkTheme, responsiveLightTheme } from '@/theme/custom-theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <html lang='en'>
      <body>
        <ThemeProvider theme={darkMode ? responsiveDarkTheme : responsiveLightTheme}>
          <CssBaseline />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
