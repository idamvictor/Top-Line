import Image from "next/image";
import React from "react";
import HeroImage from "@/../public/ContactHero.png";
const Page = () => {
  return (
    <section>
          <Hero/>
          <div className="max-w-[1000px] px-5 mx-auto mt-5">
            <h2 className=" text-center">
            Please note that all message will be replied within the next 12hours
            </h2>
            <form action="" className="my-7 flex gap-y-6 flex-col max-w-[600px] mx-auto justify-center items-center">
              <div className="names flex flex-col sm:flex-row justify-between items-center w-full gap-5">
                <input type="text" placeholder="Name*" className="border-2 rounded-lg p-3 py-2 outline-lightforeground border-solid w-[50%]" />
                <input type="text" placeholder="Name*" className="border-2 rounded-lg p-3 py-2 outline-lightforeground border-solid w-[50%]" />
              </div>
              <textarea name="" id=""
              cols={12}
              rows={6}
              className="border-2 rounded-lg p-3 py-2 outline-lightforeground border-solid w-full "
              ></textarea>
                        <button className='px-8 py-2 HomeBtn rounded-full bg-background text-white font-medium text-base mt-2 md:text-lg transition-all ease-in-out self-start'>
              PUBLISH
              </button>
            </form>
          </div>
    </section>
  );
};


const Hero =()=>{
  return(
    <div className='relative hero_wraapper bg-background justify-center items-center '>
        <div className=' flex pt-10 text-white pb-3 px-10 justify-center items-center gap-7'>
          <div className='text_btn  py-10 flex gap-5 flex-col justify-between items-start  w-50% max-w-[500px]'>
            <p className='text-xs sm:text-sm font-normal '>HOME/CONTACT US</p>
            <h1 className='text-2xl sm:text-3xl font-bold'>
              24/7 Customer support Including weekends.
            </h1>
            <p className='font-normal text-base mb-9'>
              We’re always there ti help regardless the number of queries at
              hand.
            </p>
          </div>
          <Image
            src={HeroImage}
            alt='crypto'
            width={400}
            height={400}
            className='hidden md:block'
          />
        </div>
        <div className='curve relative h-[109px] '>
          <div className='custom-shape-divider-bottom-1721955052'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                className='shape-fill'
              ></path>
            </svg>
          </div>
        </div>
      </div>
  )
}
export default Page;
