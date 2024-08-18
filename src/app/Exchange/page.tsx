/**
 * Functional component representing the Exchange section of the website.
 * Displays information about cryptocurrency exchange rates, reserves, and recent exchanges.
 * Allows users to discover more about the platform and sign up for services.
 * @returns JSX element containing the Exchange section content.
 */
import React from "react";
import type { Metadata } from "next";
import Line from "@/components/ui/shared/Line";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
  title: "TopLine Exchange",
  description: "TopLine Trading",
};
const ExchangePage = () => {
  return (
    <section className=' text-white'>
      <Hero />
      <div className='white_bg text-zinc-900 my-10 h-52 bg-white flex flex-col justify-center px-5 md:px-10 gap-y-3'>
        <h2 className=' text-3xl flex-col'>
          Our Exchange Process
          <Line />
        </h2>
        <p>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </p>
      </div>
    </section>
  );
};
const Hero = () => {
  const text =
    "Our platform offers a seamless Crypto-to-Cash Exchange Service designed to provide you with a quick and secure way to convert your cryptocurrencies into fiat money. Whether you're looking to cash out your profits or convert your digital assets into usable currency, our service ensures a smooth and transparent process. With our user-friendly interface and expert support, you'll have access to your funds in no time.";
  return (
    <section className='px-5 lg:px-10 relative text-white flex w-full justify-center items-center min-h-fit 2xl:max-h-[700px]  h-[90vh]'>
      <main className=' flex w-full justify-between h-[70%]  max-md:flex-col max-h-[500px]  '>
        <div className='flex-1 flex gap-5 justify-between  items-start  p-4'>
          <div className='text_cont max-w-[600px] md:max-w-[400px] 2xl:max-w-[700px] space-y-7'>
            <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-light'>
            Exchange Service
            </h1>
            <p className=' text-slate-400 text-base md:text-xs lg:text-base 2xl:text-lg '>
              { text }
            </p>
            <Button
              className='bg-foreground text-slate-100 font-light'
              size='lg'
            >
              Join Us Today
            </Button>
          </div>
        </div>
        <div className='flex-1 flex justify-start  items-center '>
          <div className='image h-full w-full max-w-[700px] rounded-xl max-h-[700px]  bg-gray-800'></div>
        </div>
      </main>
    </section>
  );
};
export default ExchangePage;
