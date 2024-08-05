"use client";
import React from "react";
import { SwipeCarousel } from "./Herocarousel";
import handArrow from "@/../public/Icons/hand-drawn-arrow.svg"
import AboutUs from "./AboutUs";
import WhatWeoffer from "./WhatWeoffer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Reviews from "../Reviews";
import { GoArrowRight } from "react-icons/go";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

// ..
const Homepage = () => {
  /**
   * useEffect hook that initializes the AOS library with the specified duration.
   * AOS is a library for CSS animations when scrolling.
   * @returns None
   */
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <main data-aos='fade-up  ' className="space-y-16 font-manrope overflow-x-hidden w-screen" >
      <HeroUi />
      <AboutUs />
      <WhatWeoffer />
      <Reviews />
    </main>
  );
};

// this is hero UI
const HeroUi = () => {
  return (
    <>
      <section className='h-[90vh] md:h-[70vh] w-full relative bg-slate-800 '>
        <SwipeCarousel />
        <div
          className='txt-btn absolute  top-0 w-full h-full space-y-4 flex justify-center items-center '
          data-aos='zoom-out-right'
        >
          <div className=' text-start md:text-center space-y-5 mx-5 lg:mx-10 text-white '>
            <p className='max-sm:text-xs font-medium small_text pb-0 xl:text-xl'>
              Your One stop for everything finance!
            </p>
            <h1 className='Hero_Txt font-bold max-sm:text-[9vw]'>
              Explore a world of financial opportunities with{" "}
              <span className='font-extrabold text-lightforeground'>
                TopLine trading
              </span>
            </h1>
            <h2 className='max-sm:text-[3.5vw] xl:text-[2.5vmin] Hero_Mid_Txt font-medium bg-opacity-85 max-w-[150rem] w-[90%] ml-3 md:mx-auto  '>
              we are your partner in your journey in exploring the financial
              market, our mission is to empower you with the skills, support,
              strategies & resource needed to succeed in the markets and achieve
              your financial goals
            </h2>

            <div className='button_wrapper flex  justify-center'>
              <button className=' text-xl lg:text-2xl flex md:justify-center items-center gap-4 HomeBtn bg-lightforeground px-4 py-2 md:px-6 md:py-3 rounded-full font-medium '>
                Get Started
                <GoArrowRight className=' text-xl lg:text-2xl' />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className='wrapper px-5    relative'>
      <Image
     src={handArrow} 
     alt={"arrow"}
            width={175} 
            height={175}
            className= 'z-50  absolute -rotate-90 -top-28 right-0'
            />
        <div
          className='  grid grid-cols-2 lg:grid-cols-4   gap-5 w-full max-w-[1000px] mx-auto overflow-x-hidden md:px-10 px-2 place-items-center'
        >
          <Card  data-aos="fade-left" data-aos-offset="10" data-aos-delay="50"  className=' p-1 border text-left border-lightforeground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-xl  text-lightforeground'>
                Expert Trainer & Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-md:text-xs text-base p-1 '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
          <Card  data-aos="fade-left" data-aos-offset="10" data-aos-delay="100"className=' p-1 border text-left border-lightforeground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-xl  text-lightforeground'>
                Expert Trainer & Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-md:text-xs text-base p-1 '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
          <Card  data-aos="fade-left" data-aos-offset="10" data-aos-delay="150"className=' p-1 border text-left border-lightforeground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-xl  text-lightforeground'>
                Expert Trainer & Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-md:text-xs text-base p-1 '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
          <Card  data-aos="fade-left" data-aos-offset="10" data-aos-delay="200"className=' p-1 border text-left border-lightforeground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-xl  text-lightforeground'>
                Expert Trainer & Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-md:text-xs text-base p-1 '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Homepage;
