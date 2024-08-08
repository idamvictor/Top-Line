import Image from 'next/image'
import React from 'react'
import { IoDiamond } from "react-icons/io5";
import HeroImage from '@/../public/About.png'
import HeroCurves from '@/components/ui/shared/HeroCurves'
import { FaMedal, FaPeopleGroup } from 'react-icons/fa6';
import { RiCustomerService2Line } from "react-icons/ri";

const Page = () => {
  return (
    <section className=' font-poppins space-y-14'>
      <HeroCurves>
        <div className='overflow-y-hidden md:w-[50%] space-y-4 text_btn md:block flex flex-col justify-between items max-md:items-start w-50% '>
          <p data-aos='fade-right' data-aos-offset='0' className=' text-xs'>
            HOME / ABOUT US
          </p>
          <h1
            data-aos='fade-up'
            data-aos-offset='0'
            className=' text-3xl leading-relaxed mb-5 font-bold max-sm:text-3xl'
          >
            Great service, <br />
            Professional support
          </h1>
          <p
            data-aos='fade-up'
            className='font-normal  text-lg lg:text-base mb-9'
          >
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
      <div className='quote_container max-w-[500px] mx-auto mt-10'>
        <p className='gradient-text text-center font-poppins font-extrabold  text-lg leading-10'>
          “Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec
          semper leo ut lobortis condimentum. Orci varius natoque penatibus et
          magnis”
        </p>
        <p className='Line h-1 w-14 mx-auto my-5 bg-background rounded-full' />
        <p className='quote_author text-center text-sm'>
          Ramon Ridwan • CEO CoinBase
        </p>
      </div>

      <div className='About_coinbase max-w-[800px] py-5 flex flex-col justify-center items-center border border-foreground shadow shadow-slate-100 rounded-2xl mx-auto'>
        <Image
          src={HeroImage}
          alt='crypto'
          width={300}
          height={300}
          className=' w-fit mt-5 '
        />

        <div className='Txt max-w-[500px]  text-center'>
          <h3 className=' text-xl mt-10 font-extrabold text-lightforeground'>
            About CoinBase
          </h3>
          <p className='Line h-1 w-10 mx-auto my-2 mb-5 bg-background rounded-full' />
          <p className=' text-sm leading-10 text-zinc-900 font-medium'>
            Curabitur egestas odio ac diam mollis, vitae semper quam elementum.
            Maecenas finibus laoreet turpis, quis eleifend odio rhoncus vel.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. In hac habitasse.
          </p>
        </div>

        <div className='icons flex justify-center items-center gap-5'>
          <IoDiamond className='font-extrabold text-2xl my-4' />
          <FaMedal className='font-extrabold text-2xl my-4' />
          <FaPeopleGroup className='font-extrabold text-2xl my-4' />
          <RiCustomerService2Line className='font-extrabold text-2xl my-4' />
        </div>
      </div>

<div className="ourhistory text-center">
<h3 className=' text-xl mt-10 font-extrabold text-lightforeground'>
          Our history
        </h3>
        <p className='Line h-1 w-10 mx-auto my-2 mb-5 bg-background rounded-full' />
</div>

      <div className='meet_the_team text-center'>
        <h3 className=' text-xl mt-10 font-extrabold text-lightforeground'>
          Meet the team
        </h3>
        <p className='Line h-1 w-10 mx-auto my-2 mb-5 bg-background rounded-full' />
        <p className=' text-sm leading-10 text-zinc-900 font-medium max-w-[500px] mx-auto'>
          Meet the team that makes the process of this system fast and painless
          as possible to provide you with good result
        </p>
      </div>
    </section>
  );
}
export default Page