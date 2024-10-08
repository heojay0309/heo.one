import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavSection/Nav";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Jay's Portfolio`,
  description: "Actively Looking for a Front-end Engineering Role",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative h-[100svh] min-w-[100vw] bg-black pb-[48px] text-white tablet:pb-[64px]`}
      >
        <Navbar />
        <div className="h-full w-full pb-[48px] tablet:pb-[32px]">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
