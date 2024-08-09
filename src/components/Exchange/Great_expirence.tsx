import React from 'react'
import imagethree from "../../../public/Nelle.png";
import Image from 'next/image';

const Great_expirence = () => {
  return (
    <div  className='great_expirience px-5 py-10 my-10 flex justify-center gap-5 max-w-[1200px] mx-auto'>
    <div data-aos="fade-up" data-aos-duration="400" data-aos-offset="0" className='text_container sm:w-1/2 space-y-5'>
      <h3 className=' text-2xl font-bold text-lightforeground '>
        Great expirence <br />
        <span className=' text-foreground'>with Topline</span>
      </h3>
      <p className=' w-14 h-1  rounded mt-3 bg-background'></p>

      <p className='text-sm leading-10'>
        Topline is an online site and a p2admin platform that allows users
        to buy, sell and/ or exchange digital and fiat assets safely. Owned
        and managed by CoinBase Business Services established and
        Incoperated in Nigeria.
      </p>
      <button  className='text-lg bg-background HomeBtn px-5 py-1 rounded-full text-white font-medium'>
        Discover
      </button>
    </div>
    <Image
      src={imagethree}
      alt='crypto'
      width={300}
      height={300}
      className='hidden sm:block'
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-offset="0"
    />
  </div>
  )
}

export default Great_expirence