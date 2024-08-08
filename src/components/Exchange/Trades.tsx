import { CreditCard } from "lucide-react";
import React from "react";
import { FaBtc, FaCreditCard } from "react-icons/fa6";

const Trades = () => {
  return (
    <div className='trade overflow-hidden relative flex items-end  justify-center bg-background min-h-96 py-5'>
      <div className='contaiiner py-2 bg-white w-full max-w-[600px] flex justify-center flex-col items-center h-full shadow-xl z-20 border-2 rounded-xl '>
        <h4
          data-aos='fade-up'
          data-aos-offset='0'
          className=' font-bold pb-2 text-xl my-5 text-center flex flex-col justify-center items-center'
        >
          Trade from anywhere
          <span className=' w-10 h-1 rounded mt-3 bg-background'></span>
        </h4>
        <div className='cards_wrapper flex gap-10 p-5 max-sm:flex-col overflow-hidden'>
          <div
            data-aos='fade-up'
            data-aos-offset='0'
            className='text-xl md:text-xl flex border shadow shadow-slate-500 border-foreground text-center rounded-md space-y-5 p-6 flex-col justify-center items-center w-52 cardOne'
          >
            <FaBtc className=' text-4xl ' />
            <p>Bitcoin</p>
          </div>
          <div
            data-aos='fade-up'
            data-aos-offset='0'
            className='text-xl md:text-xl flex border shadow shadow-slate-500 border-foreground text-center rounded-md space-y-5 p-6 flex-col justify-center items-center w-52 cardOne'
          >
            <FaCreditCard className=' text-4xl' />
            <p>Gift Cards</p>
          </div>
        </div>
      </div>

      <div className='custom-shape-trade bottom-0 absolute'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
      <div className='border_div w-full h-[2px] bg-white absolute bottom-0'></div>
    </div>
  );
};

export default Trades;
