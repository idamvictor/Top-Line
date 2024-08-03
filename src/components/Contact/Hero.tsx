'use client'
import React from 'react'
import Image from "next/image";
import HeroImage from "@/../../public/ContactHero.png";
import AOS from "aos";
import 'aos/dist/aos.css'; 

const Hero = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
    return (
      <div  className='relative hero_wraapper bg-background justify-center items-center '>
        <div data-aos="fade-up" className=' flex pt-10 text-white pb-3 px-10 justify-center items-center gap-7'>
          <div className='text_btn  py-10 flex gap-5 flex-col justify-between items-start  w-50% max-w-[500px]'>
            <p className='text-xs sm:text-sm font-normal '>HOME/CONTACT US</p>
            <h1 className='text-2xl sm:text-3xl font-bold'>
              24/7 Customer support Including weekends.
            </h1>
            <p className='font-normal text-base mb-9'>
              We’re always there ti help regardless the number of queries at hand.
            </p>
          </div>
          <Image
            src={HeroImage}
            alt='crypto'
            width={400}
            height={400}
            className='hidden md:block'
          />
        </div>
        <div data-aos="fade-up" className='curve relative h-[109px] '>
          <div className='custom-shape-divider-bottom-1721955052'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                className='shape-fill'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  };
export default Hero