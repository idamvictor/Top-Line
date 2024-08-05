import React from 'react'
import { FaStar } from 'react-icons/fa6'

const Reviews = () => {
  return (
    <div className='reviews relative bg-background border-8 border-white'>
    <div className='border_div w-full h-[2px] bg-white absolute top-0'></div>
    <div className='border_div w-full h-[2px] bg-white absolute bottom-0'></div>

    {/* top curve */}
    <div className='top_shapeContainer bg-transparent relative overflow-hidden h-20 sm:h-40 m-0'>
      <div className='review_top_shape '>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            className='shape-fill'
            fill='#FFFFFF'
          ></path>
        </svg>
      </div>
    </div>
    
    {/* text_container */}
    <div className='text-center space-y-5 px-2 '>
      <h6 className=' font-bold max-sm:text-2xl text-white Hero_Txt '>
        10,000 Satisfied clients around the world
      </h6>
      <p className='max-w-[800px] mx-auto text-white text-sm md:text-lg '>
        Yeah! we’re proud with numbers. We’ve helped thousands of clients
        all around the world with our bespoke service. Hover ontop of them
        pic to view their testimonials.
      </p>
      <div className='bubules_container relative  flex justify-center items-center'>
       
       
       {/* comment/ review One TOP RIGHT*/}
        <div className=' top-right-pop-review opacity-0 transition-all ease-in-out absolute right-5 -top-7 max-w-[200px] w-fit h-fit flex items-center justify-center'>
          <div className="triangle bg-slate-50 bg-opacity-55 h-5  w-7">
          </div>{/* this is the chat triangle */}
          <div className=' bg-slate-50 bg-opacity-55 border-none rounded-xl text-xs md:text-sm py-1 px-4 flex flex-col justify-start items-start '>
            <p>
              Femi from Nigeria
            </p>
            <span className="flex items-center text-foreground">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <p className="font-bold">
              Wonderful service
            </p>
            <p>
              Good deal and wonderful service, Thank you.
            </p>
          </div>
        </div>
       {/* comment/ review TWo TOP LEFT*/}
        <div className='top-left-pop-review opacity-0 transition-all ease-in-out absolute -top-7 -left-5 max-w-[200px] w-fit h-fit flex items-center justify-center'>
          <div className="triangle bg-slate-50 bg-opacity-55 h-5  w-7">
          </div>{/* this is the chat triangle */}
          <div className=' bg-slate-50 bg-opacity-55 border-none rounded-xl text-xs md:text-sm py-1 px-4 flex flex-col justify-start items-start '>
            <p>
              Femi from Nigeria
            </p>
            <span className="flex items-center text-foreground">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <p className="font-bold">
              Wonderful service
            </p>
            <p>
              Good deal and wonderful service, Thank you.
            </p>
          </div>
        </div>
       {/* comment/ review Three Bottom LEFT*/}
       <div className=' pop-review opacity-0 transition-all ease-in-out absolute bottom-5 left-5 max-w-[200px] w-fit h-fit flex items-center justify-center'>
          <div className="triangle bg-slate-50 bg-opacity-55 h-5  w-7">
          </div>{/* this is the chat triangle */}
          <div className=' bg-slate-50 bg-opacity-55 border-none rounded-xl text-xs md:text-sm py-1 px-4 flex flex-col justify-start items-start '>
            <p>
              Femi from Nigeria
            </p>
            <span className="flex items-center text-foreground">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <p className="font-bold">
              Wonderful service
            </p>
            <p>
              Good deal and wonderful service, Thank you.
            </p>
          </div>
        </div>
       {/* comment/ review Four Top RIGHT*/}
       <div className=' pop-review opacity-0 transition-all ease-in-out absolute -bottom-5 -right-5 max-w-[200px] w-fit h-fit flex items-center justify-center'>
          <div className="triangle bg-slate-50 bg-opacity-55 h-5  w-7">
          </div>{/* this is the chat triangle */}
          <div className=' bg-slate-50 bg-opacity-55 border-none rounded-xl text-xs md:text-sm py-1 px-4 flex flex-col justify-start items-start '>
            <p>
              Femi from Nigeria
            </p>
            <span className="flex items-center text-foreground">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <p className="font-bold">
              Wonderful service
            </p>
            <p>
              Good deal and wonderful service, Thank you.
            </p>
          </div>
        </div>
        {/* End of reviews More can be added and mapped */}
        <svg
          width='655'
          height='262'
          viewBox='0 0 955 262'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className=' w-[25rem] md:w-auto'
        >
          <path
            d='M724.464 110.868C745.291 110.868 762.175 98.1887 762.175 82.5485C762.175 66.9084 745.291 54.2295 724.464 54.2295C703.636 54.2295 686.752 66.9084 686.752 82.5485C686.752 98.1887 703.636 110.868 724.464 110.868Z'
            fill='#D8D8D8'
          />
          <path
          className="top_left_ball fill-lightforeground"
            d='M141.245 146.757C175.27 146.757 202.853 126.044 202.853 100.493C202.853 74.9425 175.27 54.2295 141.245 54.2295C107.22 54.2295 79.6374 74.9425 79.6374 100.493C79.6374 126.044 107.22 146.757 141.245 146.757Z'
            fill=''
          />
          <path
          className="ball bottom_left_ball fill-lightforeground"
            d='M433.229 203.395C454.056 203.395 470.94 190.716 470.94 175.076C470.94 159.436 454.056 146.757 433.229 146.757C412.402 146.757 395.518 159.436 395.518 175.076C395.518 190.716 412.402 203.395 433.229 203.395Z'
            fill=''
          />
          <path
            d='M38.1925 210.686C59.0199 210.686 75.9039 198.007 75.9039 182.367C75.9039 166.727 59.0199 154.048 38.1925 154.048C17.3651 154.048 0.48114 166.727 0.48114 182.367C0.48114 198.007 17.3651 210.686 38.1925 210.686Z'
            fill='#D8D8D8'
          />
          <path
           className="bottom_left_ball fill-lightforeground"
            d='M826.772 179.842C847.599 179.842 864.483 167.163 864.483 151.523C864.483 135.883 847.599 123.204 826.772 123.204C805.944 123.204 789.06 135.883 789.06 151.523C789.06 167.163 805.944 179.842 826.772 179.842Z'
            fill=''
          />
          <path
            d='M734.92 261.155C755.747 261.155 772.631 248.476 772.631 232.836C772.631 217.195 755.747 204.517 734.92 204.517C714.092 204.517 697.208 217.195 697.208 232.836C697.208 248.476 714.092 261.155 734.92 261.155Z'
            fill='#D8D8D8'
          />
          <path
           className="top_right_ball fill-lightforeground"
            d='M916.382 57.0336C937.21 57.0336 954.094 44.3547 954.094 28.7145C954.094 13.0744 937.21 0.395508 916.382 0.395508C895.555 0.395508 878.671 13.0744 878.671 28.7145C878.671 44.3547 895.555 57.0336 916.382 57.0336Z'
            fill='#'
          />
          <path
            d='M591.542 156.85C612.369 156.85 629.253 144.171 629.253 128.531C629.253 112.891 612.369 100.212 591.542 100.212C570.714 100.212 553.83 112.891 553.83 128.531C553.83 144.171 570.714 156.85 591.542 156.85Z'
            fill='#D8D8D8'
          />
          <path
            d='M276.037 112.551C292.946 112.551 306.654 102.257 306.654 89.5591C306.654 76.8611 292.946 66.5674 276.037 66.5674C259.127 66.5674 245.42 76.8611 245.42 89.5591C245.42 102.257 259.127 112.551 276.037 112.551Z'
            fill='#D8D8D8'
          />
          <path
            d='M686.753 169.187C697.888 169.187 706.915 162.408 706.915 154.046C706.915 145.684 697.888 138.905 686.753 138.905C675.618 138.905 666.59 145.684 666.59 154.046C666.59 162.408 675.618 169.187 686.753 169.187Z'
            fill='#D8D8D8'
          />
          <path
            d='M452.27 115.915C468.355 115.915 481.394 106.123 481.394 94.0449C481.394 81.9664 468.355 72.1748 452.27 72.1748C436.186 72.1748 423.147 81.9664 423.147 94.0449C423.147 106.123 436.186 115.915 452.27 115.915Z'
            fill='#D8D8D8'
          />
          <path
            d='M235.71 194.984C246.845 194.984 255.872 188.205 255.872 179.843C255.872 171.481 246.845 164.702 235.71 164.702C224.574 164.702 215.547 171.481 215.547 179.843C215.547 188.205 224.574 194.984 235.71 194.984Z'
            fill='#D8D8D8'
          />
          <path
            d='M337.27 158.532C351.704 158.532 363.406 149.745 363.406 138.905C363.406 128.066 351.704 119.278 337.27 119.278C322.835 119.278 311.133 128.066 311.133 138.905C311.133 149.745 322.835 158.532 337.27 158.532Z'
            fill='#D8D8D8'
          />
        </svg>
      </div>
    </div>

    <div className='custom-shape-divider-bottom-1722029602 '>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
        fill='#FFFFFF'
      >
        <path
          d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
          className='shape-fill'
        ></path>
      </svg>
    </div>
  </div>
  )
}

export default Reviews