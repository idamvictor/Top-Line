import React from "react";
import image from "../../../public/excHero.png";
import imagetwo from "../../../public/Layer2.png";
import Image from "next/image";
import Card from "@/Ui/card";
const Exchange = () => {
  return (
    <section className='overflow-x-hidden  bg-white'>
      <div className='relative hero_wraapper bg-background justify-center items-center  '>
        <div className=' flex pt-10 text-white pb-3 px-10 justify-center items-center'>
          <div className='text_btn md:block flex flex-col justify-between items-center w-50% max-w-[500px]'>
            <h1 className='text-xl sm:text-2xl font-normal mb-5'>
              We provide easy solution to exchange your{" "}
              <span className='text-2xl sm:text-3xl font-bold'>
                Cryptocurrency/ GiftCard for Cash
              </span>
            </h1>
            <p className='font-normal text-base mb-9'>
              Topline is a platform for trading your bitcoin and giftcard at the
              best rate, why not give us a trial.
            </p>
            <button className='bg-white text-black px-6 py-3 rounded-full'>
              GET STARTED
            </button>
          </div>
          <Image
            src={image}
            alt='crypto'
            width={500}
            height={500}
            className='hidden md:block'
          />
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
        </div>
      </div>
      <div className='Welcome flex justify-center p-10 items-center bg-white'>
        <Image
          src={imagetwo}
          alt='crypto'
          width={300}
          height={300}
          className='hidden md:block w-[50%] '
        />
        <div className='txt-btn  md:w-[50%]'>
          <h2 className='font-bold pb-2 text-xl md:text-2xl text-foreground '>
            Welcome to Topline
          </h2>
          <p className=' text-sm md:text-base leading-8 text-black text-left'>
            We have the best rates . Simply start your exchange right now. Sign
            up for our Affiliate program and earn commission from each exchange.
            The earnings are credited in your account instantly and can be
            withdrawn right away. Also note some exchange directions are hidden
            for unregistered user. To ensure to have access to all our exchange
            directions and benefits kindly sign up and verify your identity.
          </p>
          <button className='px-8 py-2 rounded-full bg-background text-white font-medium text-sm mt-5 md:text-base'>
            Discover
          </button>
        </div>
      </div>

      <div className='rates bg-background grid'>
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

        <div className='grid m-5 grid-cols-3 bg-white w-[80%] max-w-[1000px] mx-auto'>
          <div className=''>
            <p className='border-b border-b-black text-center'>DAtareates</p>
            <div className='info-wrapper grid grid-cols-2'>
              <div className='icon'></div>
              <div className='text'>
                <p>We Buy @ $350/$</p>
                <p>We Buy @ $350/$</p>
              </div>
            </div>
            <div className='info-wrapper grid grid-cols-2'>
              <div className='icon'></div>
              <div className='text'>
                <p>We Buy @ $350/$</p>
                <p>We Buy @ $350/$</p>
              </div>
            </div>
          </div>
          <div className=''>
            <p className='border-b border-b-black'>DAtareates</p>
          </div>
          <div className=''>
            <p className='border-b border-b-black'>DAtareates</p>
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
        </div>
      </div>

      <div className='trade relative flex items-end  justify-center bg-background h-96 '>
        <div className='contaiiner bg-white shadow-xl z-20 border-2 rounded-xl w-fit min-w-[] py-3 px-24'>
          <h4 className=' text-2xl my-10 text-center flex flex-col justify-center items-center'>
            Trade from anywhere
            <span className=' w-10 h-1 rounded mt-3 bg-background'></span>
          </h4>

          <div className='inner container flex gap-10 flex-wrap my-5'>
            <Card className='flex flex-col items-center justify-evenly min-w-[150px] h-[150px]'>
              Icon
              <p>Bitcoin</p>
            </Card>
            <Card className='flex flex-col items-center justify-evenly min-w-[150px] h-[150px]'>
              Icon
              <p>Gift cards</p>
            </Card>
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
      </div>
      {/* <div className="expirience">
      <div className='top_curve'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              fill='black'
            ></path>
          </svg>
          </div>
      </div> */}
      <div className='mt-20'>
        <h4 className=' text-2xl my-10 text-center flex flex-col justify-center items-center'>
          Trade from anywhere
          <span className=' w-10 h-1 rounded mt-3 bg-background'></span>
        </h4>
        <p className='text-center text-sm'>
          Get to know your stuff via our blog post.
        </p>
        <div className='cards flex justify-center my-5 md:my-10 gap-5 items-center md:flex-row flex-col scale-[0.9]  '>
          <div className='p-8 md:grayscale gap-5 flex flex-col items-start text-xs w-fit md:max-w-72 rounded-xl  bg-white text-center text-foreground border-foreground border shadow-xl'>
            <p className='text-xs text-left'>19 JUNE, 2019 | BUSINESS</p>
            <h6 className=' font-bold text-lg text-left'>
              ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
            </h6>
            <p className='text-left text-sm'>
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea...
            </p>
            <button className='bg-background px-5 py-2 text-white font-bold rounded-full'>
              Read More
            </button>
          </div>
          <div className='p-8 gap-5 z-10 flex flex-col items-start text-xs w-fit md:scale-[1.3] md:max-w-72 rounded-xl  bg-white text-center text-foreground border-foreground border shadow-xl'>
            <p className='text-xs text-left'>19 JUNE, 2019 | BUSINESS</p>
            <h6 className=' font-bold text-lg text-left'>
              ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
            </h6>
            <p className='text-left text-sm'>
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea...
            </p>
            <button className='bg-background px-5 py-2 text-white font-bold rounded-full'>
              Read More
            </button>
          </div>
          <div className='p-8 md:grayscale gap-5 flex flex-col items-start text-xs w-fit md:max-w-72 rounded-xl  bg-white text-center text-foreground border-foreground border shadow-xl'>
            <p className='text-xs text-left'>19 JUNE, 2019 | BUSINESS</p>
            <h6 className=' font-bold text-lg text-left'>
              ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
            </h6>
            <p className='text-left text-sm'>
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea...
            </p>
            <button className='bg-background px-5 py-2 text-white font-bold rounded-full'>
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* learn More */}
      <div className='kearn_more bg-background relative pt-14 pd:mt-20'>
        <div className="header flex flex-col bg-white w-full pl-10 pb-1 md:pl-20  text-foreground absolute top-0">
          <p className="text-sm sm:text-base">
            Mentorship
          </p>
          <h6 className="font-bold text-xl md:text-2xl">
          Learn More About Crypto 
          </h6>
        </div>
        <div className='custom-shape-divider-top-1722011312'>
          <svg
            data-name='Layer 1'
            fill='white'
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
<div className="content w-full flex justify-start items-start gap-x-5	">
    <article className=" sm:w-1/2 p-5 pt-0 sm:pl-24 z-20">
          <p className=" text-white text-left">
            No matter how well-informed and educated you think you are, the
            topics of blockchain and cryptocurrency are inexhaustible. You more
            than likely won’t start trading like a pro or go all the way to the
            deep depths of blockchain tech in a
          </p>
          <button className="px-5 py-2 rounded-full border border-white text-white mt-7">
            Learn More
          </button>
        </article>
        <Image
            src={imagetwo}
            alt='crypto'
            width={400}
            height={400}
            className=' hidden sm:block absolute top-0 right-0'
          />
</div>
      
      </div>
      <div className="h-screen w-screen bg-white">

      </div>
    </section>
  );
};

export default Exchange;
