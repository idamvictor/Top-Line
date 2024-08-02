import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Card from '@/Ui/card'
import Little from '../../../public/littlcry.jpeg'
import Image from 'next/image'
import AOS from "aos";
import 'aos/dist/aos.css';
const WhatWeoffer = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div
 data-aos="fade-up"
    className='whatWeOffer max-w-[500px] md:max-w-[1000px] mx-auto  text-foreground'>
    <h2 className=' text-3xl font-bold py-5 pb-10 text-center mt-3 flex flex-col items-center justify-center gap-5'>
      Here is what we offer
      <p className="w-8 h-1 bg-background rounded-full mb-2"></p>
    </h2>
    <div
    data-aos="fade-up"
      className='flex flex-wrap gap-5 items-center justify-center'
    >
    
      <Card className='max-w-[30rem] mx-2 overflow-hidden sm:max-w-[29rem] p-0 '>
        <Cardcontent />
      </Card>
      <Card className='max-w-[30rem] mx-2 overflow-hidden sm:max-w-[29rem] p-0 '>
        <Cardcontent />
      </Card>
      <Card className='max-w-[30rem] mx-2 overflow-hidden sm:max-w-[29rem] p-0 '>
        <Cardcontent />
      </Card>
      <Card className='max-w-[30rem] mx-2 overflow-hidden sm:max-w-[29rem] p-0 '>
        <Cardcontent />
      </Card>
      <Card className='max-w-[30rem] mx-2 overflow-hidden sm:max-w-[29rem] p-0 '>
        <Cardcontent />
      </Card>
    </div>
  </div>
  )
}

const Cardcontent=()=>{
    return (
      <div className='flex flex-col  sm:flex-row gap-x-3 overflow-hidden '>
        <Image
          src={Little}
          alt='Image'
           width={100}
           height={200}
          className='w-full h-36 bg-gray-600'
        />
        <div className="">
        <p className=' text-base sm:text-lg font-bold  '>
        Academy
        </p>
        <p className=' text-[15px] sm:text-[13px] font-normal '>
          The global audience is increasingly seeking diverse and inclusive
          content that represents different cultures and perspectives. is
          uniquely positioned to meet this demand by highlighting African
          content and talent, alongside
        </p>
        </div>
   
      </div>
    );
  }
export default WhatWeoffer