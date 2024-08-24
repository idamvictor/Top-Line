"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Bars from "@/components/ui/Bars";
import { Button } from "./ui/button";
import { ChevronDown, Globe } from "lucide-react";
/**
 * Array of navigation links with name and corresponding link.
 */
const NavLinks = [
  {
    name: "About",
    link: "/About",
  },
  {
    name: "Exchange",
    link: "/Exchange",
  },
  {
    name: "Academy",
    link: "/Academy",
  },

  {
    name: "Signals",
    link: "/Signals",
  },
  {
    name: "Capital",
    link: "/Capital",
  },
  {
    name: "Community",
    link: "/Community",
  },
  {
    name: "Contact",
    link: "/ContactUs",
  },
];
/**
 * Array of additional navigation links with name and corresponding link.
 */
const MoreNavLinks = [
  {
    name: "Capital management",
    link: "/Management",
  },
  {
    name: "How to",
    link: "/How_To",
  },
  {
    name: "About",
    link: "/About",
  },
  {
    name: "Contact Us",
    link: "/ContactUs",
  },
  {
    name: "FAQ",
    link: "/FAQ",
  },
];

/**
 * Functional component representing the navigation bar of the website.
 * It displays the logo, navigation links, and a "More" dropdown menu for additional links.
 * @returns JSX element representing the navigation bar.
 */
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    if (toggleNav) {
      setToggleNav(false);
    } /* eslint-disable */
  }, [pathName]);

  useEffect(() => {
    if (!toggleNav) {
      return;
    }
    const handleResize = () => {
      setToggleNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [toggleNav]);
  return (
    <header id='nav' className=' bg-none max-w-[1620px] mx-auto absolute top-0 left-0 right-0 z-40 px-5 lg:px-10'>
      <nav className='  bg-none font-poppins font-light text-white py-3 left-0 top-0   md:py-7 flex justify-between  items-center'>
        {/* Logo */}
        <Link href='/'>
          <Logo />
        </Link>
        {/* middle Links */}
        <Links pathName={pathName} />
        {/* auth_btns and language */}
        <div className='flex justify-center items-center'>
          <div className='language md:flex  hidden  '>
            <Globe  className="w-4"/>
            <p className="flex justify-center items-center text-xs px-3">
              EN
              <ChevronDown className="w-5" />
            </p>
          </div>
          <Button className='bg-foreground hidden md:block' size='sm'>
            Sign In
          </Button>
        </div>
        {/* Link progressive bar */}
        <ProgressBar
          height='1.5px'
          color='#ffff'
          options={{ showSpinner: true }}
          shallowRouting
        />
        {/* mobile nav toggle*/}
        <div
          onClick={() => setToggleNav((prev) => !prev)}
          className='bars absolute right-6 cursor-pointer z-30 md:hidden'
        >
          <Bars
            handleClick={() => setToggleNav((prev) => !prev)}
            check={toggleNav}
          />
        </div>
        <AnimatePresence>
          {toggleNav && (
            <MobileNav handleClick={setToggleNav} pathName={pathName} />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};



/**
 * Functional component for rendering a logo with the text "TOPLINE".
 * @returns JSX element representing the logo.
 */
export const Logo = () => {
  return (
    <div className='flex  justify-center items-center w-fit gap-1 z-50'>
      <div className='logo bg-foreground h-10 w-10 rounded-full flex justify-center items-center'>
        <svg
          width='25'
          height='25'
          viewBox='0 0 18 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className=' '
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
      <h1 className=' text-white font-medium text-sm '>
        TOPLINE <br />
        Trading</h1>
    </div>
  );
};
/**
 * Functional component that generates a list of links based on the current path name.
 * @param {any} pathName - The current path name.
 * @returns JSX element representing a list of links.
 */
const Links = ({ pathName }: any) => {
  return (
    <ul className='hidden md:flex gap-3 lg:gap-x-10 text-sm z-30'>
      {NavLinks.map((link, index) => {
        return (
          <li
            key={index}
            className={`nav_links pb-1 ${
              pathName.startsWith(link.link) ? "active" : ""
            }`}
          >
            <Link href={link.link}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
/**
 * Functional component for rendering a mobile navigation bar.
 * returns {JSX.Element} A JSX element representing the mobile navigation bar.
 */
const MobileNav = ({ handleClick, pathName }: any) => {
  return (
    <motion.nav
      initial={{
        scale: 0,
        opacity: 0,
        translateY: -200,

        translateX: 200,
      }}
      animate={{
        scale: 1,
        translateY: 0,
        opacity: 1,
        translateX: 0,
      }}
      exit={{
        scale: 0,
        opacity: 0,
        translateY: -200,
        translateX: 200,
      }}
      className='mobile_nav absolute bg-background bg-opacity-5 text-slate-300 text-xl sm:text-2xl block md:hidden right-0 w-fit h-[97vh] z-20 top-14 rounded-lg shadow '
    >
      <ul className='text-base flex flex-col items-center justify-start pt-14 gap-y-5 h-full max-h-[90vh]'>
        {NavLinks.map((link, index) => {
          return (
            <li
              key={index}
              className={`text-center min-w-60   border-b-2 hover:border-b-foreground transition-all ease-in-out ${
                pathName.startsWith(link.link) ? "text-foreground border-b-foreground" : ""
              }`}
            >
              <Link href={link.link} onClick={() => handleClick(false)}>
                {link.name}
              </Link>
            </li>
          );
        })}
        <li></li>
      </ul>
    </motion.nav>
  );
};
export default Navbar;
