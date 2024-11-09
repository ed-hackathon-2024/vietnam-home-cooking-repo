import { Fira_Code as FontMono, Inter } from 'next/font/google';

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
