"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "@/../../public/ContactHero.png";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroCurves from "../ui/shared/HeroCurves";

const Hero = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <HeroCurves>
      <div className='overflow-y-hidden md:w-[50%] space-y-4 text_btn md:block flex flex-col justify-between items max-md:items-start w-50% '>
        <p data-aos='fade-right' data-aos-offset='0' className=' text-xs'>
          HOME / CONTACT US
        </p>
        <h1
          data-aos='fade-up'
          data-aos-offset='0'
          className=' text-3xl leading-relaxed mb-5 font-bold max-sm:text-3xl'
        >
          24/7 Customer support Including weekends.
        </h1>
        <p data-aos='fade-up' className='font-normal  text-lg lg:text-base mb-9'>
          We’re always there ti help regardless the number of queries at hand.
        </p>
      </div>
      <div className='img_container hidden h-full md:flex justify-start items-center'>
        <Image
          src={HeroImage}
          alt='crypto'
          width={400}
          height={400}
          className='w-50% w-fit h-[90%] max-h-[25rem] min-w-[400px]'
        />
      </div>
    </HeroCurves>
  );
};
export default Hero;
