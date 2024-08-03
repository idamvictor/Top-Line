'use client'
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
import 'aos/dist/aos.css'; 
const Exchange = () => {
    React.useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      });
  return (
    <>
      <div className='relative hero_wraapper bg-background justify-center items-center  '>
        <div data-aos="fade-up"   className=' flex pt-10 text-white pb-3 px-10 justify-center items-center'>
          <div className='text_btn md:block flex flex-col justify-between items-center w-50% max-w-[500px]'>
            <h1 className='text-lg sm:text-xl font-normal mb-5'>
              We provide easy solution to exchange your{" "}
              <span className='text-2xl sm:text-3xl font-bold pl-1'>
                Cryptocurrency/ GiftCard for Cash
              </span>
            </h1>
            <p className='font-normal text-base mb-9'>
              Topline is a platform for trading your bitcoin and giftcard at the
              best rate, why not give us a trial.
            </p>
            <button className='bg-white ExchangeBtn text-black px-6 py-3 excha rounded-full'>
              Get Started
            </button>
          </div>
          <Image
            src={image}
            alt='crypto'
            width={400}
            height={400}
            className='hidden md:block'
          />
        </div>
        <div className='curve relative h-[109px] '>
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