import { Button } from '@/components/ui/button';
import Line from '@/components/ui/shared/Line'
import React from 'react'
import BtcIcon from "@/../public/Icons/BtcIcon.svg"
import ChartIcon from "@/../public/Icons/ChatsIcon.svg"
import Image from 'next/image';
import { ArrowUp, Star, StarIcon, Stars } from 'lucide-react';
const HomePage = () => {
  return (
   <>
   <Hero/>
   <Market/>
   <WhatWeOffer/>
   <Reviews/>
   </>
  );
}


const Hero = () => {
  return (
    <section className='Hero relative text-white flex w-full justify-center items-center min-h-fit 2xl:max-h-[700px]  h-[100vh]'>
      <main className=' flex w-full justify-between h-[85%]  max-md:flex-col '>
        <div className='flex-1 flex gap-5  justify-center items-center  p-4'>
          <div className='text_cont max-w-[500px] space-y-7'>
            <p className=' font-light text-sm  '>
              Topline Trading
              <Line />
            </p>
            <h1 className=' text-3xl md:text-4xl xl:text-5xl font-light'>
              Your Ultimate Financial Markets Hub
            </h1>
            <p className=' text-slate-400 text-base '>
              {
                " Unlock your potential in the world of finance with our all-in-one educational platform. Whether you're a beginner or an experienced trader, we provide the tools and support you need to succeed."
              }
            </p>
            <Button
              className='bg-foreground text-slate-100 font-light'
              size='lg'
            >
              Join Us Today
            </Button>
          </div>
        </div>
        <div className='flex-1 flex justify-center   items-center '>
          <div className='image h-full w-full ma-h-[700px] rounded-xl  bg-gray-800'></div>
        </div>
      </main>
    </section>
  );
};

const Market = () => {
  const Box = () => {
    return (
      <div className='box backdrop-blur-3xl bg-[#aa8fc010] bg-opacity-10 shadow shadow-[#72336c] rounded-xl p-5'>
        <div className='top flex pb-5 border-b justify-between items-center gap-7 border-b-slate-400 text-slate-300'>
          <Image src={BtcIcon} alt='btc' width={43} height={43} />
          <p>BTC</p>

          <p className='flex justify-between items-center gap-3'>
            <span className=' text-xs p-1 rounded-md font-bold text-center bg-slate-300 text-black shadow-sm'>
              BITCOIN
            </span>
            <ArrowUp className='bg-slate-700 bg-opacity-55 rotate-45 w-10 h-10 p-2 rounded-full' />
          </p>
        </div>
        <div className='bottom flex justify-between items-center pt-5'>
          <p className='text-xl font-bold text-slate-300 flex flex-col  '>
            $56,623.54
            <span className=' font-normal text-lg mt-4'>1.41%</span>
          </p>

          <Image src={ChartIcon} alt='btc' />
        </div>
      </div>
    );
  };
  return (
    <section className='Market py-10 h-fit '>
      <h2 className='text-slate-300 font-medium text-2xl my-5 ml-5'>
        Market Trend
      </h2>
      <div className='trend_contaoner flex flex-wrap justify-evenly gap-y-5'>
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </section>
  );
};

const WhatWeOffer = () => {
  const LongBox = () => {
    return (
      <div className='LongBpx rounded overflow-hidden text-white w-72 shadow-xl shadow-[#382047]'>
        <div className='w-72 h-56 bg-white'></div>
        <div className='text space-y-2 py-3 pl-2'>
          <p className='text-lg'>Personalised coaching</p>
          <p className='font-light text-slate-400 h-36'>
            Learn from experts with years of experience in financial markets.
            Get personalized guidance to sharpen your trading skills and
            strategies.
          </p>
          <p className='underline font-light'>Learn More</p>
        </div>
      </div>
    );
  };
  return (
    <section className='What_We_offer text-slate-300 my-20'>
      <h3 className=' text-3xl flex-col'>
        What We Offer
        <Line />
      </h3>
      <p className='my-5 font-light text-base '>
        Get access to exclusive trading insights, webinars and mentorship from
        our experienced trader
      </p>
      <div className='Wrapper flex flex-wrap gap-y-5 justify-evenly items-center'>
        <LongBox />
        <LongBox />
        <LongBox />
        <LongBox />
      </div>
    </section>
  );
};
const Reviews =()=>{
  return (
    <section className='  pt-20 pb-20 border-b border-b-slate-300 '>
      <div className='Reviewscontainer flex flex-wrap gap-10 justify-center items-center'>
        <div className='h-60 w-60 rounded-full bg-white'></div>
        <div className='txt max-w-[700px] text-white space-y-5'>
          <p className=' font-bold'>
            “Joining this platform has transformed my trading journey! The
            mentorship, real-time signals, and supportive community have boosted
            my confidence and profitability. Highly recommend for anyone serious
            about financial markets! ”
          </p>
          <p className=''>
          <Stars className=' text-orange-500'/>

          </p>
          <p className='text-sm'> Jane doe <span className='mx-5 text-xs text-slate-300 font-light'>Satisfied Customer</span></p>
        </div>
      </div>
    </section>
  );
}
export default HomePage