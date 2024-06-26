import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/components/ui';
import { Providers } from '@/utils/Provider/Provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'Road defects',
  description: 'Приложение для мониторинга дорожных дефектов'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='en'>
    <Toaster duration={2000} />
    <body className={inter.className}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
