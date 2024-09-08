import { Button } from "@/components/ui/button";
import Line from "@/components/ui/shared/Line";
import React from "react";

const Page = () => {
  return (
    <section className='text-white max-w-[1620px] mx-auto px-5 md:px-10 space-y-20'>
      <main className='mt-10 space-y-8'>
        <h1 className='font-bold text-3xl text-center'>About Us</h1>
        <p className=' text-center font-light text-base text-slate-300'>
          Welcome to Topline, your premier destination for financial market
          education and empowerment. At Topline, we believe that anyone can
          succeed in the financial markets with the right knowledge, tools, and
          support. Our mission is to provide comprehensive education and
          services that help you navigate the complexities of trading,
          investing, and capital management with confidence.
        </p>
        <div className='whitbg w-full h-80 bg-white '></div>
        <div className='txt_btn flex max-md:flex-col justify-between items-start  gap-7'>
          <p className='text-2xl lg:text-3xl lg:max-w-[500px] font-bold md:max-w-[350px]'>
            We offer a wide range of services tailored to meet your needs,
            whether you’re a beginner or a seasoned trader.
          </p>
          <p className='flex flex-col gap-y-5 text-left text-base max-w-[500px] font-light text-slate-300'>
            At Topline, we are committed to your success. Our platform is built
            on a foundation of trust, transparency, and a passion for financial
            education. We continually strive to innovate and enhance our
            offerings, ensuring that you have the best resources at your
            fingertips.
            <Button size={"sm"} className='w-fit'>
              Join Us Today
            </Button>
          </p>
        </div>
      </main>
      <OurTeam />

      <section className=' flex justify-between items-center gap-y-10 gap-x-5  flex-wrap pb-5'>
        <h3 className=' text-xl font-medium max-w-[500px] gap-1 flex-col flex justify-start'>
          Ready to Unlock Your Trading Potential?
          <span className=' font-light text-slate-300 text-sm'>
            Our platform is designed to cater to all your financial market needs
            in one place. With our comprehensive services, you can grow your
            knowledge, enhance your trading, and secure your financial future.
          </span>
        </h3>
        <Button size={"lg"}>Join Us Today</Button>
      </section>
    </section>
  );
};
const OurTeam = () => {
  const Box = ({ color }: any) => {
    return (
      <div className='w-64  p-3 gap-y-2 flex-col flex justify-center items-center bg-[#aa8fc010] bg-opacity-55 shadow max-sm:w-full max-sm:max-w-96 rounded-md'>
        <div
          className='img h-[17rem] w-[15rem] max-md:w-full'
          style={{ backgroundColor: color }}
        >
          {/* imageoes here */}
        </div>
        <p className='text-center font-medium text-base'>Name</p>
        <p className='text-center font-light text-sm text-slate-300'>Role</p>
      </div>
    );
  };
  return (
    <main className='py-10'>
      <h3 className=' text-3xl flex-col'>
        Meet our team
        <Line />
      </h3>
      <p>
        With lots of unique blocks, you can easily build a page without coding.
        Build your next consultancy website within few minutes.
      </p>

      <div className='teams_wrapper flex-wrap gap-5 gap-y-10 justify-center flex lg:justify-between items-center my-10 '>
        <Box color='#E6474C' />
        <Box color='#00B2A2' />
        <Box color='#D0D0F0' />
        <Box color='#ED948C' />
      </div>
    </main>
  );
};
export default Page;
