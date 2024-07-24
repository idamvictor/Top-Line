import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
const NavLinks=[
    {
        name:"Exchange",
        link:"",
    },
    {
        name:"Mentorship",
        link:"",
    },
    {
        name:"Community",
        link:"",
    },
    {
        name:"Signal service",
        link:"",
    },
    {
        name:"Capital management",
        link:"",
    },
]
const Navbar = () => { 
  return (
    <nav className='bg-slate-100 py-3 px-3 flex justify-between  md:justify-evenly items-center'>
      <Logo />
      <FaBarsStaggered className=" text-2xl md:hidden mr-3 cursor-pointer"/>
      <Links />
      <p className="hidden md:flex nav_links">More</p>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className='flex justify-center items-center w-fit gap-1'>
      <div className='logo bg-background h-14 w-14 rounded-full flex justify-center items-center'>
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
      </div>
      <h1 className=' text-black font-bold text-xl '>TOPLINE</h1>
    </div>
  );
};
const Links = () => {
  return (
    <ul className="hidden md:flex gap-3 font-medium">
        {
            NavLinks.map((link, index)=>{
                return(
                   <li key={index} className="nav_links">
                        {link.name}
                   </li>
                )
            })
        }
    </ul>
  );
};
export default Navbar;