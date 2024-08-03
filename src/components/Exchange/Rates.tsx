import React from 'react'
import { FaArrowRightLong, FaBtc, FaEthereum, FaStar } from "react-icons/fa6";
import { CiBank } from "react-icons/ci";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
const Rates = () => {
  return (
    <div className='rates bg-background grid  relative'>
    <div className='custom-shape-divider-top-1721957864'>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
      >
        <path
          d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
          fill='white'
        ></path>
      </svg>
    </div>

    <div data-aos="fade-up" className='grid m-5 gap-y-5 sm:grid-cols-3 bg-white w-[80%] max-w-[1000px] mx-auto py-5 rounded-xl'>
      {/* our Rates Tab */}
      <div className=' space-y-5 text-sm'>
        <p className='border-b border-b-black text-center text-base md:text-xl font-bold text-lightforeground'>
          OUR RATES
        </p>
        <div className='info-wrapper flex justify-center gap-5 px-7'>
          <div className='icon flex gap-3'>
            <FaBtc className='text-2xl md:text-3xl text-lightforeground' />
            BTC
          </div>
          <div className='text'>
            <p>We Buy @ $350/$</p>
            <p>We Buy @ $350/$</p>
          </div>
        </div>
        <div className='info-wrapper flex justify-center gap-5 px-7'>
          <div className='icon flex gap-3'>
            <FaEthereum className='text-2xl md:text-3xl text-lightforeground' />
            ETH
          </div>
          <div className='text'>
            <p>We Buy @ $350/$</p>
            <p>We Buy @ $350/$</p>
          </div>
        </div>
      </div>
      {/*  Reserve Tab */}

      <div className='space-y-5 text-sm'>
        <p className='border-b border-b-black text-center text-base md:text-xl font-bold text-lightforeground'>
          OUR RESERVES
        </p>
        <div className='wrapper'>
          <div className='flex justify-center items-center'>
            <CiBank className='font-extrabold text-2xl md:text-3xl text-lightforeground' />
            Bank Transfer
          </div>
          <p className=' text-center font-medium text-gray-500'>
            <span>NGN</span>
            #3452030300303.24/$
          </p>
        </div>
        <div className='info-wrapper flex justify-center gap-5'>
          <div className='icon flex gap-3'>
            <FaBtc className='text-2xl md:text-3xl text-lightforeground' />
            BTC
          </div>
          <p>
            399.98 <span>BTC</span>{" "}
          </p>
        </div>
        <div className='info-wrapper flex justify-center gap-5'>
          <div className='icon flex gap-3'>
            <FaEthereum className='text-2xl md:text-3xl text-lightforeground' />
            ETH
          </div>
          <p>
            1000.00 <span>ETH</span>{" "}
          </p>
        </div>
      </div>

      {/* Latest Exchange  */}
      <div className=''>
        <p className='border-b border-b-black text-center text-base md:text-lg font-bold text-lightforeground'>
          LATEST EXCHANGES
        </p>
        <div className='historyBar h-[80%] flex items-center flex-col'>
          <div className='text-sm p-5 px-2 space-y-6 my-2 border-b-2'>
            <p className=' space-x-5'>
              Bitcoin BTC
              <FaArrowRightLong className='text-lightforeground' />
              Bank Transfer NGN
            </p>
            <p className='text-sm'>
              <span className='font-bold'>1.16</span>BTC
              <TbArrowsDoubleSwNe className='text-lightforeground' />
              <span>696152299929.23</span>
              NGN
            </p>
          </div>
        </div>

        <div className=''></div>
      </div>
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
      <div className='border_div w-full h-[2px] bg-white absolute bottom-0'></div>
    </div>
  </div>
  )
}

export default Rates