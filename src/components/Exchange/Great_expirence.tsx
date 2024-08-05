import React from 'react'
import imagethree from "../../../public/Nelle.png";
import Image from 'next/image';

const Great_expirence = () => {
  return (
    <div  className='great_expirience px-5 py-10 flex justify-center gap-5'>
    <div data-aos="fade-up" className='text_container sm:w-1/2 space-y-5'>
      <h3 className=' text-2xl sm:text-3xl font-bold text-lightforeground '>
        Great expirence <br />
        <span className=' text-foreground'>with Topline</span>
      </h3>
      <p className=' w-14 h-1 md:h-2 rounded mt-3 bg-background'></p>

      <p className='text-base md:text-lg'>
        Topline is an online site and a p2admin platform that allows users
        to buy, sell and/ or exchange digital and fiat assets safely. Owned
        and managed by CoinBase Business Services established and
        Incoperated in Nigeria.
      </p>
      <button data-aos="fade-down-right" data-aos-offset="10" className='text-lg bg-background HomeBtn px-5 py-1 rounded-full text-white font-medium'>
        Discover
      </button>
    </div>
    <Image
      src={imagethree}
      alt='crypto'
      width={300}
      height={300}
      className='hidden sm:block'
      data-aos="fade-down"
    />
  </div>
  )
}

export default Great_expirence