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
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  text-white pb-[44px] relative min-h-[100svh] min-w-[100wh] h-[100svh] bg-[#F0F0F0]`}
      >
        <Navbar />
        <div className="flex-1 h-full w-full flex justify-center bg-black ">
          {children}
        </div>
        {modal}
      </body>
    </html>
  );
}
