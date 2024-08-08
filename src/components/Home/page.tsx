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
    <main data-aos='fade-up  ' className="space-y-14 scroll-smooth font-poppins overflow-x-hidden w-screen" >
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
    <section className="   relative">
      <section className='h-screen md:min-h-[70vh] xl:min-h-[500px] max-h-[500px] w-full relative bg-black  '>
        
        <SwipeCarousel />
        <div
          className='txt-btn absolute inset-0 top-0 w-full h-full gap-y-3 flex justify-center max-md:items-center 2xl:items-center max-xl:mt-7 xl:mt-5 py-5 '
          data-aos='zoom-out-right'
        >
          <div className=' text-start md:text-center space-y-5  max-w-[1200px] mx-5 lg:mx-10 text-white '>
            <p className='max-sm:text-xs font-bold max-xl:text-sm pb-5   mt-1'>
              Your One stop for everything finance!
            </p>
            <h1 className='  max-md:text-[8vw] md:text-xl xl:text-xl font-extrabold '>
              Explore a world of financial opportunities with{" "}
              <span className='font-extrabold text-lightforeground'>
                TopLine trading
              </span>
            </h1>
         <div className='button_wrapper flex flex-col items-center justify-center max-w-screen-xl mx-auto'>
            <h2 className='max-sm:text-[3.5vw] font-extrabold max-xl:text-xl xl:text-xl  bg-opacity-85 max-w-[150rem] w-[90%] ml-3 md:mx-auto  '>
              we are your partner in your journey in exploring the financial
              market, our mission is to empower you with the skills, support,
              strategies & resource needed to succeed in the markets and achieve
              your financial goals
            </h2>

           
              <button className=' uppercase text-base my-2 flex w-fit md:justify-center items-center gap-2 HomeBtn bg-lightforeground px-5 py-2 md:px-5 md:py-2 rounded-full font-medium '>
                Get Started
                <GoArrowRight className=' text-xl lg:text-lg' />
              </button>
            </div>
          </div>
        </div>










        
      </section>
      <div className='floating-containers-wrapper hidden h-[30%] md:h-[15%]  lg:h-[10%] xl:h-[25%]  relative w-full md:flex justify-center items-center'>
        <div
          className='text-foreground w-full max-w-[1000px] px-10  grid md:absolute sm:grid-cols-2 lg:grid-cols-4  gap-5  mx-auto overflow-x-hidden md:px-10  place-items-center'
        >
          <Card  data-aos="fade-left" data-aos-offset="5" data-aos-delay="50"  className='h-full p-3 border text-center flex flex-col justify-between  border-foreground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-sm   text-foreground font-extrabold'>
                Proven track record success
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-lg:text-xs max-md:text-xs text-xs p-1 text-foreground'>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
          <Card  data-aos="fade-left" data-aos-offset="5" data-aos-delay="50"  className='flex flex-col justify-between h-full p-3 border text-center border-lightforeground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-sm   text-foreground font-extrabold'>
                Expert Trainer & Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-lg:text-xs max-md:text-xs text-xs p-1 text-foreground'>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
          <Card  data-aos="fade-left" data-aos-offset="5" data-aos-delay="50"  className='h-full p-3 border text-center flex flex-col justify-between  border-foreground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-sm   text-foreground font-extrabold'>
                Advance trading tools
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-lg:text-xs max-md:text-xs text-xs p-1 text-foreground'>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
          <Card  data-aos="fade-left" data-aos-offset="5" data-aos-delay="50"  className='flex flex-col justify-between h-full p-3 border text-center border-lightforeground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-sm   text-foreground font-extrabold'>
                Expert Trainer & Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-lg:text-xs max-md:text-xs text-xs p-1 text-foreground'>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
        
        </div>
         </div>

      {/* this wil be visibe for smaller screens */}
      <div className='wrapper  md:hidden p-5  w-full flex justify-center items-center'>
        <div
          className=' w-full max-w-[1500px] grid sm:grid-cols-2 lg:grid-cols-4   gap-5  mx-auto overflow-x-hidden md:px-10 px-2 place-items-center'
        >
          <Card  data-aos="fade-left" data-aos-offset="5" data-aos-delay="50"  className='h-full p-3 border text-center border-lightforeground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-base  text-lightforeground'>
                Expert Trainer & Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-lg:text-sm max-md:text-xs text-sm p-1 '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
          <Card  data-aos="fade-left" data-aos-offset="5" data-aos-delay="100"className=' p-1 border text-center border-lightforeground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-base  text-lightforeground'>
                Expert Trainer & Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-lg:text-sm max-md:text-xs text-sm p-1 '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
          <Card  data-aos="fade-left" data-aos-offset="5" data-aos-delay="150"className=' p-1 border text-center border-lightforeground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-base  text-lightforeground'>
                Expert Trainer & Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-lg:text-sm max-md:text-xs text-sm p-1 '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
          <Card  data-aos="fade-left" data-aos-offset="5" data-aos-delay="200"className=' p-1 border text-center border-lightforeground'>
            <CardHeader className='p-2'>
              <CardTitle className='  max-sm:text-lg text-base  text-lightforeground'>
                Expert Trainer & Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className=' max-lg:text-sm max-md:text-xs text-sm p-1 '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </CardContent>
          </Card>
        </div>
         </div>
    </section>
  );
};
export default Homepage;
