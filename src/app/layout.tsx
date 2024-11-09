import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavSection/Nav";
import { Analytics } from "@vercel/analytics/next";
import { Urbanist } from "next/font/google";
import SideMenu from "@/components/NavSection/SideMenu";
import Footer from "@/components/NavSection/Footer";

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
      <link rel="icon" href="/favicon.ico" />
      <body
        className={`${urbanist.className} min-h-[100svh] min-w-[100vw] scroll-smooth text-white`}
      >
        <div className="relative mx-auto h-full w-full max-w-[1440px] px-[16px] py-[16px] tablet:px-[64px] tablet:py-[32px]">
          <Navbar />
          {/* <SideMenu /> */}
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
