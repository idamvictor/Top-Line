import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Little from '../../../public/littlcry.jpeg'
import Image from 'next/image'
import AOS from "aos";
import 'aos/dist/aos.css';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
const WhatWeoffer = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div
 data-aos="fade-up"
    className='whatWeOffer max-w-[1500px]  mx-auto my-20 text-foreground'>
        <h2 className='text-xl  md:text-2xl font-bold pt-5 mb-5 md:mb-10 pl-5 md:pl-0  mt-3 flex flex-col md:items-center  items-start justify-center gap-2 md:gap-5  '>
        Here Is What We Offer
      <p className="w-10 h-1 ml-1 bg-background rounded-full "></p>
    </h2>
    <div
    data-aos="fade-up"
      className='flex flex-wrap gap-5 gap-y-10 py-5 items-center justify-center'
    >
    <Card className=' p-1 border border-lightforeground w-fit max-w-52 flex flex-wrap'>
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
        <p className='m-2 text-[15px] max-sm:pb-2 sm:text-[13px] font-normal '>
          The global audience is increasingly seeking diverse and inclusive
          content that represents different cultures and perspectives. is
          uniquely positioned to meet this demand by highlighting African
          content and talent, alongside
        </p>
            </CardContent>
          </Card>
    <Card className=' p-1 border border-lightforeground w-fit max-w-52 flex flex-wrap'>
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
        <p className='m-2 text-[15px] max-sm:pb-2 sm:text-[13px] font-normal '>
          The global audience is increasingly seeking diverse and inclusive
          content that represents different cultures and perspectives. is
          uniquely positioned to meet this demand by highlighting African
          content and talent, alongside
        </p>
            </CardContent>
          </Card>
    <Card className=' p-1 border border-lightforeground w-fit max-w-52 flex flex-wrap'>
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
        <p className='m-2 text-[15px] max-sm:pb-2 sm:text-[13px] font-normal '>
          The global audience is increasingly seeking diverse and inclusive
          content that represents different cultures and perspectives. is
          uniquely positioned to meet this demand by highlighting African
          content and talent, alongside
        </p>
            </CardContent>
          </Card>
    <Card className=' p-1 border border-lightforeground w-fit max-w-52 flex flex-wrap'>
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
        <p className='m-2 text-[15px] max-sm:pb-2 sm:text-[13px] font-normal '>
          The global audience is increasingly seeking diverse and inclusive
          content that represents different cultures and perspectives. is
          uniquely positioned to meet this demand by highlighting African
          content and talent, alongside
        </p>
            </CardContent>
          </Card>
    <Card className=' p-1 border border-lightforeground w-fit max-w-52 flex flex-wrap'>
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
        <p className='m-2 text-[15px] max-sm:pb-2 sm:text-[13px] font-normal '>
          The global audience is increasingly seeking diverse and inclusive
          content that represents different cultures and perspectives. is
          uniquely positioned to meet this demand by highlighting African
          content and talent, alongside
        </p>
            </CardContent>
          </Card>
      {/* <Card className='max-w-[27rem] mx-auto overflow-hidden sm:max-w-[29rem] p-0 '>
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
      </Card> */}
    </div>
  </div>
  )
}

const Cardcontent=()=>{
    return (
      <div className=' grid md:grid-cols-2 gap-x-3 overflow-hidden '>
        <Image
          src={Little}
          alt='Image'
           width={100}
           height={200}
          className='w-full h-full bg-gray-600'
        />
        <div className="">
        <p className=' text-lg max-sm:py-3 sm:text-lg font-bold  '>
        Academy
        </p>
        <p className='m-2 text-[15px] max-sm:pb-2 sm:text-[13px] font-normal '>
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