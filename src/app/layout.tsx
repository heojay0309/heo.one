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
      <body className={`${inter.className} bg-[#FDFDFD] text-[#000] relative`}>
        <Navbar />
        {children}
        {modal}
        {/* <div id="modal-root" /> */}
      </body>
    </html>
  );
}
