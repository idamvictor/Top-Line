import { Button } from '@/components/ui/button';
import Line from '@/components/ui/shared/Line';
import { Link } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { FaBell } from 'react-icons/fa';
import Qr from '@/../public/assets/mockQr.svg'

const Page = () => {
  return (
    <section className=''>
      <Hero />
      <section className='px-5 lg:px-10 md:space-y-28 md:pt-5'>
        <GetSatrted />
        <Benefit />
        <QrContainer />
      </section>
    </section>
  );
}
const Hero = () => {
    const text =
      "Our Signal Service is designed to give you a competitive edge in the financial markets by providing real-time, actionable trading signals. Whether you’re trading Forex, cryptocurrencies, stocks, or other financial instruments, our expert analysts continuously monitor the markets to deliver precise and timely signals. These signals include entry and exit points, stop-loss levels, and potential profit targets, allowing you to make informed decisions quickly and efficiently.";
    return (
      <section className=' signalHero bg-background  px-5 lg:px-10 relative text-white flex w-full justify-center items-center min-h-fit h-[80vh] 2xl:max-h-[600px]  md:h-[80vh] md:max-h-[600px]'>
        <main className=' z-10 flex w-full justify-between md:h-[70%] gap-y-5 max-md:flex-col md:max-h-[500px]  '>
          <div className='flex-1 flex gap-5 justify-between  items-start  p-4'>
            <div className='text_cont  space-y-7'>
              <h1 className=' text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-light'>
              Topline Trading Signals
              </h1>
              <p className=' text-slate-300 text-base md:text-base 2xl:text-lg max-w-[600px] '>
                { text }
              </p>
              <Button
                className='bg-foreground text-slate-100 font-light text-lg'
                size='lg'
              >
                Join Now
              </Button>
            </div>
          </div>
        </main>
      </section>
    );
  };
  const GetSatrted = () => {
    const LongBox = () => {
      return (
        <div className='LongBpx rounded overflow-hidden text-white w-[16rem]  max-h-[310px]'>
          <div className='w-[16rem] h-44 bg-white box_shadowOne'></div>
          <div className='text space-y-2 py-5 pl-2'>
            <p className='text-base font-extrabold text-center'>Click the Button Below</p>
            <p className=' text-xs text-slate-300 h-36 text-center'>
           {" Click the “Join Now” button to be redirected to our client DM system where you'll receive trading signals."}
            </p>
          </div>
        </div>
      );
    };
    return (
      <section className='What_We_offer text-white my-12'>
        <h3 className=' text-3xl flex-col'>
        Get Started with Our Signal Service
          <Line />
        </h3>
        <p className='my-5 font-light text-base text-slate-300'>
        Ready to elevate your trading game? Follow these simple steps to start receiving our signals directly to your preferred communication platform
        </p>
        <div className='Wrapper flex flex-wrap gap-y-5 justify-evenly items-center'>
          <LongBox />
          <LongBox />
          <LongBox />
          <LongBox />
        </div>
      </section>
    );
  };
  const Benefit=()=>{
    return (
      <section className='text-white'>
        <h3 className=' text-3xl flex-col'>
         Benefit of Joining
          <Line />
        </h3>
        <main className=' flex justify-between max-md:flex-col gap-10 my-10'>
          <div className='flex-1 relative flex justify-center items-center min-h-[500px]'>
            <div className='imageWrapper w-full  max-w-[440px] min-h-[500px] rounded relative'>
              <div className='relative mg_container max-sm:mx-auto bg-gray-500 w-full max-w-[280px]  sm:max-w-[405px] h-[471px] rounded z-10'></div>
              <div className='imageWrapper absolute bottom-0 right-0 max-sm:mx-auto bg-gray-300 bg-opacity-10 z-5 sm:max-w-[405px]  w-full  max-w-[280px] h-[461px] rounded '></div>
            </div>
            <div className="notification1 absolute top-20 right-0 z-30 bg-[#160622] flex justify-center items-center p-2 gap-3 rounded-md">
              <FaBell className='bg-[#68D585] text-3xl text-slate-800  p-[5px] rounded-full'/>
              <p className=' font-medium' >
                <span className='font-light text-slate-400 text-sm'>
                  New Invitation
                </span> <br />
                Interview invitation at Greener
              </p>
            </div>
            <div className="notification2 absolute bottom-20 left-0 z-30 bg-[#160622] flex justify-center items-center p-2 gap-3 rounded-md">
              <FaBell className='bg-[#68D585] text-3xl text-slate-800  p-[5px] rounded-full'/>
              <p className=' font-medium' >
                <span className='font-light text-slate-400 text-sm'>
                  New Invitation
                </span> <br />
                Interview invitation at Greener
              </p>
            </div>
          </div>

          <div className='flex-1 min-h-fit'>
            <ol className=' max-w-[600px] mx-auto gap-5 flex flex-col justify-between h-full min-h-[450px]'>
              <li>
                <div className=' flex gap-3 justify-start items-start'>
                  <p className='bg-foreground rounded-full p-1 px-3 md:p-1 md:px-4 text-sm md:text-lg flex items-center justify-center text-center '>
                    1
                  </p>
                  <h4 className=' text-lg md:text-xl font-bold'>
                    Real-Time Alerts <br />
                    <span className='text-slate-400 text-sm md:text-base font-normal'>
                      Receive signals as market conditions change, ensuring you
                      never miss an opportunity.
                    </span>
                  </h4>
                </div>
              </li>
              <li>
                <div className=' flex gap-3 justify-start items-start'>
                  <p className='bg-foreground rounded-full p-1 px-3 md:p-1 md:px-4 text-sm md:text-lg flex items-center justify-center text-center '>
                    1
                  </p>
                  <h4 className=' text-lg md:text-xl font-bold'>
                    Real-Time Alerts <br />
                    <span className='text-slate-400 text-sm md:text-base font-normal'>
                      Receive signals as market conditions change, ensuring you
                      never miss an opportunity.
                    </span>
                  </h4>
                </div>
              </li>
              <li>
                <div className=' flex gap-3 justify-start items-start'>
                  <p className='bg-foreground rounded-full p-1 px-3 md:p-1 md:px-4 text-sm md:text-lg flex items-center justify-center text-center '>
                    1
                  </p>
                  <h4 className=' text-lg md:text-xl font-bold'>
                    Real-Time Alerts <br />
                    <span className='text-slate-400 text-sm md:text-base font-normal'>
                      Receive signals as market conditions change, ensuring you
                      never miss an opportunity.
                    </span>
                  </h4>
                </div>
              </li>
              <li>
                <div className=' flex gap-3 justify-start items-start'>
                  <p className='bg-foreground rounded-full p-1 px-3 md:p-1 md:px-4 text-sm md:text-lg flex items-center justify-center text-center '>
                    1
                  </p>
                  <h4 className=' text-lg md:text-xl font-bold'>
                    Real-Time Alerts <br />
                    <span className='text-slate-400 text-sm md:text-base font-normal'>
                      Receive signals as market conditions change, ensuring you
                      never miss an opportunity.
                    </span>
                  </h4>
                </div>
              </li>
            </ol>
          </div>
        </main>
      </section>
    );
  }
 const QrContainer=()=>{
    return (
      <section className='flex max-md:flex-col justify-between items-center gap-10 py-10'>
        <div className='Qr w-full mx-auto px-5 max-w-[260px]'>
          <Image src={Qr} alt='' className='object-fill w-full h-[260px]' />
          <p className='flex w-full px-2 pb-2  text-white gap-2 overflow-x-hidden text-lg'>
            <Link />
            Https://link.to_the_client.dm
          </p>
          <Button className='w-full text-white'>Join Now</Button>
        </div>

        <div className='txt w-full h-full p-5 md:p-10 rounded-lg bg-[#aa8fc010] bg-opacity-55'>
          <p className='max-w-[700px] mx-auto text-2xl md:text-4xl text-white font-light'>
            By clicking the link or scanning the QR code, you’ll be redirected
            to our client DM system where you can get started immediately.
          </p>
        </div>
      </section>
    );
  }
export default Page