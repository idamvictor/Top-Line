import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import Qr from "@/../public/mockQr.svg";
import Line from "@/components/ui/shared/Line";
import { FaBell } from "react-icons/fa";

const Page = () => {
  return (
    <section className='px-5 lg:px-10  '>
      <Hero />
      <GetSatrted />
      <Benefit />
      <QrContainer />
    </section>
  );
};
const Hero = () => {
  const text =
    "Our Capital Management Service is crafted to help you optimize and grow your investments with the guidance of experienced financial professionals. Whether you’re new to investing or looking to enhance your existing portfolio, our team of experts will manage your capital with precision, focusing on risk management, asset allocation, and long-term growth. We offer personalized strategies tailored to your financial goals, ensuring that your investments are diversified across various asset classes, including stocks, bonds, cryptocurrencies, and more.";
  return (
    <section className='px-5 lg:px-10 relative text-white flex w-full justify-center items-center min-h-fit 2xl:max-h-[700px]  h-[90vh]'>
      <main className=' flex w-full justify-between h-[70%]  max-md:flex-col max-h-[500px]  '>
        <div className='flex-1 flex gap-5 justify-between  items-start  p-4'>
          <div className='text_cont max-w-[600px] md:max-w-[400px] 2xl:max-w-[700px] space-y-7'>
            <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-light'>
              Capital Management
            </h1>
            <p className=' text-slate-400 text-base md:text-xs lg:text-base 2xl:text-lg '>
              {text}
            </p>
            <Button
              className='bg-foreground text-slate-100 font-light'
              size='lg'
            >
              Join Us Today
            </Button>
          </div>
        </div>
        <div className='flex-1 flex justify-start  items-center '>
          <div className='image h-full w-full max-w-[700px] rounded-xl max-h-[700px]  bg-gray-800'></div>
        </div>
      </main>
    </section>
  );
};
const GetSatrted = () => {
  return (
    <section className='What_We_offer text-slate-300 my-20'>
      <h3 className=' text-3xl flex-col'>
      Learn More About Our Capital Management Service
        <Line />
      </h3>
      <p className='my-5 font-light text-base '>
        Ready to take the next step in securing your financial future? Join our
        exclusive Telegram channel to learn more about how our Capital
        Management Service can benefit you
      </p>
      <p className='my-5 font-light text-base '>
        Click the “Join Now” button or scan the QR code to be redirected to our
        Telegram channel. Once there, {"you'll"} receive detailed information on how
        our service works, including insights into our investment strategies and
        how we manage client capital.
      </p>
      <div className=''>
        <div className='w-full max-w-[1250px] px-10 mx-auto max-h-[460px] relative '>
          <iframe
            width='100%'
            height='460'
            src='https://www.youtube.com/embed/dQw4w9WgXcQ'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            style={{ backgroundColor: "transparent" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};
const Benefit = () => {
  return (
    <section className='text-white'>
      <h3 className=' text-3xl flex-col'>
      Explore the Benefits
        <Line />
      </h3>
      <main className=' flex justify-between flex-row-reverse max-md:flex-col gap-10 my-10'>
        <div className='flex-1 relative flex justify-center items-center min-h-[500px]'>
          <div className='imageWrapper w-full  max-w-[440px] min-h-[500px] rounded relative'>
            <div className='relative mg_container max-sm:mx-auto bg-gray-500 w-full max-w-[280px]  sm:max-w-[405px] h-[471px] rounded z-10'></div>
            <div className='imageWrapper absolute bottom-0 right-0 max-sm:mx-auto bg-gray-300 bg-opacity-10 z-5 sm:max-w-[405px]  w-full  max-w-[280px] h-[461px] rounded '></div>
          </div>
          <div className='notification1 absolute top-20 right-0 z-30 bg-[#160622] flex justify-center items-center p-2 gap-3 rounded-md'>
            <FaBell className='bg-[#68D585] text-3xl text-slate-800  p-[5px] rounded-full' />
            <p className=' font-medium'>
              <span className='font-light text-slate-400 text-sm'>
                New Invitation
              </span>{" "}
              <br />
              Interview invitation at Greener
            </p>
          </div>
          <div className='notification2 absolute bottom-20 left-0 z-30 bg-[#160622] flex justify-center items-center p-2 gap-3 rounded-md'>
            <FaBell className='bg-[#68D585] text-3xl text-slate-800  p-[5px] rounded-full' />
            <p className=' font-medium'>
              <span className='font-light text-slate-400 text-sm'>
                New Invitation
              </span>{" "}
              <br />
              Interview invitation at Greener
            </p>
          </div>
        </div>

        <div className='flex-1'>
          <ol className=' max-w-[600px] mx-auto flex flex-col justify-between h-full min-h-[450px]'>
            <li>
              <div className=' flex gap-3 justify-start items-start'>
                <p className='bg-foreground rounded-full p-2 px-5 text-xl flex items-center justify-center text-center '>
                  1
                </p>
                <h4 className=' text-xl font-bold'>
                  Real-Time Alerts <br />
                  <span className='text-slate-400 text-base font-normal'>
                    Receive signals as market conditions change, ensuring you
                    never miss an opportunity.
                  </span>
                </h4>
              </div>
            </li>
            <li>
              <div className=' flex gap-3 justify-start items-start'>
                <p className='bg-foreground rounded-full p-2 px-5 text-xl flex items-center justify-center text-center '>
                  1
                </p>
                <h4 className=' text-xl font-bold'>
                  Real-Time Alerts <br />
                  <span className='text-slate-400 text-base font-normal'>
                    Receive signals as market conditions change, ensuring you
                    never miss an opportunity.
                  </span>
                </h4>
              </div>
            </li>
            <li>
              <div className=' flex gap-3 justify-start items-start'>
                <p className='bg-foreground rounded-full p-2 px-5 text-xl flex items-center justify-center text-center '>
                  1
                </p>
                <h4 className=' text-xl font-bold'>
                  Real-Time Alerts <br />
                  <span className='text-slate-400 text-base font-normal'>
                    Receive signals as market conditions change, ensuring you
                    never miss an opportunity.
                  </span>
                </h4>
              </div>
            </li>
            <li>
              <div className=' flex gap-3 justify-start items-start'>
                <p className='bg-foreground rounded-full p-2 px-5 text-xl flex items-center justify-center text-center '>
                  1
                </p>
                <h4 className=' text-xl font-bold'>
                  Real-Time Alerts <br />
                  <span className='text-slate-400 text-base font-normal'>
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
};
const QrContainer = () => {
  return (
    <section className='flex max-md:flex-col justify-between items-center gap-10 py-10'>
      <div className='Qr w-full mx-auto px-5 max-w-[340px]'>
        <Image src={Qr} alt='' className='object-fill w-full h-[340px]' />
        <p className='flex w-full px-2 pb-2  text-white gap-2 overflow-x-hidden text-lg'>
          <Link />
          Https://link.to_the_client.dm
        </p>
        <Button className='w-full text-white'>Join Now</Button>
      </div>

      <div className='txt w-full h-full p-10 rounded-lg bg-[#aa8fc010] bg-opacity-55'>
        <p className='max-w-[700px] mx-auto text-4xl text-white font-light'>
          By clicking the link or scanning the QR code, you’ll gain direct
          access to our Telegram channel, where you can connect with our team
          and learn more about how we can help you achieve your financial goals.
        </p>
      </div>
    </section>
  );
};
export default Page;
