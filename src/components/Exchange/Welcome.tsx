import React from 'react'
import imagetwo from "../../../public/Layer2.png";
import exhangeImage from "../../../public/change-currency-svgrepo-com.svg";
import Image from 'next/image';

const Welcome = () => {
  return (
    <div  className='Welcome  relative flex justify-center p-10 items-center mx-auto max-w-[1000px] bg-white'>
    <Image
      src={imagetwo}
      alt='crypto'
      width={300}
      height={300}
      className='hidden md:block w-[50%] '
      data-aos="fade-down"
      data-aos-offset="5"
    />
    {/* less opac inmage
    <Image
          src={exhangeImage}
          alt={"question"}
          width={200}
          height={200}
          className='z-20 right-5 -top-36 opacity-25 absolute   '
        /> */}
    <div className='txt-btn  md:w-[50%]' data-aos="fade-up" data-aos-offset="5">
      <h2 className='font-bold pb-2 text-2xl md:text-3xl text-foreground '>
        Welcome to Topline
      </h2>
      <p className=' text-base md:text-lg leading-8 text-black text-left'>
        We have the best rates . Simply start your exchange right now. Sign
        up for our Affiliate program and earn commission from each exchange.
        The earnings are credited in your account instantly and can be
        withdrawn right away. Also note some exchange directions are hidden
        for unregistered user. To ensure to have access to all our exchange
        directions and benefits kindly sign up and verify your identity.
      </p>
      <button data-aos="fade-right" data-aos-offset="5"  className='px-8 py-2 HomeBtn rounded-full bg-background text-white font-medium text-base mt-5 md:text-lg transition-all ease-in-out'>
        Discover
      </button>
    </div>
  </div>
  )
}

export default Welcome