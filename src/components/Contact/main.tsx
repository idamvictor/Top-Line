'use client'
import React from 'react'
import AOS from "aos";
import 'aos/dist/aos.css'; 
const Main = () => {
    React.useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      });
  return (
    <div className='max-w-[1000px] px-5 mx-auto mt-5'>
        <h2 className=' text-center'>
          Please note that all message will be replied within the next 12hours
        </h2>
        <form
        data-aos="fade-up"
        data-aos-offset="0"
          action=''
          className='my-7 flex gap-y-6 flex-col max-w-[600px] mx-auto justify-center items-center'
        >
          <div className='names flex flex-col sm:flex-row justify-between items-center w-full gap-5'>
            <input
              type='text'
              placeholder='Name*'
              className='border bg-slate-100 border-slate-300 shadow-md rounded-lg p-3 py-2 outline-lightforeground border-solid w-full sm:w-[50%]'
            />
            <input
              type='text'
              placeholder='Email*'
              className='border bg-slate-100 border-slate-300 shadow-md  rounded-lg p-3 py-2 outline-lightforeground border-solid w-full sm:w-[50%]'
            />
          </div>
          <textarea
            name=''
            id=''
            placeholder='Your comment'
            cols={12}
            rows={6}
            className='border bg-slate-100 border-slate-300 shadow-md rounded-lg p-3 py-2 outline-lightforeground border-solid w-full '
          ></textarea>
          <button className='px-8 py-2 HomeBtn rounded-full bg-foreground text-white font-medium text-base mt-2 md:text-base transition-all ease-in-out self-start'>
            PUBLISH
          </button>
        </form>

        <div data-aos="fade-up" className='Map my-5 rounded-xl max-w-[600px] mx-auto bg-lightforeground'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507365.35487409495!2d2.954296628594845!3d6.547947654560678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1722633477473!5m2!1sen!2sng'
            width='600'
            height='450'
            className='w-full max-h-[400px] rounded-xl opacity-75'
            style={{ border: "0" }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
  )
}

export default Main