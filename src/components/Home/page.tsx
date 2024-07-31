"use client"
import React, { Suspense } from 'react'
import { SwipeCarousel } from './Herocarousel'
import { motion } from 'framer-motion'
import Card from '@/Ui/card'
import Image from 'next/image'
import AboutUs from './AboutUs'
import WhatWeoffer from './WhatWeoffer'
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const Homepage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <main data-aos="fade-up">
            <HeroUi/>
      <AboutUs/>
      <WhatWeoffer/>
    </main>
  );
}


// this is hero UI
const HeroUi =()=>{
  return(
    <section  className='md:pb-[18rem] lg:pb-28 relative '>
        <SwipeCarousel />
        <div className='txt-btn absolute top-5 w-full  flex justify-center items-center '
        data-aos="zoom-out-right">
          <div className="container text-center space-y-6 max-w-[800px] text-white mt-10">
               <p className=' font-bold text-xs pb-0 sm:text-sm md:text-base md:pb-5'>Your One stop for everything finance!</p>
              <h1 className='text-base sm:text-lg font-bold md:text-2xl '>
                Explore a world of financial opportunities with TopLine trading
              </h1>
              <h2 className='text-base font-bold sm:text-xl leading-6  md:text-2xl '>
                we are your partner in your journey in exploring the financial
                market, our mission is to empower you with the skills, support,
                strategies & resource needed to succeed in the markets and
                achieve your financial goals
              </h2>
              <button className='HomeBtn bg-background px-5 py-2 rounded-full font-bold text-xl md:text-2xl'>
                Get Started
              </button>
          </div>
           
            </div>
        <div
          className='relative grid md:hidden md:bottom-5 mt-4 grid-cols-2 gap-5 w-full md:px-10 px-2 place-items-center'
          data-aos="fade-up"
        >
          <Card className=''>
            <Cardcontent />
          </Card>
          <Card className=''>
            <Cardcontent />
          </Card>
          <Card className=''>
            <Cardcontent />
          </Card>
          <Card className=''>
            <Cardcontent />
          </Card>
        </div>
        <div
          // initial='initial'
          // animate='animate'
          // transition={{
          //   staggerChildren: 0.05,
          // }}
          className='absolute hidden md:grid md:bottom-5 w-full grid-cols-4 md:px-5 px-2 gap-5 place-items-center'
        data-aos="fade-up"
        >
          <Card className=''>
            <Cardcontent />
          </Card>
          <Card className=''>
            <Cardcontent />
          </Card>
          <Card className=''>
            <Cardcontent />
          </Card>
          <Card className=''>
            <Cardcontent />
          </Card>
        </div>
      </section>
  )
}
const Cardcontent=()=>{
  return(
<>
<p className=' text-sm sm:text-base pb-1 sm:py-2 font-bold '>Expert Trainer & Mentors</p>
            <p  className=' text-xs sm:text-sm font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
</>
  )
}

export default Homepage;