import Image from 'next/image'
import React from 'react'
import HeroImage from '@/../public/About.png'
import HeroCurves from '@/components/ui/shared/HeroCurves'
const Page = () => {
  return (
    <section className=' font-manrope'>
      <HeroCurves>
        <div className=' overflow-y-hidden text_btn md:block flex flex-col justify-between max-md:items-start items-center w-50% '>
          <p data-aos='fade-right' data-aos-offset='10' className='small_text '>
            HOME/ABOUT US
          </p>
          <h1
            data-aos='fade-up'
            data-aos-offset='10'
            className='Hero_Txt mb-5 font-bold max-sm:text-3xl'
          >
            Great service, Professional support
          </h1>
          <p data-aos='fade-up' className='font-normal text-lg lg:text-xl mb-9'>
            CoinBase is a platform for trading your bitcoin and giftcard at the
            best rate, why not give us a trial.
          </p>
        </div>

        <div className='img_container hidden h-full md:flex justify-start items-center'>
          <Image
            src={HeroImage}
            alt='crypto'
            width={400}
            height={400}
            className='w-50% w-fit h-[90%] max-h-[25rem] min-w-[400px]'
          />
        </div>
      </HeroCurves>
    </section>
  );
}
export default Page