import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import './globals.css';
import { Header } from '@/components/header';
import { inter } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'SLMax Shop',
  description: 'We are waiting for you in our shop ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextUIProvider>
          <Header />
          <main className='container mx-auto px-4 py-8'>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
