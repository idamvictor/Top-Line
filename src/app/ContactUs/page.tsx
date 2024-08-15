import React from "react";
import type { Metadata } from "next";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { LocateFixedIcon, MailIcon, PhoneCall } from "lucide-react";
import {FaFacebook, FaInstagram, FaPaperPlane, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "TopLine Trading Reach out us. 24/7 customer support",
};
const Page = () => {
  return (
    <section className='text-white my-10 mb-16 space-y-7 text-center'>
      <h1 className='font-bold text-3xl'>Contact Us</h1>
      <p className='font-light'>24/7 Customer support including weekends.</p>

      <div className=' max-w-[1100px] mx-auto rounded-md overflow-hidden flex max-md:flex-col-reverse justify-center items-center bg-[#aa8fc010] bg-opacity-10 shadow shadow-[#72336c] min-h-[400px] backdrop-blur-3xl'>
        {/* Map */}
        <div className='map w-full relative  md:w-[70%] overflow-hidden '>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62283124574!2d3.28395955!3d6.548055099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1723676394945!5m2!1sen!2sng'
            style={{ border: 0 }}
            loading='lazy'
            // referrerpolicy='no-referrer-when-downgrade'
            className='w-full  min-h-[450px] '
          ></iframe>
          <div className='p-5 gap-y-5 bg-black w-full h-full absolute top-0 bg-opacity-70 text-left md:text-center flex flex-col items-left justify-start'>
            <h2 className='text-left font-medium text-4xl'>Contact Information</h2>
            <p className=" text-left">
              We’re always there to help regardless the number of queries at
              hand.
            </p>
            <p className="flex gap-10">
              <PhoneCall/>
              +1232 456 789
            </p>
            <p className="flex gap-10">
              <MailIcon/>
              +1232 456 789
            </p>
            <p className="flex gap-10">
              <LocateFixedIcon/>
              +1232 456 789
            </p>
            <div className="flex justify-start gap-5 absolute bottom-5 left-6  w-full">
              <FaPaperPlane className=" text-3xl bg-slate-400 rounded-md p-2"/>
              <FaFacebook className=" text-3xl bg-slate-400 rounded-md p-2"/>
              <FaXTwitter className=" text-3xl bg-slate-400 rounded-md p-2"/>
              <FaInstagram className=" text-3xl bg-slate-400 rounded-md p-2"/>
              <FaWhatsapp className=" text-3xl bg-slate-400 rounded-md p-2"/>
              <FaYoutube className=" text-3xl bg-slate-400 rounded-md p-2"/>
            </div>
          </div>
        </div>
        {/* form */}
        <div className='form w-full  min-h-[400px] px-7 max-md:my-7'>
          <form className='grid grid-cols-2 gap-5'>
            <div className='col-span-2 text-left space-y-2'>
              <Label htmlFor='FullName' className=''>
                Full Name
              </Label>
              <Input 
                placeholder="First Name"
              className=' outline-none border-none focus-visible:ring-0' />
            </div>
            <div className='text-left space-y-2'>
              <Label htmlFor='email' className=''>
                Email Address
              </Label>
              <Input
                type='email'
                placeholder="Example@email.com"
                className=' outline-none border-none focus-visible:ring-0'
              />
            </div>
            <div className='text-left space-y-2'>
              <Label htmlFor='PhoneNumber' className=''>
                Phone Number
              </Label>
              <Input
                placeholder="Your Phone Number"
                className=' outline-none border-none focus-visible:ring-0'
              />
            </div>
            <div className='col-span-2 text-left space-y-2'>
              <Label htmlFor='message' className=''>
                Message
              </Label>
              <Textarea placeholder="Write your message...." className=' outline-none border-none focus-visible:ring-0' />
            </div>
            <div />
            <Button size='lg'>Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
