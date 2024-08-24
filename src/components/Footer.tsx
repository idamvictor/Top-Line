import React from 'react'
import { Logo } from './Navbar'

const Footer = () => {
  return (
    <footer className='font-poppins relative text-white py-16  grid gap-y-10 md:grid-cols-3 gap-x-20 px-5 lg:px-16 border-t border-purple-950 '>
      <div className='first-box space-y-7 text-sm font-light'>
        <div className='flex justify-center items-center w-fit gap-1'>
          <Logo />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis
          sunt, hic culpa dolore nobis mollitia iure ullam eius vitae!
        </p>
        <div className='socials'>icon icon icon</div>
      </div>

      <div className='second-box flex md:justify-end flex-wrap gap-20 col-span-2 '>
        <div className=' space-y-7 text-sm font-light'>
          <h5 className='font-medium text-xl space-y-3'>Topline Links</h5>
          <ul className='space-y-3'>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Sell</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className='space-y-7 text-sm font-light'>
          <h5 className='font-medium text-xl space-y-3'>Contact Us</h5>
          <ul className='space-y-3'>
            <li>1234567899</li>
            <li>email.com</li>
            <li>Address goes here</li>
          </ul>
        </div>

        <div className='space-y-7 text-sm font-light'>
          <h5 className='font-medium text-xl space-y-3'>Contact Us</h5>
          <ul className='space-y-3'>
            <li>1234567899</li>
            <li>email.com</li>
            <li>Address goes here</li>
          </ul>
        </div>
      </div>


      <p className=' font-thin text-sm absolute bottom-5 md:left-14 left-4'>
        &copy; TopLine Trading 2024
      </p>
    </footer>
  );
}

export default Footer