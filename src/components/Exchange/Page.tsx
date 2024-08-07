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
import HeroCurves from "../ui/shared/HeroCurves";
const Exchange = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <section className="space-y-5 scroll-smooth">

<HeroCurves>

          <div className=' text_btn md:block flex flex-col justify-between items-center md:max-w-[60%] '>
          <h1 data-aos='fade-up' className='text-2xl md:text-4xl max-sm:text-3xl font-normal mb-5'>
              We provide easy solution to exchange your{" "}
              <span className='  font-bold pl-1 '>
                Cryptocurrency/ GiftCard for Cash
              </span>
            </h1>
            <p
              data-aos='fade-up'
              className='font-normal text-sm lg:text-lg mb-9'
            >
             Topline is a platform for trading your bitcoin and giftcard at the
             best rate, why not give us a trial.
            </p>
            <button
              data-aos='fade-up'
              dats-aos-offset="0"
              className=' text-base lg:text-lg flex md:justify-center items-center gap-4 HomeBtn  px-4 py-2 md:px-5 md:py-2 font-medium bg-white ExchangeBtn text-black rounded-full'
            >
              Get Started
            </button>
          </div>
          <div className='img_container hidden h-full md:flex justify-start items-center'>
            <Image
              src={image}
              alt='crypto'
              loading='lazy'
              // width={500}
              // height={500}
              className='  hidden md:flex rounded-xl w-auto'
               data-aos="zoom-out"
               data-aos-offset="0"
            />
          </div>
      </HeroCurves>
          


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
    </section>
  );
};

export default Exchange;
