import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <main className='w-screen font-poppins space-y-10'>
     
{/* 
      <main className='bg-white relative max-w-[1000px] mx-auto'>
        {/* <Image
          src={QuestionSvg}
          alt={"question"}
          width={200}
          height={200}
          className='z-20 right-5 -top-36 opacity-25 absolute   '
        /> */}
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
          className='border-t-0 px-1 md:px-5 md:mt-2 my-10 text-white bg-white max-w-[1000px] mx-auto'
        >
          <AccordionItem
            value='item-1'
            className='border-b-0 text-sm sm:text-lg m-2 font-poppins font-light'
          >
            <AccordionTrigger className='[&[data-state=open]]:bg-foreground hover:no-underline font-medium text-black bg-lightforeground p-1 px-2 rounded '>
              1. Can i cancel my investment plan?
            </AccordionTrigger>
            <AccordionContent className=' text-black max-sm:text-sm text-lg'>
              Yes, You can cancel your investment plan after 4weeks from the day
              of investing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-2'
            className='border-b-0 text-sm sm:text-lg m-2 font-poppins font-light'
          >
            <AccordionTrigger className='[&[data-state=open]]:bg-foreground hover:no-underline font-medium text-black bg-lightforeground p-1 px-2 rounded '>
              1. Can i cancel my investment plan?
            </AccordionTrigger>
            <AccordionContent className=' text-black max-sm:text-sm text-lg'>
              Yes, You can cancel your investment plan after 4weeks from the day
              of investing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-3'
            className='border-b-0 text-sm sm:text-lg m-2 font-poppins font-light'
          >
            <AccordionTrigger className='[&[data-state=open]]:bg-foreground hover:no-underline font-medium text-black bg-lightforeground p-1 px-2 rounded '>
              1. Can i cancel my investment plan?
            </AccordionTrigger>
            <AccordionContent className=' text-black max-sm:text-sm text-lg'>
              Yes, You can cancel your investment plan after 4weeks from the day
              of investing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-4'
            className='border-b-0 text-sm sm:text-lg m-2 font-poppins font-light'
          >
            <AccordionTrigger className='[&[data-state=open]]:bg-foreground hover:no-underline font-medium text-black bg-lightforeground p-1 px-2 rounded '>
              1. Can i cancel my investment plan?
            </AccordionTrigger>
            <AccordionContent className=' text-black max-sm:text-sm text-lg'>
              Yes, You can cancel your investment plan after 4weeks from the day
              of investing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      {/* </main>  */}
    </main>
  );
};

export default page;
