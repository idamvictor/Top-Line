'use client'
import Image from "next/image";
import React from "react";
import HeroImage from "@/../public/HeroHowTo.png";
import HeroImageOne from "@/../public/How_to_One.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroCurves from "@/components/ui/shared/HeroCurves";
const Page = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <section className=" space-y-20 font-manrope mb-10">
     


<HeroCurves>
<div className='overflow-y-hidden text_btn md:block flex flex-col justify-between items-center max-md:items-start w-50% '>
            <p data-aos='fade-right' data-aos-offset='10' className='small_text'>HOME/How-to-page</p>
            <h1 data-aos='fade-up' data-aos-offset='10' className='Hero_Txt  mb-5 font-bold max-sm:text-3xl'>
              Be Informed, Confused on how to use our app
            </h1>
            <p
              data-aos='fade-up'
              className='font-normal text-lg lg:text-xl mb-9'
            >
              Get to know the latest stuff about our services via our blog post.
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
     

      <div className='wrapper max-w-[1000px] px-5 md:px-10 mx-auto space-y-10'>
        <Card className=' border border-lightforeground max-w-[700px] xl:max-w-[700px] mx-auto p-0 w-full'>
          <CardContent className='m-0 p-0  '>
            <Image
              src={HeroImageOne}
              alt='crypto'
              width={400}
              height={400}
              className=' w-full '
            />
            <div className='overflow-hidden text_container  space-y-7 max-sm:p-5 sm:py-5'>
              <h2 data-aos='fade-right' data-aos-offset='10' className='sm:text-xl md:text-2xl text-center capitalize text-lightforeground font-bold'>
                HOW TO SELL YOUR ITUNES GIFTCARD WITH US .
                <br />
                <span data-aos='fade-left' data-aos-offset='10' className='text-xs sm:text-sm text-zimc-800 font-normal'>
                  19 JUNE, 2019 | BUSINESS
                </span>
              </h2>
              <p className=' text-center text-sm sm:text-base' data-aos='fade-left' data-aos-offset='0'>
                Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
                voluptaria in. Ad mei modus quodsi complectitur, postea verterem
                persecuti cu est, sea epicuri.
              </p>
              <div className='overflow-hidden btnwrapper flex justify-center items-center'>
                <button data-aos='fade-up' data-aos-offset='10' className='bg-background px-8 py-2 rounded-full'>
                  Watch
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
        
      </div>

      <div className="pagination flex justify-center overflow-y-hidden">
      <button data-aos='fade-up' data-aos-offset='10' className='bg-background w-10 h-10 text-center rounded-full'>
          {'>'}
        </button>
      </div>
    </section>
  );
};
export default Page;
