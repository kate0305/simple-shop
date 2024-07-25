import { Suspense } from 'react';
import type { Metadata } from 'next';
import { NextUIProvider } from '@nextui-org/react';
import { Header } from '@/components/header';
import { inter } from '@/utils/fonts';
import Loading from './loading';
import './globals.css';

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
          <Suspense fallback={<Loading />}>
            <main className='container mx-auto px-4 py-8'>{children}</main>
          </Suspense>
        </NextUIProvider>
      </body>
    </html>
  );
}
