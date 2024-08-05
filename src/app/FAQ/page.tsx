import Image from "next/image";
import React from "react";
import image from "../../../public/FAQ_Hero_IMG.svg";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const page = () => {
  return (
    <main className='w-screen font-manrope'>
      <div className=' relative hero_wraapper bg-background justify-center items-center p-0 '>
        <div className='min-h-[60vh] flex  pt-10 text-white pb-3 px-10 justify-center items-center'>
          <div className=' text_btn md:block flex flex-col justify-between items-center w-50% '>
            <p className='small_text'>HOME/FAQ</p>
            <h1 data-aos='fade-up' className='Hero_Txt font-normal mb-5'>
              Frequently Asked Questions
            </h1>
            <p
              data-aos='fade-up'
              className='font-normal text-lg lg:text-xl mb-9'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              fermentum turpis.
            </p>
            <button
              data-aos='fade-up'
              dats-aos-offset='10'
              className=' text-xl lg:text-2xl flex md:justify-center items-center gap-4 HomeBtn  px-4 py-2 md:px-6 md:py-3 font-medium bg-white ExchangeBtn text-black rounded-full'
            >
              Get Started
            </button>
          </div>

          <div className='img_container hidden h-full md:flex justify-start items-center'>
            <Image
              src={image}
              alt='crypto'
              width={400}
              height={400}
              className='w-50% w-fit h-[90%] max-h-[25rem] min-w-[400px]'
            />
          </div>
        </div>

        <div className='curve relative h-[106px] border-b-2 border-white '>
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
      <main className='bg-white'>
        <p
          className='text-center text-lg md:text-2xl mt-2'
          data-aos='fade-up'
          data-aos-offset='10'
        >
          FAQ
        </p>
        <h4
          data-aos='fade-up'
          data-aos-offset='10'
          className='font-bold pb-2 text-2xl md:text-4xl my-1 text-center flex flex-col justify-center items-center'
        >
          Frequently Asked Questions
          {/* <span className=' w-10 h-1 rounded mt bg-background'></span> */}
        </h4>

        <Accordion
          type='single'
          collapsible
          className='border-t-0 px-1 md:px-5 md:mt-2 text-white bg-white max-w-[1000px] mx-auto'
        >
          <AccordionItem
            value='item-1'
            className='border-b-0 text-sm sm:text-2xl m-2'
          >
            <AccordionTrigger className='[&[data-state=open]]:bg-lightforeground bg-foreground p-1 px-2 rounded '>
              1. Can i cancel my investment plan?
            </AccordionTrigger>
            <AccordionContent className=' text-black max-sm:text-sm text-xl'>
              Yes, You can cancel your investment plan after 4weeks from the day
              of investing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-2'
            className='border-b-0 text-sm sm:text-2xl m-2'
          >
            <AccordionTrigger className='[&[data-state=open]]:bg-lightforeground bg-foreground p-1 px-2 rounded '>
              1. Can i cancel my investment plan?
            </AccordionTrigger>
            <AccordionContent className=' text-black max-sm:text-sm text-xl'>
              Yes, You can cancel your investment plan after 4weeks from the day
              of investing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-3'
            className='border-b-0 text-sm sm:text-2xl m-2'
          >
            <AccordionTrigger className='[&[data-state=open]]:bg-lightforeground bg-foreground p-1 px-2 rounded '>
              1. Can i cancel my investment plan?
            </AccordionTrigger>
            <AccordionContent className=' text-black max-sm:text-sm text-xl'>
              Yes, You can cancel your investment plan after 4weeks from the day
              of investing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-4'
            className='border-b-0 text-sm sm:text-2xl m-2'
          >
            <AccordionTrigger className='[&[data-state=open]]:bg-lightforeground bg-foreground p-1 px-2 rounded '>
              1. Can i cancel my investment plan?
            </AccordionTrigger>
            <AccordionContent className=' text-black max-sm:text-sm text-xl'>
              Yes, You can cancel your investment plan after 4weeks from the day
              of investing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </main>
  );
};

export default page;
