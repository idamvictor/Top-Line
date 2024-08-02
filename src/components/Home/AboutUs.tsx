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
    className='Aboutus max-w-[700px] md:max-w-[1000px] mx-auto my-10 text-foreground'>
    <h2 className=' text-3xl font-bold pt-5 pb-5 pl-10 md:pl-0  mt-3 flex flex-col md:items-center  items-start justify-center gap-5'>
      About Us
      <p className="w-10 h-1 bg-background rounded-full mb-2"></p>
    </h2>
    <div className='img_text flex relative items-start ml-2 md:ml-0 justify-center gap-5 min-h-fit h-fit '>
      <p className='z-20 text-lg leading-7 text-justify  md:text-base px-5 md:font-medium   '>
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

  )
}

export default AboutUs