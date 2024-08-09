import React from 'react'
import imagetwo from "../../../public/LearnMore.png";
import Image from 'next/image';

const LearnMore = () => {
  return (
    <div  className='kearn_more bg-background relative border-2 border-white w-full'>
<div className='header overflow-hidden flex flex-col bg-none w-full pl-10  md:pb-1 md:pl-20  text-foreground absolute -top-5'>
      <p className='text-sm sm:text-base ' data-aos="fade-up" data-aos-offset="0">Mentorship</p>
      <h6 className='font-bold text-xl md:text-2xl' data-aos="fade-up" data-aos-offset="0">
        Learn More About Crypto
      </h6>
    </div>
    <div className='custom-shape-divider-top-1722011312'>
      <svg
        data-name='Layer 1'
        fill='white'
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
    <div className='content relative w-full flex justify-cenetr items-start gap-x-5 max-w-[1200px] mx-auto	 '>
      <article data-aos="fade-up" data-aos-offset="0" className=' sm:w-1/2 p-5 pt-0 sm:pl-24 z-20'>
        <p className=' text-white text-left text-xl'>
          No matter how well-informed and educated you think you are, the
          topics of blockchain and cryptocurrency are inexhaustible. You
          more than likely won’t start trading like a pro or go all the way
          to the deep depths of blockchain tech in a
        </p>
        <button className='px-5 py-2 rounded-full border border-white text-white mt-7'>
          Learn More
        </button>
      </article>
      <Image
        src={imagetwo}
        alt='crypto'
        width={400}
        height={400}
        className=' hidden sm:block absolute -top-52 right-0'
        data-aos="fade-down"
        data-aos-offset="0"
      />
    </div>
  </div>
  )
}

export default LearnMore