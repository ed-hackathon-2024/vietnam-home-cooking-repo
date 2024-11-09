import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import React from 'react';

import { UserProvider } from '@/components/UserContext/user-context';

import { siteConfig } from '@/config/site';
import { fontInter } from '@/config/fonts';
import { NextUIProvider } from '@nextui-org/system';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en' className={fontInter.variable}>
      <head>{/* Additional metadata or external resources here */}</head>
      <body className={clsx('min-h-screen bg-background font-sans antialiased')}>
        <NextUIProvider>
          <UserProvider>{children}</UserProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
