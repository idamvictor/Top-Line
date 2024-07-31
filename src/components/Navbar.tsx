'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
const NavLinks=[
    {
        name:"Exchange",
        link:"/Exchange",
    },
    {
        name:"Mentorship",
        link:"/Mentorship",
    },
    {
        name:"Community",
        link:"/Community",
    },
    {
        name:"Signal service",
        link:"/Signal",
    },
    {
        name:"Capital management",
        link:"/Management",
    },
]
 
const Navbar = () => { 
 const pathName =usePathname();
  return (
    <nav className='bg-white py-3 px-3 md:py-5 flex justify-between  md:justify-evenly items-center '>
      <Link href="/">
      <Logo />
      </Link>
      <FaBarsStaggered className=" text-2xl md:hidden mr-3 cursor-pointer"/>
      <Links pathName={pathName}/>
      <p className="hidden md:flex nav_links">More</p>
    </nav>
  );
};

export const Logo = () => {
  return (
    <div className='flex justify-center items-center w-fit gap-1'>
      <div className='logo bg-background h-10 w-10 rounded-full flex justify-center items-center'>
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
const Links = ({pathName}: any) => {
  return (
    <ul className="hidden md:flex gap-3 font-medium">
        {
            NavLinks.map((link, index)=>{
                return(
                   <li key={index} className={`nav_links ${pathName.startsWith(link.link)?"active":""}`}>
                    <Link href={link.link}>
                    {link.name}
                    </Link>
                   </li>
                )
            })
        }
    </ul>
  );
};
export default Navbar;
