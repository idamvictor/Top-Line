'use client'
import Image from "next/image";
import React from "react";
import FIrstImage from "@/../public/toplineTwo.webp";
import Line from "@/components/ui/shared/Line";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Check, CheckCheck, Stars } from "lucide-react";
import { FaXmark } from "react-icons/fa6";


const Mentorship = () => {
  return (
    <section className='text-white px-5 lg:px-10 space-y-20'>
      <Hero />
      <ServicesOffered />
      <PricingWrapper />
      <CourseCatalog />
      <CourseMentors />
    </section>
  );
};
const Hero = () => {
  return (
    <section className='Hero max-md:flex-col relative flex justify-between gap-10 items-start max-w-[1400px] mx-auto py-12'>
      <div className='First_container w-full md:w-[534px] space-y-7 xl:w-[570px]'>
        <h1 className=' text-3xl font-bold max-w-[500px] md:max-w-[300px]'>
          Topline Trading Mentorship service
          <p className='text-sm font-light pt-3 leading-5 text-gray-400  '>
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

        <p className='max-w-[500px] font-light text-gray-400 '>
          Our Mentorship Service is designed to guide you through the
          complexities of the financial markets. Whether {"you're"} a beginner
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
    <section className=' space-y-20 '>
      <h2 className='text-3xl font-medium'>
        Mentorship Services Offered
        <Line />
        <p className='text-sm text-gray-400 font-light pt-3'>
          Unlock your full trading potential with our comprehensive Mentorship
          Services. Whether {"you're"} new to the financial markets or an
          experienced trader looking to sharpen your skills, our mentorship
          programs offer personalized guidance and expert insights across
          various asset classes.
        </p>
      </h2>

      <main className='forexMembership max-w-[1400px] mx-auto max-md:flex-col flex justify-between gap-10 gap-y-14 my-10'>
        <div className='text flex-col flex-1 flex justify-between  gap-10'>
          <p className='md:max-w-[500px] text-base font-semibold text-slate-300'>
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
          <p className='md:max-w-[500px] md:text-base font-semibold text-slate-300'>
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
        <div className='image pl-5 md:pl-16 relative flex-1 h-[420px]'>
          <div className='imageWrapper bg-white  w-full h-[420px] '></div>
          <p className='bg-background text-base sm:text-2xl p-2 md:p-5 shadow-purple-200 shadow absolute -bottom-5 md:-bottom-5 -left-1 md:left-0  w-fit rounded'>
            Crypto Mentorship
            <Line />
          </p>
        </div>
      </main>
      <main className='forexMembership max-w-[1400px] mx-auto max-md:flex-col flex justify-between gap-10 my-10'>
        <div className='text flex-col flex-1 flex justify-between  gap-10'>
          <p className='md:max-w-[500px] md:text-base font-semibold text-slate-300'>
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
const PricingWrapper=()=>{
  
  return (
    <section className='py-10'>
      <header className='flex w-full justify-center items-center gap-3 py-10'>
        <p>Monthly</p>
        <Switch
          checked={false}
          onCheckedChange={() => {}}
          aria-readonly
          className='h-5 w-11 data-[state=unchecked]:bg-white data-[state=unchecked]:bg-opacity-15'
          disabled={false}
        />
        <p>Yearly</p>
        <p className="bg-[#aa8fc00b] bg-opacity-10 p-1 px-2 rounded-full text-xs text-foreground font-bold">SAVE 25%</p>
      </header>
      <div className='priceContainer flex justify-center items-center gap-5 flex-wrap'>

        <div className='min-w-72 rounded p-10 text-white max-w-sm p-4rounded-lg sm:p-8 bg-[#aa8fc00b] bg-opacity-10 shadow shadow-[#72336c]'>
          <h5 className='mb-7 text-sm text-foreground font-semibold '>
            Standard plan
          </h5>
          <div className='flex items-baseline '>
            <span className='text-2xl font-semibold'>$</span>
            <span className='text-5xl font-extrabold tracking-tight'>49</span>
            <span className='ms-1 text-base font-normal '>/month</span>
          </div>
          <p className='text-left font-light text-sm my-2'>billed montly</p>
          <ul role='list' className='space-y-5 my-7'>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center line-through decoration-white'>
              <FaXmark className='flex-shrink-0 w-4 h-4 text-white ' />
              <span className='text-base font-normal leading-tight text-slate-400  ms-3'>
                2 team members
              </span>
            </li>
          </ul>
          <Button
            size={"lg"}
            className='text-white w-fit self-start text-sm font-bold '
          >
            Start Today ---
          </Button>
        </div>
        <div className='min-w-72 rounded p-10 text-white max-w-sm p-4rounded-lg sm:p-8 bg-[#aa8fc00b] bg-opacity-10 shadow shadow-[#72336c]'>
          <h5 className='mb-7 text-sm text-foreground font-semibold '>
            Standard plan
          </h5>
          <div className='flex items-baseline '>
            <span className='text-2xl font-semibold'>$</span>
            <span className='text-5xl font-extrabold tracking-tight'>49</span>
            <span className='ms-1 text-base font-normal '>/month</span>
          </div>
          <p className='text-left font-light text-sm my-2'>billed montly</p>
          <ul role='list' className='space-y-5 my-7'>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center line-through decoration-white'>
              <FaXmark className='flex-shrink-0 w-4 h-4 text-white ' />
              <span className='text-base font-normal leading-tight text-slate-400  ms-3'>
                2 team members
              </span>
            </li>
          </ul>
          <Button
            size={"lg"}
            className='text-white w-fit self-start text-sm font-bold '
          >
            Start Today ---
          </Button>
        </div>
        <div className='min-w-72 rounded p-10 text-white max-w-sm p-4rounded-lg sm:p-8 bg-[#aa8fc00b] bg-opacity-10 shadow shadow-[#72336c]'>
          <h5 className='mb-7 text-sm text-foreground font-semibold '>
            Standard plan
          </h5>
          <div className='flex items-baseline '>
            <span className='text-2xl font-semibold'>$</span>
            <span className='text-5xl font-extrabold tracking-tight'>49</span>
            <span className='ms-1 text-base font-normal '>/month</span>
          </div>
          <p className='text-left font-light text-sm my-2'>billed montly</p>
          <ul role='list' className='space-y-5 my-7'>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center'>
              <Check className='flex-shrink-0 w-4 h-4 text-green-500 ' />
              <span className='text-base font-normal leading-tight  ms-3'>
                2 team members
              </span>
            </li>
            <li className='flex items-center line-through decoration-white'>
              <FaXmark className='flex-shrink-0 w-4 h-4 text-white ' />
              <span className='text-base font-normal leading-tight text-slate-400  ms-3'>
                2 team members
              </span>
            </li>
          </ul>
          <Button
            size={"lg"}
            className='text-white w-fit self-start text-sm font-bold '
          >
            Start Today ---
          </Button>
        </div>
      </div>
    </section>
  );
}
const CourseCatalog = () => {
  return (
    <section className='py-10'>
      <h3 className='text-3xl font-medium'>
        Course Catalog
        <Line />
        <p className='text-sm text-gray-400 font-light pt-3'>
          Explore our extensive course catalog, designed to cater to all levels
          of expertise
        </p>
      </h3>
      <main className='grid grid-cols-2 my-5 md:grid-cols-4 w-full gap-5'>
        <Card className='big_card min-h-[391px] max-h-[450px] bg-transparent border-none overflow-hidden col-span-2 rounded-2xl shadow-none '>
          <CardContent className='bg-green-500 w-full h-full p-0'>
            <Image
              src={FIrstImage}
              alt='Topline'
              className='object-fill w-full h-full'
            />
          </CardContent>
        </Card>
        <Card className='small_card min-h-[391px] max-h-[450px] text-white border-none overflow-hidden rounded-2xl  bg-[#aa8fc010] bg-opacity-10 shadow shadow-[#72336c]'>
          <CardHeader className='p-0'>
            <Image
              src={FIrstImage}
              alt='Topline'
              className='object-fill w-full h-[50%]'
            />
          </CardHeader>
          <CardContent className=' w-full h-full space-y-3 py-2 '>
            <p className='text-xs font-medium w-fit text-gray-300 p-1 px-2 rounded-md bg-gray-400 bg-opacity-10'>
              TIPS & TRICKS
            </p>
            <p className='text-base font-medium  text text-white'>
              What is cryptocurrency? all you need to know
            </p>
            <p className='font-light  text-sm text-slate-400'>
              Cryptocurrencies are basically digital assets. It is secured by
              cryptography..
            </p>
          </CardContent>
        </Card>
        <Card className='small_card min-h-[391px] max-h-[450px] text-white border-none overflow-hidden rounded-2xl  bg-[#aa8fc010] bg-opacity-10 shadow shadow-[#72336c]'>
          <CardHeader className='p-0'>
            <Image
              src={FIrstImage}
              alt='Topline'
              className='object-fill w-full h-[50%]'
            />
          </CardHeader>
          <CardContent className=' w-full h-full space-y-3 py-2 '>
            <p className='text-xs font-medium w-fit text-gray-300 p-1 px-2 rounded-md bg-gray-400 bg-opacity-10'>
              TIPS & TRICKS
            </p>
            <p className='text-base font-medium  text text-white'>
              What is cryptocurrency? all you need to know
            </p>
            <p className='font-light  text-sm text-slate-400'>
              Cryptocurrencies are basically digital assets. It is secured by
              cryptography..
            </p>
          </CardContent>
        </Card>
        <Card className='small_card min-h-[391px] max-h-[450px] text-white border-none overflow-hidden rounded-2xl  bg-[#aa8fc010] bg-opacity-10 shadow shadow-[#72336c]'>
          <CardHeader className='p-0'>
            <Image
              src={FIrstImage}
              alt='Topline'
              className='object-fill w-full h-[50%]'
            />
          </CardHeader>
          <CardContent className=' w-full h-full space-y-3 py-2 '>
            <p className='text-xs font-medium w-fit text-gray-300 p-1 px-2 rounded-md bg-gray-400 bg-opacity-10'>
              TIPS & TRICKS
            </p>
            <p className='text-base font-medium  text text-white'>
              What is cryptocurrency? all you need to know
            </p>
            <p className='font-light  text-sm text-slate-400'>
              Cryptocurrencies are basically digital assets. It is secured by
              cryptography..
            </p>
          </CardContent>
        </Card>
        <Card className='small_card min-h-[391px] max-h-[450px] text-white border-none overflow-hidden rounded-2xl  bg-[#aa8fc010] bg-opacity-10 shadow shadow-[#72336c]'>
          <CardHeader className='p-0'>
            <Image
              src={FIrstImage}
              alt='Topline'
              className='object-fill w-full h-[50%]'
            />
          </CardHeader>
          <CardContent className=' w-full h-full space-y-3 py-2 '>
            <p className='text-xs font-medium w-fit text-gray-300 p-1 px-2 rounded-md bg-gray-400 bg-opacity-10'>
              TIPS & TRICKS
            </p>
            <p className='text-base font-medium  text text-white'>
              What is cryptocurrency? all you need to know
            </p>
            <p className='font-light  text-sm text-slate-400'>
              Cryptocurrencies are basically digital assets. It is secured by
              cryptography..
            </p>
          </CardContent>
        </Card>
        <Card className='small_card min-h-[391px] max-h-[450px] text-white border-none overflow-hidden rounded-2xl  bg-[#aa8fc010] bg-opacity-10 shadow shadow-[#72336c]'>
          <CardHeader className='p-0'>
            <Image
              src={FIrstImage}
              alt='Topline'
              className='object-fill w-full h-[50%]'
            />
          </CardHeader>
          <CardContent className=' w-full h-full space-y-3 py-2 '>
            <p className='text-xs font-medium w-fit text-gray-300 p-1 px-2 rounded-md bg-gray-400 bg-opacity-10'>
              TIPS & TRICKS
            </p>
            <p className='text-base font-medium  text text-white'>
              What is cryptocurrency? all you need to know
            </p>
            <p className='font-light  text-sm text-slate-400'>
              Cryptocurrencies are basically digital assets. It is secured by
              cryptography..
            </p>
          </CardContent>
        </Card>
        <Card className='small_card min-h-[391px] max-h-[450px] text-white border-none overflow-hidden rounded-2xl  bg-[#aa8fc010] bg-opacity-10 shadow shadow-[#72336c]'>
          <CardHeader className='p-0'>
            <Image
              src={FIrstImage}
              alt='Topline'
              className='object-fill w-full h-[50%]'
            />
          </CardHeader>
          <CardContent className=' w-full h-full space-y-3 py-2 '>
            <p className='text-xs font-medium w-fit text-gray-300 p-1 px-2 rounded-md bg-gray-400 bg-opacity-10'>
              TIPS & TRICKS
            </p>
            <p className='text-base font-medium  text text-white'>
              What is cryptocurrency? all you need to know
            </p>
            <p className='font-light  text-sm text-slate-400'>
              Cryptocurrencies are basically digital assets. It is secured by
              cryptography..
            </p>
          </CardContent>
        </Card>
       
      </main>
    </section>
  );
};
const CourseMentors=()=>{
  return(
    <section className="">
      <h3 className='text-3xl font-medium'>
        Course Mentors
        <Line />
        <p className='text-sm text-gray-400 font-light pt-3'>
          Meet our expirienced mentors who are here to guide you on your financial journey.
        </p>
      </h3>
      <div className='Reviewscontainer my-10 flex flex-wrap p-5 md:p-10 bg-opacity-5 gap-5 md:gap-10 bg-[#aa8fc00b] justify-center items-center'>
        <div className='h-44 w-44 md:h-52 md:w-52 rounded-full bg-white'></div>
        <div className='txt max-w-[700px] text-white space-y-5'>
        <p className=''>
          <Stars className=' text-orange-500'/>

          </p>
          <p className=' font-bold md:text-lg'>
            “Joining this platform has transformed my trading journey! The
            mentorship, real-time signals, and supportive community have boosted
            my confidence and profitability. Highly recommend for anyone serious
            about financial markets! ”
          </p>
          
          <p className='text-sm'> Jane doe <span className='mx-5 text-xs text-slate-300 font-light'>Satisfied Customer</span></p>
        </div>
      </div>
    </section>
  )
}

export default Mentorship;
