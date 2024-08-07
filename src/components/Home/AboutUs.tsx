import React from 'react'
import frame from '../../../public/frame.png'
import Image from 'next/image'
import AOS from "aos";
import 'aos/dist/aos.css'; 
import charts from "@/../public/Icons/chart-waterfall-svgrepo-com.svg"

function AboutUs() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div
    className='Aboutus md:px-7 max-w-[1000px] px-10 md:pt-20  mx-auto my-20 text-foreground relative'>
    <h2 data-aos="fade-up" data-aos-offset="0" className='text-xl  md:text-3xl font-bold pt-5 mb-5 md:mb-10 pl-5 md:pl-0  mt-3 flex flex-col md:items-center  items-start justify-center gap-2 md:gap-5  '>
      About 
      {/* <p className="w-10 h-1 ml-1 bg-background rounded-full "></p> */}
    </h2>

    <div   className=' img_text  overflow-hidden md:grid grid-cols-2 relative place-items-center items-start md:justify-center ml-2 md:ml-0  md:items-start '>
      <p data-aos="zoom-out" data-aos-offset="0" className='z-20 flex-grow  text-base text-left leading-relaxed md:text-left   px-5 md:font-bold   '>
        <span className=' font-extrabold text-foreground'>We</span> are your partner in your journey in exploring the financial
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
        // width={500}
        // height={500}
        className='  hidden md:flex rounded-xl w-auto'
         data-aos="zoom-out"
         data-aos-offset="0"
      />
     
    </div>

  </div>

  )
}

export default AboutUs