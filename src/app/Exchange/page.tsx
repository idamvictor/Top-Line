/**
 * Functional component representing the Exchange section of the website.
 * Displays information about cryptocurrency exchange rates, reserves, and recent exchanges.
 * Allows users to discover more about the platform and sign up for services.
 * @returns JSX element containing the Exchange section content.
 */
'use client'
import React from "react";
import image from "../../../public/excHero.png";
import imagetwo from "../../../public/Layer2.png";
import imagethree from "../../../public/Nelle.png";
import Image from "next/image";
import Card from "@/Ui/card";
import { FaArrowRightLong, FaBtc, FaEthereum, FaStar } from "react-icons/fa6";
import { CiBank } from "react-icons/ci";
import { TbArrowsDoubleSwNe } from "react-icons/tb";

const Exchange = () => {
  return (
    <section className='overflow-x-hidden  bg-white'>
      <div className='relative hero_wraapper bg-background justify-center items-center  '>
        <div className=' flex pt-10 text-white pb-3 px-10 justify-center items-center'>
          <div className='text_btn md:block flex flex-col justify-between items-center w-50% max-w-[500px]'>
            <h1 className='text-lg sm:text-xl font-normal mb-5'>
              We provide easy solution to exchange your{" "}
              <span className='text-2xl sm:text-3xl font-bold pl-1'>
                Cryptocurrency/ GiftCard for Cash
              </span>
            </h1>
            <p className='font-normal text-base mb-9'>
              Topline is a platform for trading your bitcoin and giftcard at the
              best rate, why not give us a trial.
            </p>
            <button className='bg-white ExchangeBtn text-black px-6 py-3 excha rounded-full'>
              Get Started
            </button>
          </div>
          <Image
            src={image}
            alt='crypto'
            width={400}
            height={400}
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
      {/* welcome */}
      <div className='Welcome relative flex justify-center p-10 items-center bg-white'>
        <Image
          src={imagetwo}
          alt='crypto'
          width={300}
          height={300}
          className='hidden md:block w-[50%] '
        />
        <div className='txt-btn  md:w-[50%]'>
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
          <button className='px-8 py-2 HomeBtn rounded-full bg-background text-white font-medium text-base mt-5 md:text-lg transition-all ease-in-out'>
            Discover
          </button>
        </div>
      </div>

      {/* rates */}
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

        <div className='grid m-5 gap-y-5 sm:grid-cols-3 bg-white w-[80%] max-w-[1000px] mx-auto py-5 rounded-xl'>
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

      {/* great expirence */}
      <div className='great_expirience px-5 py-10 flex justify-center gap-5'>
        <div className='text_container sm:w-1/2 space-y-5'>
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
          <button className='text-lg bg-background HomeBtn px-5 py-1 rounded-full text-white font-medium'>
            Discover
          </button>
        </div>
        <Image
          src={imagethree}
          alt='crypto'
          width={300}
          height={300}
          className='hidden sm:block'
        />
      </div>

      {/* trades */}
      <div className='trade overflow-hidden relative flex items-end  justify-center bg-background min-h-96 '>
        <div className='contaiiner bg-white shadow-xl z-20 border-2 rounded-xl w-fit min-w-[] py-3 px-5 my-10 sm:my-0 sm:px-24'>
          <h4 className=' text-2xl my-5 sm:my-10 text-center flex flex-col justify-center items-center'>
            How to
            <span className=' w-10 h-1 rounded mt-3 bg-background'></span>
          </h4>

          <div className='inner container flex gap-10 flex-wrap my-5 justify-center'>
            <Card className='flex flex-col items-center justify-evenly sm:min-w-[150px] sm:h-[150px] min-w-[120px] h-[120px]'>
              Icon
              <p>Bitcoin</p>
            </Card>
            <Card className='flex flex-col items-center justify-evenly sm:min-w-[150px] sm:h-[150px] min-w-[120px] h-[120px]'>
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
        <div className='border_div w-full h-[2px] bg-white absolute bottom-0'></div>
      </div>

      {/* blogpost */}
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

      {/* reviews */}
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
        <div className='text-center space-y-5 '>
          <h6 className=' font-bold text-white text-lg md:text-2xl '>
            10,000 Satisfied clients around the world
          </h6>
          <p className='max-w-80 mx-auto text-white text-sm md:text-base '>
            Yeah! we’re proud with numbers. We’ve helped thousands of clients
            all around the world with our bespoke service. Hover ontop of them
            pic to view their testimonials.
          </p>
          <div className='bubules_container relative  flex justify-center items-center'>
           
           
           {/* comment/ review One TOP RIGHT*/}
            <div className=' top-right-pop-review opacity-0 transition-all ease-in-out absolute right-5 top-5 max-w-[300px] w-fit h-fit flex items-center justify-center'>
              <div className="triangle bg-slate-50 bg-opacity-55 h-5  w-7">
              </div>{/* this is the chat triangle */}
              <div className=' bg-slate-50 bg-opacity-55 border-none rounded-xl text-xs md:text-sm py-4 px-4 flex flex-col justify-start items-start '>
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
            <div className='top-left-pop-review opacity-0 transition-all ease-in-out absolute top-5 left-5 max-w-[300px] w-fit h-fit flex items-center justify-center'>
              <div className="triangle bg-slate-50 bg-opacity-55 h-5  w-7">
              </div>{/* this is the chat triangle */}
              <div className=' bg-slate-50 bg-opacity-55 border-none rounded-xl text-xs md:text-sm py-4 px-4 flex flex-col justify-start items-start '>
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
           <div className=' pop-review opacity-0 transition-all ease-in-out absolute bottom-5 left-5 max-w-[300px] w-fit h-fit flex items-center justify-center'>
              <div className="triangle bg-slate-50 bg-opacity-55 h-5  w-7">
              </div>{/* this is the chat triangle */}
              <div className=' bg-slate-50 bg-opacity-55 border-none rounded-xl text-xs md:text-sm py-4 px-4 flex flex-col justify-start items-start '>
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
           <div className=' pop-review opacity-0 transition-all ease-in-out absolute bottom-5 right-5 max-w-[300px] w-fit h-fit flex items-center justify-center'>
              <div className="triangle bg-slate-50 bg-opacity-55 h-5  w-7">
              </div>{/* this is the chat triangle */}
              <div className=' bg-slate-50 bg-opacity-55 border-none rounded-xl text-xs md:text-sm py-4 px-4 flex flex-col justify-start items-start '>
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

      {/* learn More */}
      <div className='kearn_more bg-background relative pt-14 border-2 border-white '>
        <div className='header flex flex-col bg-white w-full pl-10 pb-2 md:pb-1 md:pl-20  text-foreground absolute top-0'>
          <p className='text-sm sm:text-base'>Mentorship</p>
          <h6 className='font-bold text-xl md:text-2xl'>
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
        <div className='content w-full flex justify-start items-start gap-x-5	'>
          <article className=' sm:w-1/2 p-5 pt-0 sm:pl-24 z-20'>
            <p className=' text-white text-left'>
              No matter how well-informed and educated you think you are, the
              topics of blockchain and cryptocurrency are inexhaustible. You
              more than likely won’t start trading like a pro or go all the way
              to the deep depths of blockchain tech in a
            </p>
            <button className='px-5 py-2 rounded-full border border-white text-white mt-7'>
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
      {/* eail */}
      <div className='h-[70vh] sm:h-[60vh] bg-white mb-10 flex-col flex gap-y-5 justify-end items-center'>
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
    </section>
  );
};

export default Exchange;
