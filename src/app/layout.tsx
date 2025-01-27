"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  manrope,
  poppins,
  freizeit_trial_thin,
  freizeit_trial_light,
  freizeit_trial_extralight,
  freizeit_trial_regular,
  freizeit_trial_medium,
  freizeit_trial_bold,
  freizeit_trial_extrabold,
} from '@/Assets/fonts/index'
import NavigateTop from "@/components/NavigateTop";
import { Providers } from "@/components/Provider";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  const isPath = pathname.startsWith("/User")
  return (
    <html lang="en">
      <body className={`relative ${poppins.variable} ${manrope.variable} ${inter.className}`}>
        <main className={`max-w-screen-2xl min-h-fit ${!isPath && "pt-[4.5rem] md:pt-[6rem]" } relative  mx-auto font-manrope`}>
          <Providers>
      {!isPath && <Navbar/>}
        {children}
       { !isPath && <Footer/>       }
          </Providers>
         
       
        </main>
        <NavigateTop/>
        </body>
    </html>
  );
}
