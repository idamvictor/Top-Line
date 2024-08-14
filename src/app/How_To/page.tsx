'use client'
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
const Page = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <section className=" space-y-20 font-poppins mb-10">
     
  
      {/* <div className='wrapper max-w-[1000px] px-5 md:px-10 mx-auto space-y-10'>
        <Card className=' border border-lightforeground max-w-[700px] xl:max-w-[700px] mx-auto p-0 w-full'>
          <CardContent className='m-0 p-0  '>
            <Image
              src={HeroImageOne}
              alt='crypto'
              width={400}
              height={400}
              className=' w-full '
            />
            <div className='overflow-hidden text_container  space-y-7 max-sm:p-5 sm:py-5'>
              <h2  className='sm:text-xl md:text-2xl text-center capitalize text-lightforeground font-bold'>
                HOW TO SELL YOUR ITUNES GIFTCARD WITH US .
                <br />
                <span  className='text-xs sm:text-sm text-zimc-800 font-normal'>
                  19 JUNE, 2019 | BUSINESS
                </span>
              </h2>
              <p className=' text-center text-sm sm:text-base' >
                Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
                voluptaria in. Ad mei modus quodsi complectitur, postea verterem
                persecuti cu est, sea epicuri.
              </p>
              <div className='overflow-hidden btnwrapper flex justify-center items-center'>
                <button  className='bg-background px-8 py-2 rounded-full'>
                  Watch
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=' border border-lightforeground max-w-[700px] xl:max-w-[700px] mx-auto p-0 w-full'>
          <CardContent className='m-0 p-0  '>
            <Image
              src={HeroImageOne}
              alt='crypto'
              width={400}
              height={400}
              className=' w-full '
            />
            <div className='overflow-hidden text_container  space-y-7 max-sm:p-5 sm:py-5'>
              <h2  className='sm:text-xl md:text-2xl text-center capitalize text-lightforeground font-bold'>
                HOW TO SELL YOUR ITUNES GIFTCARD WITH US .
                <br />
                <span  className='text-xs sm:text-sm text-zimc-800 font-normal'>
                  19 JUNE, 2019 | BUSINESS
                </span>
              </h2>
              <p className=' text-center text-sm sm:text-base' >
                Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
                voluptaria in. Ad mei modus quodsi complectitur, postea verterem
                persecuti cu est, sea epicuri.
              </p>
              <div className='overflow-hidden btnwrapper flex justify-center items-center'>
                <button  className='bg-background px-8 py-2 rounded-full'>
                  Watch
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=' border border-lightforeground max-w-[700px] xl:max-w-[700px] mx-auto p-0 w-full'>
          <CardContent className='m-0 p-0  '>
            <Image
              src={HeroImageOne}
              alt='crypto'
              width={400}
              height={400}
              className=' w-full '
            />
            <div className='overflow-hidden text_container  space-y-7 max-sm:p-5 sm:py-5'>
              <h2  className='sm:text-xl md:text-2xl text-center capitalize text-lightforeground font-bold'>
                HOW TO SELL YOUR ITUNES GIFTCARD WITH US .
                <br />
                <span  className='text-xs sm:text-sm text-zimc-800 font-normal'>
                  19 JUNE, 2019 | BUSINESS
                </span>
              </h2>
              <p className=' text-center text-sm sm:text-base' >
                Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
                voluptaria in. Ad mei modus quodsi complectitur, postea verterem
                persecuti cu est, sea epicuri.
              </p>
              <div className='overflow-hidden btnwrapper flex justify-center items-center'>
                <button  className='bg-background px-8 py-2 rounded-full'>
                  Watch
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
        
      </div> */}

      {/* <div className="pagination flex justify-center overflow-y-hidden">
      <button  className='bg-background w-10 h-10 text-center rounded-full'>
          {'>'} */}
        {/* </button> */}
      {/* </div> */}
    </section>
  );
};
export default Page;
