"use client";
import { Button } from "@/components/ui/button";
import Line from "@/components/ui/shared/Line";
import React, { useEffect, useRef } from "react";
import { Stars } from "lucide-react";
import { allWidgetsPropertise } from "@/lib/data";
import homeHero from '@/../public/assets/homeHero.svg'
import cardOne from '@/../public/assets/Home/CardOne.svg'
import ReviewImage from '@/../public/assets/Home/review.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <section className='px-5 lg:px-10 max-md:pt-5 space-y-14 pb-10'>
      <Hero />
      <Market />
      <WhatWeOffer />
      <Reviews />
      <NewToCrypto />
    </section>
  );
};

const Hero = () => {
  return (
    <section className='Hero relative text-white flex w-full justify-center items-center min-h-fit 2xl:max-h-[700px]  md:h-[90vh]'>
      <main className=' flex w-full justify-between md:h-[70%]  max-md:flex-col md:max-h-[500px]  gap-y-5 '>
        <div className='flex-1 flex gap-5  justify-center  p-4'>
          <div className='text_cont max-w-[700px] space-y-7 max-md:mt-10 '>
            <p className=' font-light text-base md:text-xs lg:text-base  '>
              Topline Trading
              <Line />
            </p>
            <h1 className=' text-4xl md:text-5xl font-medium leading-tight'>
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

            <Image
            src={homeHero}
            alt="homeHero"
            className=' h-full w-full max-w-[700px] object-fill rounded-xl max-h-[700px] min-h-[466px] overflow-hidden '
            />
        </div>
      </main>
    </section>
  );
};
const Market = () => {
  interface widgetProps {
    symbol: string;
    width: string;
    height: string;
    locale: string;
    dateRange: string;
    colorTheme: string;
    isTransparent: Boolean;
    autosize: Boolean;
    largeChartUrl?: string;
  }

  interface boxProps {
    widgetDetails: widgetProps;
  }
  const Box: React.FC<boxProps> = ({ widgetDetails }) => {
    const TradingViewWidget: React.FC = () => {
      const containerRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        if (
          containerRef.current &&
          containerRef.current.children.length === 0 &&
          widgetDetails
        ) {
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
          script.async = true;
          script.innerHTML = JSON.stringify(widgetDetails);

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
      <div className='box backdrop-blur-3xl max-h-[157px] w-[360px] bg-[#aa8fc010] bg-opacity-10 shadow shadow-[#72336c] rounded-xl p-5 min-w-64 md:w-72 lg:w-64 2xl:w-80 min-h-[220px]'>
        <TradingViewWidget />
      </div>
    );
  };
  return (
    <section className='Market max-md:pt-10 h-fit  text-slate-300 my-10 mt-20'>
       <h3 className=' text-3xl flex-col font-medium pb-10'>
        Market Trend
        <Line />
      </h3>
      <div className='trend_contaoner flex flex-wrap justify-evenly gap-5'>
        {allWidgetsPropertise.map((props: widgetProps, index) => (
          <Box key={index} widgetDetails={props} />
        ))}
      </div>
    </section>
  );
};
const WhatWeOffer = () => {
  const LongBox = () => {
    return (
      <div className='LongBpx rounded-lg overflow-hidden text-white w-full md:max-w-[19rem] shadow-xl max-h-[500px] shadow-[#382047]'>
        <div className='w-full overflow-hidden relative md:max-w-[19rem] h-56 '>
          <Image
          src={cardOne}
          alt="LT"
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-fill"/>
        </div>
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
    <section className='What_We_offer text-slate-300 my-10 py-20'>
      <h3 className=' text-3xl flex-col font-medium '>
        What We Offer
        <Line />
      </h3>
      <p className='my-5 mb-10 font-light text-base '>
        Get access to exclusive trading insights, webinars and mentorship from
        our experienced trader
      </p>
      <div className='Wrapper flex max-md:flex-wrap gap-5 gap-y-20 md:gap-y-10 justify-evenly items-center grid-flow-col'>
        <LongBox />
        <LongBox />
        <LongBox />
        <LongBox />
      </div>
    </section>
  );
};
const Reviews = () => {
  return (
    <section className=' py-5 '>
      <div className='Reviewscontainer my-5 flex flex-wrap p-5 mb-20 md:p-10 bg-opacity-5 gap-5 md:gap-10 bg-[#aa8fc00b] justify-center items-center '>
        <div className='relative h-44 w-44 md:h-52 md:w-52 rounded-full overflow-hidden bg-white'>
        <Image
          src={ReviewImage}
          alt="ReviewImage"
            className=" object-fill rounded-full w-full h-full"/>
        </div>
        <div className='txt max-w-[700px] text-white space-y-5'>
          <p className=''></p>
          <p className=' font-bold md:text-lg'>
            “Joining this platform has transformed my trading journey! The
            mentorship, real-time signals, and supportive community have boosted
            my confidence and profitability. Highly recommend for anyone serious
            about financial markets! ”
          </p>

          <p className='text-sm'>
              <Stars className=' text-orange-500' />{" "}
            Jane doe{" "}
            <span className='mx-5 text-xs text-slate-300 font-light'>
              Satisfied Customer
            </span>
          
          </p>
        </div>
        
      </div>
      <Ratings />
      
    </section>
  );
};
const Ratings = () => {
  const Rating = () => {
    return (
      <div className='rating w-80 text-center  space-y-3'>
        <h4 className='font-bold text-3xl'>200+</h4>
        <p className='font-light text-sm'>
          Active members engage daily, sharing knowledge and collaborating on
          trading strategies to stay ahead in the markets.
        </p>
      </div>
    );
  };
  return (
    <section className='text-white pt-5  border-t-slate-300 border-t'>
      <div className='flex justify-evenly items-center'>
        <Rating />
        <Rating />
        <Rating />
      </div>
    </section>
  );
};
const NewToCrypto = () => {
  return (
    <section className='text-white gap-y-10  m-5 my-7 border-[0.07rem] px-5 md:px-11 py-5 flex justify-between flex-wrap items-center border-slate-500 border-opacity-35 rounded-xl'>
      <div className='space-y-3'>
        <h6 className='text-xl font-medium'>New to Cryptocurrency ?</h6>
        <p className='max-w-[350px] text-sm font-light text-slate-300'>
          {
            "We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it."
          }
        </p>
      </div>
      <Button size='lg'>Learn & Explore Now</Button>
    </section>
  );
};
export default HomePage;
