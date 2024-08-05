import React, { useRef } from "react";
import Little from "../../../public/littlcry.jpeg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import charts from "@/../public/Icons/money-svgrepo-com.svg"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
const WhatWeoffer = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className='whatWeOffer relative max-w-[1500px]  mx-auto my-20 text-foreground'>
      <h2
        data-aos='fade-up'
        className='text-xl  md:text-2xl font-bold pt-5 mb-5 md:mb-10 pl-5 md:pl-0  mt-3 flex flex-col md:items-center  items-start justify-center gap-2 md:gap-5  '
      >
        Here Is What We Offer
        <p className='w-10 h-1 ml-1 bg-background rounded-full '></p>
      </h2>
      <div className='flex flex-wrap gap-5 gap-y-10 py-5 items-center justify-center'>
        <Card
          data-aos='zoom-in'
          className=' p-1 border border-lightforeground w-fit max-w-56 flex flex-wrap'
        >
          <CardHeader className='p-2'>
            <CardTitle className='  max-sm:text-lg text-xl text-center text-lightforeground'>
              <Image
                src={Little}
                alt='Image'
                width={300}
                height={300}
                className=' bg-gray-600 rounded'
              />
            </CardTitle>
          </CardHeader>
          <CardContent className='text-center max-md:text-xs text-base p-1 '>
            <p className=' text-lg max-sm:py-3 sm:text-lg font-bold  '>
              Academy
            </p>
            <p className='m-2 text-sm max-sm:pb-2 sm:text-sm font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </CardContent>
        </Card>
        <Card
          data-aos='zoom-in'
          className=' p-1 border border-lightforeground w-fit max-w-56 flex flex-wrap'
        >
          <CardHeader className='p-2'>
            <CardTitle className='  max-sm:text-lg text-xl text-center text-lightforeground'>
              <Image
                src={Little}
                alt='Image'
                width={300}
                height={300}
                className=' bg-gray-600'
              />
            </CardTitle>
          </CardHeader>
          <CardContent className='text-center max-md:text-xs text-base p-1 '>
            <p className=' text-lg max-sm:py-3 sm:text-lg font-bold  '>
              Academy
            </p>
            <p className='m-2 text-sm max-sm:pb-2 sm:text-sm font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </CardContent>
        </Card>
        <Card
          data-aos='zoom-in'
          className=' p-1 border border-lightforeground w-fit max-w-56 flex flex-wrap'
        >
          <CardHeader className='p-2'>
            <CardTitle className='  max-sm:text-lg text-xl text-center text-lightforeground'>
              <Image
                src={Little}
                alt='Image'
                width={300}
                height={300}
                className=' bg-gray-600'
              />
            </CardTitle>
          </CardHeader>
          <CardContent className='text-center max-md:text-xs text-base p-1 '>
            <p className=' text-lg max-sm:py-3 sm:text-lg font-bold  '>
              Academy
            </p>
            <p className='m-2 text-sm max-sm:pb-2 sm:text-sm font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </CardContent>
        </Card>
        <Card
          data-aos='zoom-in'
          className=' p-1 border border-lightforeground w-fit max-w-56 flex flex-wrap'
        >
          <CardHeader className='p-2'>
            <CardTitle className='  max-sm:text-lg text-xl text-center text-lightforeground'>
              <Image
                src={Little}
                alt='Image'
                width={300}
                height={300}
                className=' bg-gray-600'
              />
            </CardTitle>
          </CardHeader>
          <CardContent className='text-center max-md:text-xs text-base p-1 '>
            <p className=' text-lg max-sm:py-3 sm:text-lg font-bold  '>
              Academy
            </p>
            <p className='m-2 text-sm max-sm:pb-2 sm:text-sm font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </CardContent>
        </Card>
        <Card
          data-aos='zoom-in'
          className=' p-1 border border-lightforeground w-fit max-w-56 flex flex-wrap'
        >
          <CardHeader className='p-2'>
            <CardTitle className='  max-sm:text-lg text-xl text-center text-lightforeground'>
              <Image
                src={Little}
                alt='Image'
                width={300}
                height={300}
                className=' bg-gray-600'
              />
            </CardTitle>
          </CardHeader>
          <CardContent className='text-center max-md:text-xs text-base p-1 '>
            <p className=' text-lg max-sm:py-3 sm:text-lg font-bold  '>
              Academy
            </p>
            <p className='m-2 text-sm max-sm:pb-2 sm:text-sm font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </CardContent>
        </Card>
      </div>
      <Image
    src={charts} 
    alt={"arrow"}
           width={300} 
           height={300}
           className= 'z-50 lg:right-0 bottom-0  absolute  translate-y-52 left-48 opacity-15'
           />
    </div>
  );
};

export default WhatWeoffer;
