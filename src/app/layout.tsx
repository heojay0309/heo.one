import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavSection/Nav";
import { Analytics } from "@vercel/analytics/next";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Add other weights as needed
});
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
        className={`${urbanist.className} relative h-[100svh] min-w-[100vw] scroll-smooth`}
      >
        <div className="mx-auto w-full max-w-[1440px] ">
          <Navbar />
          {children}
          <Navbar />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
