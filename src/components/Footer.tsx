import React from 'react'
import { Logo } from './Navbar'

const Footer = () => {
  return (
    <footer className='font-poppins relative bg-zinc-900 text-white py-16 px-10 grid gap-y-10 md:grid-cols-3 gap-x-20'>
      <div className='first-box space-y-7 text-sm font-light'>
      <div className='flex justify-center items-center w-fit gap-1'>
        <svg
          width='28'
          height='24'
          viewBox='0 0 18 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.8046 13.4684H9.43484V4.14225H0.109375V2.77246H10.8046V13.4684Z'
            fill='white'
          />
          <path
            d='M0.108995 0.0332031H17.3904V1.40348H0.108995V0.0332031Z'
            fill='white'
          />
          <path
            d='M8.06555 13.4681H6.69576V6.88173H0.109863V5.51172H8.06555V13.4681Z'
            fill='white'
          />
        </svg>
      <h1 className=' font-medium text-xl '>TOPLINE</h1>
    </div>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis
        sunt, hic culpa dolore nobis mollitia iure ullam eius vitae!
        </p>
        <div className="socials">
          icon
          icon
          icon
        </div>
      </div>
      <div className="second-box grid grid-cols-2">
        <div className=" space-y-7 text-sm font-light">
            <h5 className='font-medium text-xl space-y-3'>
          Topline Links
        </h5>
        <ul className='space-y-3'>
          <li>Home</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Sell</li>
          <li>Contact us</li>
        </ul>  
        </div>
    
        <div className="space-y-7 text-sm font-light">
        <h5 className='font-medium text-xl space-y-3'>
          Contact Us
        </h5>
       <ul className='space-y-3'>
        <li>1234567899</li>
        <li>email.com</li>
        <li>Address goes here</li>
       </ul>
      </div>
      </div>
      <div className='last-box grid gap-2 grid-cols-4 w-full h-40'>
    <div className="bg-gray-500"></div>
    <div className="bg-gray-500"></div>
    <div className="bg-gray-500"></div>
    <div className="bg-gray-500"></div>
    <div className="bg-gray-500"></div>
    <div className="bg-gray-500"></div>
    <div className="bg-gray-500"></div>
    <div className="bg-gray-500"></div>
      </div>
      <p className=" font-thin text-sm absolute bottom-5 left-10">
      &copy; TopLine Trading 2024
      </p>
    </footer>
  );
}

export default Footer