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
      <div className=' md:pb-28 relative '>
        <SwipeCarousel />
        <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='absolute hidden md:grid md:bottom-5  w-full grid-cols-4 md:px-10 px-2 place-items-center'
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
        <div className=' grid sm:hidden mx-auto my-3 gap-y-3 max-w-[350px]   w-full gap-x-2 place-items-center'>
          <Card className=' min-w-48'>
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
          <Card className=' min-w-48 '>
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
          <Card className=' min-w-48 '>
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
          <Card className=' min-w-48 '>
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

      <div className='Aboutus max-w-[500px] md:max-w-[1000px] mx-auto my-10 text-foreground'>
        <h2 className=' text-3xl font-bold py-5 text-center mt-3'>
          About Us
        </h2>
        <div className='img_text flex relative items-start justify-center min-h-fit h-fit '>
          <p className='z-20 text-base leading-6 text-justify  md:text-sm lg:text-base px-5 md:font-bold   '>
            we are your partner in your journey in exploring the financial
            market, our mission is to empower you with the skills, support,
            strategies & resource needed to succeed in the markets and achieve
            your financial goals, we are your partner in your journey in
            exploring the financial market, our mission is to empower you with
            the skills, support, strategies & resource needed to succeed in the
            markets and achieve your financial goals we are your partner in your
            journey in exploring the financial market, our mission is to empower
            you with the skills, support, strategies & resource needed to
            succeed in the markets and achieve your financial goals.
          </p>
          <Image
            src={frame}
            alt=''
            loading='lazy'
            width={500}
            height={400}
            className='min-w-[50%] hidden md:block md:h-auto '
          />
        </div>
      </div>

      <div className='whatWeOffer max-w-[500px] md:max-w-[1000px] mx-auto  text-foreground'>
        <h2 className=' text-3xl font-bold py-5 pb-10 text-center mt-3'>
          Here is what we offer
        </h2>
        <motion.div
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.05,
          }}
          className='flex flex-wrap gap-5 items-center justify-center'
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
          <Card className=''>
            <Cardcontent />
          </Card>
        </motion.div>
      </div>

      <div className=' w-full h-fit relative bg-background overflow-x-hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className='border-none'
        >
          <defs></defs>
          <path
            fill='white'
            fill-opacity='1'
            d='M0,128L60,160C120,192,240,256,360,266.7C480,277,600,235,720,192C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
          ></path>
        </svg>

        <svg
          width='655'
          height='182'
          viewBox='0 0 955 262'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='md:w-full md:left-0  absolute bottom-20 sm:bottom-60 left-14 w-[80%]'
        >
          <path
            d='M724.464 110.868C745.291 110.868 762.175 98.1887 762.175 82.5485C762.175 66.9084 745.291 54.2295 724.464 54.2295C703.636 54.2295 686.752 66.9084 686.752 82.5485C686.752 98.1887 703.636 110.868 724.464 110.868Z'
            fill='#D8D8D8'
          />
          <path
            d='M141.245 146.757C175.27 146.757 202.853 126.044 202.853 100.493C202.853 74.9425 175.27 54.2295 141.245 54.2295C107.22 54.2295 79.6374 74.9425 79.6374 100.493C79.6374 126.044 107.22 146.757 141.245 146.757Z'
            fill='#D8D8D8'
          />
          <path
            d='M433.229 203.395C454.056 203.395 470.94 190.716 470.94 175.076C470.94 159.436 454.056 146.757 433.229 146.757C412.402 146.757 395.518 159.436 395.518 175.076C395.518 190.716 412.402 203.395 433.229 203.395Z'
            fill='#D8D8D8'
          />
          <path
            d='M38.1925 210.686C59.0199 210.686 75.9039 198.007 75.9039 182.367C75.9039 166.727 59.0199 154.048 38.1925 154.048C17.3651 154.048 0.48114 166.727 0.48114 182.367C0.48114 198.007 17.3651 210.686 38.1925 210.686Z'
            fill='#D8D8D8'
          />
          <path
            d='M826.772 179.842C847.599 179.842 864.483 167.163 864.483 151.523C864.483 135.883 847.599 123.204 826.772 123.204C805.944 123.204 789.06 135.883 789.06 151.523C789.06 167.163 805.944 179.842 826.772 179.842Z'
            fill='#D8D8D8'
          />
          <path
            d='M734.92 261.155C755.747 261.155 772.631 248.476 772.631 232.836C772.631 217.195 755.747 204.517 734.92 204.517C714.092 204.517 697.208 217.195 697.208 232.836C697.208 248.476 714.092 261.155 734.92 261.155Z'
            fill='#D8D8D8'
          />
          <path
            d='M916.382 57.0336C937.21 57.0336 954.094 44.3547 954.094 28.7145C954.094 13.0744 937.21 0.395508 916.382 0.395508C895.555 0.395508 878.671 13.0744 878.671 28.7145C878.671 44.3547 895.555 57.0336 916.382 57.0336Z'
            fill='#D8D8D8'
          />
          <path
            d='M591.542 156.85C612.369 156.85 629.253 144.171 629.253 128.531C629.253 112.891 612.369 100.212 591.542 100.212C570.714 100.212 553.83 112.891 553.83 128.531C553.83 144.171 570.714 156.85 591.542 156.85Z'
            fill='#D8D8D8'
          />
          <path
            d='M276.037 112.551C292.946 112.551 306.654 102.257 306.654 89.5591C306.654 76.8611 292.946 66.5674 276.037 66.5674C259.127 66.5674 245.42 76.8611 245.42 89.5591C245.42 102.257 259.127 112.551 276.037 112.551Z'
            fill='#D8D8D8'
          />
          <path
            d='M686.753 169.187C697.888 169.187 706.915 162.408 706.915 154.046C706.915 145.684 697.888 138.905 686.753 138.905C675.618 138.905 666.59 145.684 666.59 154.046C666.59 162.408 675.618 169.187 686.753 169.187Z'
            fill='#D8D8D8'
          />
          <path
            d='M452.27 115.915C468.355 115.915 481.394 106.123 481.394 94.0449C481.394 81.9664 468.355 72.1748 452.27 72.1748C436.186 72.1748 423.147 81.9664 423.147 94.0449C423.147 106.123 436.186 115.915 452.27 115.915Z'
            fill='#D8D8D8'
          />
          <path
            d='M235.71 194.984C246.845 194.984 255.872 188.205 255.872 179.843C255.872 171.481 246.845 164.702 235.71 164.702C224.574 164.702 215.547 171.481 215.547 179.843C215.547 188.205 224.574 194.984 235.71 194.984Z'
            fill='#D8D8D8'
          />
          <path
            d='M337.27 158.532C351.704 158.532 363.406 149.745 363.406 138.905C363.406 128.066 351.704 119.278 337.27 119.278C322.835 119.278 311.133 128.066 311.133 138.905C311.133 149.745 322.835 158.532 337.27 158.532Z'
            fill='#D8D8D8'
          />
        </svg>

        <div className=' text-white w-full px-3 h-96 bg-transparent relative flex flex-col items-center '>
          <h4 className='text-center leading-10 font-bold text-xl md:text-2xl lg:text-4xl '>
            10,000 satisfied Students around the world
          </h4>
          <p className='text-center leading-10 text-sm md:texl-xl  mt-3 max-w-[500px] lg:text-2xl'>
            Yeah! we’re proud with numbers. We’ve helped thousands of  clients
            all around the world with our bespoke service.  Hover or click below to view testimonials.
          </p>
          <div className="w-screen bg-blue-500 h-24 absolute bottom-0 flex flex-wrap justify-center">
            <p className=' bg-gray-600 p-3 m-2 opacity-0 hover:opacity-75'>
            sdfewrwerwerwere

            </p>
            <p className=''>
            sdfewrwerwerwere

            </p>
            <p className=''>
            sdfewrwerwerwere

            </p>
            <p className=''>
            sdfewrwerwerwere

            </p>
            <p className=''>
            sdfewrwerwerwere

            </p>
          </div>
        </div>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320 '
          className='border-none'
        >
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