"use client"
import React from 'react'
import { SwipeCarousel } from './Hero/Herocarousel'
import { motion } from 'framer-motion'
import Card from '@/Ui/card'
import Image from 'next/image'
import frame from '../../../public/frame.png'
const Homepage = () => {
  return (
    <main>
      <div className=' sm:pb-28 relative '>
        <SwipeCarousel />
        <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='absolute hidden sm:grid sm:bottom-5  w-full  sm:grid-cols-2 lg:grid-cols-4 md:px-10 px-2 place-items-center'
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
        </motion.div>
        <div className=' grid sm:hidden mx-auto my-3 gap-y-3 max-w-[350px]   w-full grid-cols-2 gap-x-2 place-items-center'>
          <Card className=' max-w-36 '>
            <p className=' text-sm sm:text-base pb-1 sm:py-2 font-bold '>
              Expert Trainer & Mentors
            </p>
            <p className=' text-xs sm:text-sm font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </Card>
          <Card className=' max-w-36 '>
            <p className=' text-sm sm:text-base pb-1 sm:py-2 font-bold '>
              Expert Trainer & Mentors
            </p>
            <p className=' text-xs sm:text-sm font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </Card>
          <Card className=' max-w-36 '>
            <p className=' text-sm sm:text-base pb-1 sm:py-2 font-bold '>
              Expert Trainer & Mentors
            </p>
            <p className=' text-xs sm:text-sm font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </Card>
          <Card className=' max-w-36 '>
            <p className=' text-sm sm:text-base pb-1 sm:py-2 font-bold '>
              Expert Trainer & Mentors
            </p>
            <p className=' text-xs sm:text-sm font-normal '>
              The global audience is increasingly seeking diverse and inclusive
              content that represents different cultures and perspectives. is
              uniquely positioned to meet this demand by highlighting African
              content and talent, alongside
            </p>
          </Card>
          {/* <Card className="">
          <Cardcontent/>
          </Card> */}
          {/* <Card className="">
          <Cardcontent/>
          </Card>
          <Card className="">
          <Cardcontent/>
          </Card> */}
        </div>
      </div>

      <div className='Aboutus max-w-[500px] md:max-w-[1000px] mx-auto text-foreground'>
        <h2 className=' text-2xl font-bold py-5 text-center mt-3'>About Us</h2>
        <div className='img_text flex relative items-start justify-center min-h-fit h-[320px] md:h-fit overflow-hidden'>
          <p className='z-20 text-sm leading-6  md:text-sm lg:text-base px-3 font-bold absolute md:relative top-0 py-2 max-h-52'>
            we are your partner in your journey in exploring the financial
            market, our mission is to empower you with the skills, support,
            strategies & resource needed to succeed in the markets and achieve
            your financial goals, we are your partner in your journey in
            exploring the financial market, our mission is to empower you with
            the skills, support, strategies & resource needed to succeed in the
            markets and achieve your financial goals we are your partner in your
            journey in exploring the financial market, our mission is to empower
            you with the skills, support, strategies & resource needed to
            succeed in the markets and achieve your financial goals
          </p>
          <Image
            src={frame}
            alt=''
            loading='lazy'
            width={500}
            height={400}
            className='md:min-w-[50%] opacity-25 md:opacity-100 md:h-auto h-[320px]'
          />
        </div>
      </div>





      <div className=' w-full h-fit relative bg-background'>
     
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='border-none'>
        <defs>
    {/* <linearGradient id='gradient1' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' style={{ stopColor: '#8B9A06', stopOpacity: 1 }} />
      <stop offset='100%' style={{ stopColor: '#464D09', stopOpacity: 1 }} />
    </linearGradient> */}
  </defs>
          <path
            fill='white'
            fill-opacity='1'
            d='M0,128L60,160C120,192,240,256,360,266.7C480,277,600,235,720,192C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
          ></path>
        </svg>


        <div className=' w-full h-96 bg-transparent '></div>



        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320 ' className='border-none'>
        <defs>
    {/* <linearGradient id='gradient1' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' style={{ stopColor: '#8B9A06', stopOpacity: 1 }} />
      <stop offset='100%' style={{ stopColor: '#464D09', stopOpacity: 1 }} />
    </linearGradient> */}
  </defs>
          <path
            fill='white'
            fill-opacity='1'
            className=' w-full h-96 bg-background '
            d='M0,128L60,160C120,192,240,256,360,266.7C480,277,600,235,720,192C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </div>
    </main>
  );
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