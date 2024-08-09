import React from 'react'

const Email = () => {
  return (
    <div data-aos="zoom-in" data-aos-offset="5" className=' mt-5 bg-white pb-10 flex-col flex gap-y-5 justify-end items-center'>
        <h4 className=' text-2xl my-10 text-center flex flex-col justify-center items-center'>
          Subscribe to our newsletter
          <span className=' w-10 h-1 rounded mt-3 bg-background'></span>
        </h4>
        <p className='text-center text-base'>
          Subscribe to our newsletter for daily/weekly <br /> update of our
          products and services.
        </p>
        <div className='inputContainer flex flex-wrap justify-center gap-3 items-center'>
          <div className='input bg-white px-3 border-foreground border-2 rounded-full'>
            <input
              type='text'
              placeholder='Email here'
              className='w-full md:w-96  outline-none border-none bg-transparent  my-3 '
            />
          </div>
          <button className='px-5 py-2 bg-background text-white rounded-full'>
            Discover
          </button>
        </div>
      </div>
  )
}

export default Email