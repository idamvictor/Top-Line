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
  return (
    <html lang="en">
      <body className={`   pt-[4rem] ${poppins.variable} ${manrope.variable} ${inter.className}`}>
        <main className="max-w-[1620px]  mx-auto ">
           <Navbar/>
        {children}
        <Footer/>
        </main>
       
        </body>
    </html>
  );
}
