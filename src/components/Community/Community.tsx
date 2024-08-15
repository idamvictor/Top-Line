'use client'
import React, { useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import {
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; 
const Community = () => {
useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div className='text-white font-poppins z-20 Desc max-w-[90%] sm:max-w-[90%] md:my-5 space-y-2 md:space-y-8 text-center'>
        <h1
          data-aos='fade-up'
          className='text-3xl sm:text-4xl md:text-5xl font-bold max-w-[100%] md:max-w-[80%] mx-auto'
        >
          A Community For Traders By Traders
        </h1>
        <p data-aos='fade-right' className='text-xs sm:text-base'>
         {"Welcome to our vibrant community, a dynamic space where traders, investors, and financial enthusiasts come together to share knowledge, insights, and experiences. Our community is more than just a network—it's a supportive environment designed to help you grow your skills, stay informed, and connect with like-minded individuals. By joining our community, you'll gain access to exclusive content, real-time discussions, and the collective wisdom of members who are passionate about financial markets. Whether you’re here to learn, share, or collaborate, our community offers invaluable resources and a sense of belonging that will empower you on your financial journey. "}
        </p>
      </div>
      <div data-aos='zoom-in' className='social space-y-3 md:space-y-5 z-20 max-w-[800px]'>
        <h2 className='text-center text-xs text-white'>
        Stay connected and informed by following us on our social media platforms. With <span className='text-[#FFC759]'>2000+</span> Active community members, Each platform offers unique content tailored to your needs
        </h2>
        <SocialLinks />
      </div>
    </>
  );
};

const SocialLinks = () => {
  return (
    <div  className=' flex flex-wrap items-center gap-6 justify-center'>
      <p className='flex items-center text-sm sm:text-xl gap-2 text-slate-300 '>
        <FaYoutube className='text-white text-xl sm:text-3xl md:text-5xl rounded-full p-1 md:p-2 bg-red-600' />
        Youtube
      </p>
      <p className='flex items-center text-sm sm:text-xl gap-2 text-slate-300 '>
        <FaFacebookF className='text-white text-xl sm:text-3xl md:text-5xl rounded-full  bg-[#1877F2]' />
        Facebook
      </p>
      <p className='flex items-center text-sm sm:text-xl gap-2 text-slate-300 '>
        <FaXTwitter className='text-white text-xl sm:text-3xl md:text-5xl rounded-full p-1 md:p-2 bg-transparent border border-slate-100' />
        Youtube
      </p>
      <p className='flex items-center text-sm sm:text-xl gap-2 text-slate-300 '>
        <FaWhatsapp className='text-white text-xl sm:text-3xl md:text-5xl rounded-full p-1 md:p-2 bg-[#00E510]' />
        Whatsapp
      </p>
      <p className='flex items-center text-sm sm:text-xl gap-2 text-slate-300 '>
        <FaTelegramPlane className='text-white text-xl sm:text-3xl md:text-5xl rounded-full p-1 md:p-2 bg-[#00B0F2]' />
        Telegram
      </p>
    </div>
  );
}

export default Community