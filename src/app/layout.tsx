import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavSection/Nav";

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
        className={`${inter.className} relative h-[100svh] min-h-[100svh] min-w-[100vw] bg-black text-white`}
      >
        <Navbar />
        <div className="h-full w-full pb-[64px]">{children}</div>
      </body>
    </html>
  );
}
