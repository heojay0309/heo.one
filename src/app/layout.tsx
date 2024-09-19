import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/NavSection/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Jay's Portfolio`,
  description: 'Actively Looking for a Front-end Engineering Role',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-white relative pb-[64px] min-h-[100svh] min-w-[100wh] h-[100svh] bg-black`}
      >
        <Navbar />
        <div className="flex-1 h-full w-full laptop:p-[64px] laptop:pt-[32px] tablet:p-[32px] p-[16px]">
          {children}
        </div>
      </body>
    </html>
  );
}
