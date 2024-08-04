import React from 'react'
import frame from '../../../public/frame.png'
import Image from 'next/image'
import AOS from "aos";
import 'aos/dist/aos.css'; 
function AboutUs() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div
    data-aos="fade-up"
    className='Aboutus md:px-7 max-w-[1500px]  mx-auto my-20 text-foreground'>
    <h2 className='text-xl  md:text-2xl font-bold pt-5 mb-5 md:mb-10 pl-5 md:pl-0  mt-3 flex flex-col md:items-center  items-start justify-center gap-2 md:gap-5  '>
      About TopLine Trading
      <p className="w-10 h-1 ml-1 bg-background rounded-full "></p>
    </h2>

    <div className='img_text flex relative items-start ml-2 md:ml-0 justify-center md:items-center min-h-fit h-fit '>
      <p className='z-20 About_Txt text-left leading-relaxed md:text-left   px-5 md:font-medium   '>
        <span className=' font-extrabold text-lightforeground'>We</span> are your partner in your journey in exploring the financial
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
        className='min-w-[50%] hidden md:block rounded-xl '
      />
    </div>
  </div>

  )
}

export default AboutUs