import Image from "next/image";
import React from "react";
import FIrstImage from "@/../public/toplineTwo.webp";
import Line from "@/components/ui/shared/Line";
import { Button } from "@/components/ui/button";
import {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent} from '@/components/ui/card'

const Mentorship = () => {
  return (
    <section className='text-white px-5 lg:px-10 '>
      <Hero />
      <ServicesOffered />
      <CourseCatalog />
      
    </section>
  );
};
const Hero = () => {
  return (
    <section className='Hero max-md:flex-col flex justify-between gap-10 items-start max-w-[1400px] mx-auto py-12'>
      <div className='First_container w-full md:w-[534px] space-y-7 xl:w-[570px]'>
        <h1 className=' text-3xl font-bold max-w-[500px] md:max-w-[300px]'>
          Topline Trading Mentorship service
          <p className='text-sm font-light pt-3 leading-5 text-slate-300  '>
            Join over 1000 students in online and 100+ students at the trading
            floor in Nigeria.
          </p>
        </h1>
        <div className='image_wrapper overflow-hidden max-md:max-w-[534px] mx-auto bg-gray-500 w-full rounded-xl h-[500px]'>
          <Image
            src={FIrstImage}
            alt='Topline'
            className='object-fill w-full h-full'
          />
        </div>
      </div>
      <div className='Second_container space-y-7 w-full max-md:max-w-[534px] mx-auto  md:w-[534px] xl:w-[570px]'>
        <div className='image_wrapper bg-gray-500  rounded-xl h-[500px]'></div>

        <p className='max-w-[500px] font-light text-slate-300 '>
          Our Mentorship Service is designed to guide you through the
          complexities of the financial markets. Whether you're a beginner
          looking to learn the basics or an experienced trader seeking advanced
          strategies, our mentorship program offers tailored courses across
          various financial sectors. Gain insights, develop skills, and achieve
          your financial goals with the help of our expert mentors and
          comprehensive resources.
        </p>
      </div>
    </section>
  );
};

const ServicesOffered = () => {
  return (
    <section className='my-10 '>
      <h2 className='text-3xl font-medium'>
        Mentorship Services Offered
        <Line />
        <p className='text-xs md:text-sm text-slate-300 font-light pt-3'>
          Unlock your full trading potential with our comprehensive Mentorship
          Services. Whether you're new to the financial markets or an
          experienced trader looking to sharpen your skills, our mentorship
          programs offer personalized guidance and expert insights across
          various asset classes.
        </p>
      </h2>

      <main className='forexMembership max-w-[1400px] mx-auto max-md:flex-col flex justify-between gap-10 my-10'>
        <div className='text flex-col flex-1 flex justify-between  gap-10'>
          <p className='max-w-[500px] text-sm sm:text-base font-light '>
            Mastering the art of Forex trading with our specialized mentorship
            programs will empower you with the skills needed to excel in the
            dynamic world of currency markets. Our expert mentors will guide you
            through the intricacies of forex trading, helping you grasp key
            concepts such as currency pairs, pips, and market trends. You will
            develop personalized trading strategies tailored to your risk
            tolerance and financial goals, allowing you to make informed and
            strategic decisions. Additionally, our comprehensive risk management
            techniques will equip you to mitigate potential losses and navigate
            market volatility with confidence. By combining theoretical
            knowledge with practical insights, our mentorship programs are
            designed to transform you into a proficient and successful Forex
            trader.
          </p>
          <Button className='w-fit' size={"lg"}>
            Join Us Today
          </Button>
        </div>
        <div className='image pr-5 md:pr-16 relative flex-1 h-[420px]'>
          <div className='imageWrapper bg-white  w-full h-[420px] '></div>
          <p className='bg-background text-base sm:text-2xl p-2 md:p-5 shadow-purple-200 shadow absolute -bottom-5 md:-bottom-5 -right-1 md:right-0  w-fit rounded'>
            Forex Mentorship
            <Line />
          </p>
        </div>
      </main>
      <main className='cryptoMembership max-w-[1400px] mx-auto max-md:flex-col-reverse flex flex-row-reverse justify-between gap-10 my-20'>
        <div className='text flex-col flex-1 flex justify-between  gap-10'>
          <p className='max-w-[500px] text-sm md:text-base font-light '>
            Mastering the art of Forex trading with our specialized mentorship
            programs will empower you with the skills needed to excel in the
            dynamic world of currency markets. Our expert mentors will guide you
            through the intricacies of forex trading, helping you grasp key
            concepts such as currency pairs, pips, and market trends. You will
            develop personalized trading strategies tailored to your risk
            tolerance and financial goals, allowing you to make informed and
            strategic decisions. Additionally, our comprehensive risk management
            techniques will equip you to mitigate potential losses and navigate
            market volatility with confidence. By combining theoretical
            knowledge with practical insights, our mentorship programs are
            designed to transform you into a proficient and successful Forex
            trader.
          </p>
          <Button className='w-fit' size={"lg"}>
            Join Us Today
          </Button>
        </div>
        <div className='image pr-5 md:pr-16 relative flex-1 h-[420px]'>
          <div className='imageWrapper bg-white  w-full h-[420px] '></div>
          <p className='bg-background text-base sm:text-2xl p-2 md:p-5 shadow-purple-200 shadow absolute -bottom-5 md:-bottom-5 -right-1 md:right-0  w-fit rounded'>
            Crypto Mentorship
            <Line />
          </p>
        </div>
      </main>
      <main className='forexMembership max-w-[1400px] mx-auto max-md:flex-col flex justify-between gap-10 my-10'>
        <div className='text flex-col flex-1 flex justify-between  gap-10'>
          <p className='max-w-[500px] text-sm md:text-base font-light '>
            Mastering the art of Forex trading with our specialized mentorship
            programs will empower you with the skills needed to excel in the
            dynamic world of currency markets. Our expert mentors will guide you
            through the intricacies of forex trading, helping you grasp key
            concepts such as currency pairs, pips, and market trends. You will
            develop personalized trading strategies tailored to your risk
            tolerance and financial goals, allowing you to make informed and
            strategic decisions. Additionally, our comprehensive risk management
            techniques will equip you to mitigate potential losses and navigate
            market volatility with confidence. By combining theoretical
            knowledge with practical insights, our mentorship programs are
            designed to transform you into a proficient and successful Forex
            trader.
          </p>
          <Button className='w-fit' size={"lg"}>
            Join Us Today
          </Button>
        </div>
        <div className='image pr-5 md:pr-16 relative flex-1 h-[420px]'>
          <div className='imageWrapper bg-white  w-full h-[420px] '></div>
          <p className='bg-background text-base sm:text-2xl p-2 md:p-5 shadow-purple-200 shadow absolute -bottom-5 md:-bottom-5 -right-1 md:right-0  w-fit rounded'>
          Alternate Markets Mentorship
            <Line />
          </p>
        </div>
      </main>
    </section>
  );
};
const CourseCatalog =()=>{
  return(
    <section className="py-10">
        <h2 className='text-3xl font-medium'>
        Course Catalog
        <Line />
        <p className='text-xs md:text-sm text-slate-300 font-light pt-3'>
        Explore our extensive course catalog, designed to cater to all levels of expertise
        </p>
      </h2>
      <main className="grid grid-cols-2 md:grid-cols-4 w-full gap-5">
      <Card className="big_card h-[391px] col-span-2">
        <CardContent>

        </CardContent>
      </Card>
      <Card className="small_card h-[391px]">
        <CardContent>

        </CardContent>
      </Card>
      <Card className="small_card h-[391px]">
        <CardHeader>

        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>
      </main>
    </section>
  )
}
export default Mentorship;
