"use client";
import React from "react";
import image from "../../../public/excHero.png";
import Image from "next/image";
import Reviews from "@/components/Reviews";
import Welcome from "@/components/Exchange/Welcome";
import Rates from "@/components/Exchange/Rates";
import Great_expirence from "@/components/Exchange/Great_expirence";
import Email from "@/components/Exchange/Email";
import LearnMore from "@/components/Exchange/LearnMore";
import BlogPost from "@/components/Exchange/BlogPost";
import Trades from "@/components/Exchange/Trades";
import AOS from "aos";
import "aos/dist/aos.css";
const Exchange = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
  <div className=' relative hero_wraapper bg-background justify-center items-center p-0 '>
        <div className='min-h-[60vh] flex  pt-10 text-white pb-3 px-10 justify-center items-center'>
          <div className=' text_btn md:block flex flex-col justify-between items-center w-50% '>
          <h1 data-aos='fade-up' className='Hero_Txt font-normal mb-5'>
              We provide easy solution to exchange your{" "}
              <span className=' Hero_Txt font-bold pl-1'>
                Cryptocurrency/ GiftCard for Cash
              </span>
            </h1>
            <p
              data-aos='fade-up'
              className='font-normal text-lg lg:text-xl mb-9'
            >
             Topline is a platform for trading your bitcoin and giftcard at the
             best rate, why not give us a trial.
            </p>
            <button
              data-aos='fade-up'
              dats-aos-offset='10'
              className=' text-xl lg:text-2xl flex md:justify-center items-center gap-4 HomeBtn  px-4 py-2 md:px-6 md:py-3 font-medium bg-white ExchangeBtn text-black rounded-full'
            >
              Get Started
            </button>
          </div>

          <div className='img_container hidden h-full md:flex justify-start items-center'>
            <Image
              src={image}
              alt='crypto'
              width={400}
              height={400}
              className='w-50% w-fit h-[90%] max-h-[25rem] min-w-[400px]'
            />
          </div>
        </div>

        <div className='curve relative h-[106px] border-b-2 border-white '>
          <div className='custom-shape-divider-bottom-1721955052'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                className='shape-fill'
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* welcome */}
      <Welcome />
      {/* rates */}
      <Rates />
      {/* great expirence */}
      <Great_expirence />
      {/* trades */}
      <Trades />
      {/* blogpost */}
      <BlogPost />
      {/* reviews */}
      <Reviews />
      {/* learn More */}
      <LearnMore />
      {/* eail */}
      <Email />
    </>
  );
};

export default Exchange;
