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
    <div className='whatWeOffer relative max-w-[1000px] md:pt-5 mx-auto my-20 text-foreground'>
      <h2
        data-aos='fade-up'
        className='text-xl overflow-hidden  md:text-2xl font-extrabold pt-5 mb-5 md:mb-10 pl-5 md:pl-0  mt-3 flex flex-col md:items-center  items-start justify-center gap-2 md:gap-5  '
      >
        Here Is What We Offer
        {/* <p className='w-10 h-1 ml-1 bg-background rounded-full '></p> */}
      </h2>
      <div className='flex flex-wrap gap-5 gap-y-10 py-5 items-center justify-center'>
        <Card
          data-aos='zoom-in'
          data-aos-offset="0"
          className=' p-0 border  border-lightforeground w-fit max-w-[400px] flex mx-5'
        >
          <CardHeader className='p-0'>
            <CardTitle className=' max-sm:text-lg text-xl text-center h-full text-lightforeground'>
              <Image
                src={Little}
                alt='Image'
                width={300}
                height={300}
                className=' bg-gray-600 h-full w-[150px] max-h-[180px] rounded'
              />
            </CardTitle>
          </CardHeader>
          <CardContent className='text-left max-md:text-xs text-foreground text-base p-1 '>
            <p className=' mb-1 max-sm:py-0 text-sm font-extrabold '>
              Academy
            </p>
            <p className=' text-xs font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </CardContent>
        </Card>
        <Card
          data-aos='zoom-in'
          data-aos-offset="0"
          className=' p-0 border  border-lightforeground w-fit max-w-[400px] flex mx-5'
        >
          <CardHeader className='p-0'>
            <CardTitle className=' max-sm:text-lg text-xl text-center h-full text-lightforeground'>
              <Image
                src={Little}
                alt='Image'
                width={300}
                height={300}
                className=' bg-gray-600 h-full w-[150px] max-h-[180px] rounded'
              />
            </CardTitle>
          </CardHeader>
          <CardContent className='text-left max-md:text-xs text-foreground text-base p-1 '>
            <p className=' mb-1 max-sm:py-0 text-sm font-extrabold '>
              Academy
            </p>
            <p className=' text-xs font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </CardContent>
        </Card>
        <Card
          data-aos='zoom-in'
          data-aos-offset="0"
          className=' p-0 border  border-lightforeground w-fit max-w-[400px] flex mx-5'
        >
          <CardHeader className='p-0'>
            <CardTitle className=' max-sm:text-lg text-xl text-center h-full text-lightforeground'>
              <Image
                src={Little}
                alt='Image'
                width={300}
                height={300}
                className=' bg-gray-600 h-full w-[150px] max-h-[180px] rounded'
              />
            </CardTitle>
          </CardHeader>
          <CardContent className='text-left max-md:text-xs text-foreground text-base p-1 '>
            <p className=' mb-1 max-sm:py-0 text-sm font-extrabold '>
              Academy
            </p>
            <p className=' text-xs font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </CardContent>
        </Card>
        <Card
          data-aos='zoom-in'
          data-aos-offset="0"
          className=' p-0 border  border-lightforeground w-fit max-w-[400px] flex mx-5'
        >
          <CardHeader className='p-0'>
            <CardTitle className=' max-sm:text-lg text-xl text-center h-full text-lightforeground'>
              <Image
                src={Little}
                alt='Image'
                width={300}
                height={300}
                className=' bg-gray-600 h-full w-[150px] max-h-[180px] rounded'
              />
            </CardTitle>
          </CardHeader>
          <CardContent className='text-left max-md:text-xs text-foreground text-base p-1 '>
            <p className=' mb-1 max-sm:py-0 text-sm font-extrabold '>
              Academy
            </p>
            <p className=' text-xs font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </CardContent>
        </Card>
        <Card
          data-aos='zoom-in'
          data-aos-offset="0"
          className=' p-0 border  border-lightforeground w-fit max-w-[400px] flex mx-5'
        >
          <CardHeader className='p-0'>
            <CardTitle className=' max-sm:text-lg text-xl text-center h-full text-lightforeground'>
              <Image
                src={Little}
                alt='Image'
                width={300}
                height={300}
                className=' bg-gray-600 h-full w-[150px] max-h-[180px] rounded'
              />
            </CardTitle>
          </CardHeader>
          <CardContent className='text-left max-md:text-xs text-foreground text-base p-1 '>
            <p className=' mb-1 max-sm:py-0 text-sm font-extrabold '>
              Academy
            </p>
            <p className=' text-xs font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </CardContent>
        </Card>


      </div>
      {/* <Image
    src={charts} 
    alt={"arrow"}
           width={300} 
           height={300}
           className= 'z-50 lg:right-0 bottom-0  absolute  translate-y-52 left-48 opacity-15'
           /> */}
    </div>
  );
};

export default WhatWeoffer;
