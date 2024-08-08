import Image from "next/image";
import React from "react";
import image from "../../../public/FAQ_Hero_IMG.svg";
import QuestionSvg from "../../../public/question-mark-inside-a-bald-male-side-head-outline-svgrepo-com.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroCurves from "@/components/ui/shared/HeroCurves";

const page = () => {
  return (
    <main className='w-screen font-poppins space-y-10'>
       <HeroCurves>
        <div className='overflow-y-hidden md:w-[50%] space-y-4 text_btn md:block flex flex-col justify-between items max-md:items-start w-50% '>
          <p data-aos='fade-right' data-aos-offset='0' className=' text-xs'>
          HOME / FAQ
          </p>
          <h1
            data-aos='fade-up'
            data-aos-offset='0'
            className=' text-3xl leading-relaxed mb-5 font-bold max-sm:text-3xl'
          >
             Be Informed, Confused on how to use our app
          </h1>
          <p
            data-aos='fade-up'
            className='font-normal  text-lg lg:text-base mb-9'
          >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
             fermentum turpis.
          </p>
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
      </HeroCurves>

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
      </main>
    </main>
  );
};

export default page;
