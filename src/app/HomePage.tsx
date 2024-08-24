'use client'
import { Button } from '@/components/ui/button';
import Line from '@/components/ui/shared/Line'
import React, { useEffect, useRef } from 'react'
import { Stars } from 'lucide-react';
import { allWidgetsPropertise } from '@/lib/data';
import AOS from "aos";
import "aos/dist/aos.css"; 
const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
   <section className='px-5 lg:px-10 max-md:pt-5'>
   <Hero/>
   <Market/>
   <WhatWeOffer/>
   <Reviews/>
   <Ratings/>
   <NewToCrypto/>
   </section>
  );
}


const Hero = () => {
  return (
    <section className='Hero relative text-white flex w-full justify-center items-center min-h-fit 2xl:max-h-[700px]  md:h-[90vh]'>
      <main className=' flex w-full justify-between md:h-[70%]  max-md:flex-col md:max-h-[500px]  gap-y-5 '>
        <div className='flex-1 flex gap-5  justify-center items-center  p-4'>
          <div className='text_cont max-w-[700px] space-y-7'>
            <p className=' font-light text-base md:text-xs lg:text-base  ' >
              Topline Trading
              <Line />
            </p>
            <h1 className=' text-4xl lg:text-4xl xl:text-5xl font-light'>
              Your Ultimate Financial Markets Hub
            </h1>
            <p className=' text-slate-400 text-base md:text-xs lg:text-base '>
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
        <div className='flex-1 flex justify-start  items-center '>
          <div className='image h-full w-full max-w-[700px] rounded-xl max-h-[700px] min-h-[500px] bg-gray-800'  data-aos='zoom-in' data-aos-offset='0'></div>
        </div>
      </main>
    </section>
  );
};

const Market = () => {
  interface widgetProps{
    symbol:string,
    width:string,
    height:string,
    locale:string,
    dateRange:string,
    colorTheme:string,
    isTransparent: Boolean,
    autosize: Boolean,
    largeChartUrl?: string,
  }

interface boxProps{
  widgetDetails: widgetProps
}
  const Box: React.FC<boxProps> = ( {widgetDetails }) => {
    const TradingViewWidget: React.FC = () => {
      const containerRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        if (
          containerRef.current &&
          containerRef.current.children.length === 0 && widgetDetails
        ) {
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
          script.async = true;
          script.innerHTML = JSON.stringify(widgetDetails)

          containerRef.current.appendChild(script);
        }
      }, []);

      return (
        <div className='tradingview-widget-container'>
          <div
            className='tradingview-widget-container__widget'
            ref={containerRef}
          ></div>
        </div>
      );
    };

    return (
      <div className='box backdrop-blur-3xl max-h-[187px] bg-[#aa8fc010] bg-opacity-10 shadow shadow-[#72336c] rounded-xl p-5 min-w-64 md:w-72 lg:w-64 2xl:w-80 min-h-[220px]'  >
        <TradingViewWidget />
      </div>
    );
  };
  return (
    <section className='Market max-md:pt-10 h-fit '>
      <h2 className='text-slate-300 font-medium text-2xl my-5 ml-5'>
        Market Trend
      </h2>
      <div className='trend_contaoner flex flex-wrap justify-evenly gap-5'>
        {allWidgetsPropertise.map((props:widgetProps ,index)=> <Box key={index} widgetDetails={props} />)}
      </div>
    </section>
  );
};

const WhatWeOffer = () => {
  const LongBox = () => {
    return (
      <div className='LongBpx rounded overflow-hidden text-white w-[19rem] shadow-xl max-h-[500px] shadow-[#382047]'  >
        <div className='w-[19rem] h-56 bg-white'></div>
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
    <section className='What_We_offer text-slate-300 my-10 mt-20'>
      <h3 className=' text-3xl flex-col'>
        What We Offer
        <Line />
      </h3>
      <p className='my-5 font-light text-base '>
        Get access to exclusive trading insights, webinars and mentorship from
        our experienced trader
      </p>
      <div className='Wrapper flex max-md:flex-wrap gap-5 justify-evenly items-center grid-flow-col'>
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
    <section className='  pt-10 pb-20 border-b border-b-slate-300 '>
      <div className='Reviewscontainer flex flex-wrap gap-10 justify-center items-center'  >
        <div className='h-60 w-60 rounded-full bg-white'></div>
        <div className='txt max-w-[700px] text-white space-y-5'>
          <p className=' font-bold text-xl'>
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
const Ratings = () => {
  const Rating = () => {
    return (
      <div className='rating w-80 text-center py-5 space-y-3'  >
        <h4 className='font-bold text-3xl'>200+</h4>
        <p className='font-light text-sm'>
          Active members engage daily, sharing knowledge and collaborating on
          trading strategies to stay ahead in the markets.
        </p>
      </div>
    );
  };
  return (
    <section className='text-white '>
      <div className='flex justify-evenly items-center'>
      <Rating/>
      <Rating/>
      <Rating/>
      </div>
    </section>
  );
};
const NewToCrypto=()=>{
  return (
    <section className='text-white gap-y-10 my-14 mx-5 border-[0.07rem] px-10 py-2 flex justify-between flex-wrap items-center border-slate-500 rounded-xl'  >
      <div className='space-y-3'>
        <h6 className='text-xl font-medium'>New to Cryptocurrency ?</h6>
        <p className='max-w-[350px] text-sm font-light text-slate-300'>
          {"We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it."}
        </p>
      </div>
      <Button size="lg">
        Learn & Explore Now
      </Button>
    </section>
  );
}
export default HomePage