"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Bars from "@/components/ui/Bars";
/**
 * Array of navigation links with name and corresponding link.
 */
const NavLinks = [
  {
    name: "Exchange",
    link: "/Exchange",
  },
  {
    name: "Mentorship",
    link: "/Mentorship",
  },
  {
    name: "Community",
    link: "/Community",
  },
  {
    name: "Signal service",
    link: "/Signal",
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
    <nav className=' font-poppins text-black bg-white py-3 fixed top-0 z-40 w-full px-3 md:px-10 md:py-5 flex justify-between   items-center max-w-[1620px]   '>
      <Link href='/'>
        <Logo />
      </Link>
      <div
        onClick={() => setToggleNav((prev) => !prev)}
        className='bars absolute right-6 cursor-pointer z-30 md:hidden'
      >
        <Bars
          handleClick={() => setToggleNav((prev) => !prev)}
          check={toggleNav}
        />
      </div>

      <Links pathName={pathName} />
      <NavigationMenu className='hidden md:block '>
        <NavigationMenuList>
          <NavigationMenuItem className=''>
            <NavigationMenuTrigger
              className={`bg-none nav_links h-fit w-fit p-0 m-0 text-black hover:bg-none focus:bg-none ${
                pathName ? "active" : ""
              }`}
            >
              More
            </NavigationMenuTrigger>
            <NavigationMenuContent className='px-0 text-sm font-medium m-0  flex flex-col justify-center items-center min-w-[15rem]'>
              {MoreNavLinks.map((link, index) => {
                return (
                  <Link href={link.link} legacyBehavior passHref>
                    <NavigationMenuLink className='m-0 w-full p-2 hover:bg-lightforeground'>
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                );
              })}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div
        className=' more_options w-full bg-white  h-0 overflow-hidden   absolute z-20 top-[3.8rem] lg:top-[3.7rem]  
       inset-0 transition-all ease-in-out '
      >
        <ul className='MoreNavLinks flex items-center justify-evenly gap-2 lg:gap-5 mt-7 mb-3 '>
          {MoreNavLinks.map((link, index) => {
            return (
              <li
                key={index}
                className=' inset-0 nav_links  text-sm lg:text-base'
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ProgressBar
        height='3px'
        color='#464D09'
        options={{ showSpinner: true }}
        shallowRouting
      />
      <AnimatePresence>
        {toggleNav && <MobileNav handleClick={setToggleNav} />}
      </AnimatePresence>
    </nav>
  );
};

/**
 * Functional component for rendering a mobile navigation bar.
 * returns {JSX.Element} A JSX element representing the mobile navigation bar.
 */
const MobileNav = ({ handleClick }: any) => {
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
      className='mobile_nav absolute bg-white text-foreground text-xl sm:text-2xl block md:hidden right-0 w-fit h-[97vh] z-20 top-14 rounded-lg'
    >
      <ul className='text-base flex flex-col items-center justify-start pt-14 gap-y-5 h-full max-h-[90vh]'>
        {NavLinks.map((link, index) => {
          return (
            <li key={index} className=' text-center min-w-60  border-b-2 '>
              <Link href={link.link} onClick={() => handleClick(false)}>
                {link.name}
              </Link>
            </li>
          );
        })}
        <li>
          <NavigationMenu className='block w-2 '>
            <NavigationMenuList>
              <NavigationMenuItem className=''>
                <NavigationMenuTrigger className='bg-none nav_links h-fit w-fit p-0 m-0 text-foreground hover:bg-none focus:bg-none'>
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent className='px-0 text-sm font-medium m-0  flex flex-col justify-center items-center min-w-[15rem]'>
                  {MoreNavLinks.map((link, index) => {
                    return (
                      <Link href={link.link} legacyBehavior passHref>
                        <NavigationMenuLink className='m-0 w-full p-2 hover:bg-lightforeground'>
                          {link.name}
                        </NavigationMenuLink>
                      </Link>
                    );
                  })}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </li>
      </ul>
    </motion.nav>
  );
};

/**
 * Functional component for rendering a logo with the text "TOPLINE".
 * @returns JSX element representing the logo.
 */
export const Logo = () => {
  return (
    <div className='flex justify-center items-center w-fit gap-1 z-50'>
      <div className='logo bg-background h-10 w-10 rounded-full flex justify-center items-center'>
        <svg
          width='20'
          height='20'
          viewBox='0 0 18 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='  '
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
      <h1 className=' text-black font-bold text-lg md:text-2xl '>TOPLINE</h1>
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
    <ul className='hidden md:flex gap-3 lg:gap-x-10  font-medium z-30'>
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
export default Navbar;
