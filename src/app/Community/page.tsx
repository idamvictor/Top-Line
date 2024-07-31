"use client";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import {
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles-
const page = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <section className='h-[95vh] md:h-[85vh] relative gap-y-8 bg-gray-800 w-screen community flex  items-center justify-center flex-col'>
      <div
        data-aos='zoom-in'
        className='text-white z-20 Desc max-w-[90%] sm:max-w-[70%] my-5 space-y-8 text-center'
      >
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
          A Community For Traders By Traders
        </h1>
        <p className='text-sm sm:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div data-aos='zoom-in' className='social space-y-5 z-20'>
        <h2 className='text-center text-sm text-white'>
          We have <span className='text-[#FFC759]'>2000+</span> Active community
          members
        </h2>
        <SocialLinks />
      </div>
    </section>
  );
};

const SocialLinks = () => {
  return (
    <div className=' flex flex-wrap items-center gap-6 justify-center'>
      <p className='flex items-center text-xl gap-2 text-slate-300 '>
        <FaYoutube className='text-white text-3xl sm:text-3xl md:text-5xl rounded-full p-1 md:p-2 bg-red-600' />
        Youtube
      </p>
      <p className='flex items-center text-xl gap-2 text-slate-300 '>
        <FaFacebookF className='text-white text-3xl sm:text-3xl md:text-5xl rounded-full  bg-[#1877F2]' />
        Facebook
      </p>
      <p className='flex items-center text-xl gap-2 text-slate-300 '>
        <FaXTwitter className='text-white text-3xl sm:text-3xl md:text-5xl rounded-full p-1 md:p-2 bg-transparent border border-slate-100' />
        Youtube
      </p>
      <p className='flex items-center text-xl gap-2 text-slate-300 '>
        <FaWhatsapp className='text-white text-3xl sm:text-3xl md:text-5xl rounded-full p-1 md:p-2 bg-[#00E510]' />
        Whatsapp
      </p>
      <p className='flex items-center text-xl gap-2 text-slate-300 '>
        <FaTelegramPlane className='text-white text-3xl sm:text-3xl md:text-5xl rounded-full p-1 md:p-2 bg-[#00B0F2]' />
        Telegram
      </p>
    </div>
  );
};
export default page;
