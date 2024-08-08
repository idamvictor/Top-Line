import React from 'react'

const HeroCurves = ({children}: any) => {
  return (
    <div className=' relative hero_wraapper bg-background justify-center items-center p-0 '>
        <div className=' h-[80vh] gap-5 font-poppins  xl:min-h-[500px] max-h-[500px] flex  pt-10 text-white pb-3 px-10 justify-center items-center'>
        {children}
        </div>

        <div className='curve relative h-[106px] border-b-2 border-white '>
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
        </div>
      </div>
  )
}

export default HeroCurves