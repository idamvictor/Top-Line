import React from 'react'
  import AOS from "aos";
import 'aos/dist/aos.css'; 
const BlogPost = () => {

  return (
    <div className='mt-20'>
    <h4
    data-aos="fade-up" data-aos-offset="10"
    className='font-bold pb-2 text-2xl md:text-3xl my-5 text-center flex flex-col justify-center items-center'>
      Trade from anywhere
      <span className=' w-10 h-1 rounded mt-3 bg-background'></span>
    </h4>
    <p className='text-center text-lg'
    data-aos="fade-up" data-aos-offset="10"
    >
      Get to know your stuff via our blog post.
    </p>
    <div className='cards flex justify-center my-0 md:my-10 gap-5 items-center md:flex-row flex-col scale-[0.9]  '>
      <div  className='overflow-y-hidden p-8 md:grayscale gap-5 flex flex-col items-start text-xs w-fit md:max-w-72 rounded-xl  bg-white text-center text-foreground border-foreground border shadow-xl'>
        <p  data-aos="fade-up" className='text-xs text-left'>19 JUNE, 2019 | BUSINESS</p>
        <h6  data-aos="fade-up" className=' font-bold text-lg text-left'>
          ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
        </h6>
        <p  data-aos="fade-up" className='text-left text-sm'>
          Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
          voluptaria in. Ad mei modus quodsi complectitur, postea...
        </p>
        <button  data-aos="fade-up" className='bg-background px-5 py-2 text-white font-bold rounded-full'>
          Read More
        </button>
      </div>
      <div className='overflow-y-hidden p-8 gap-5 z-10 flex flex-col items-start text-xs w-fit md:scale-[1.3] md:max-w-72 rounded-xl  bg-white text-center text-foreground border-foreground border shadow-xl'>
        <p  data-aos="fade-up" className='text-xs text-left'>19 JUNE, 2019 | BUSINESS</p>
        <h6  data-aos="fade-up" className=' font-bold text-lg text-left'>
          ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
        </h6>
        <p  data-aos="fade-up" className='text-left text-sm'>
          Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
          voluptaria in. Ad mei modus quodsi complectitur, postea...
        </p>
        <button  data-aos="fade-up" className='bg-background px-5 py-2 text-white font-bold rounded-full'>
          Read More
        </button>
      </div>
      <div className='overflow-y-hidden p-8 md:grayscale gap-5 flex flex-col items-start text-xs w-fit md:max-w-72 rounded-xl  bg-white text-center text-foreground border-foreground border shadow-xl'>
        <p  data-aos="fade-up" className='text-xs text-left'>19 JUNE, 2019 | BUSINESS</p>
        <h6  data-aos="fade-up" className=' font-bold text-lg text-left'>
          ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
        </h6>
        <p  data-aos="fade-up" className='text-left text-sm'>
          Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
          voluptaria in. Ad mei modus quodsi complectitur, postea...
        </p>
        <button  data-aos="fade-up" className='bg-background px-5 py-2 text-white font-bold rounded-full'>
          Read More
        </button>
      </div>
    </div>
  </div>
  )
}

export default BlogPost