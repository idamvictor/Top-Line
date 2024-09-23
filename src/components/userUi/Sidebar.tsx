"use client"

import Image from "next/image";
import { Routes } from "@/constant/Constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Userprofile from "./SideBar-components/Userprofile";
import SLogout from "./SideBar-components/SLogout";
import NAV_LINK from "./SideBar-components/NAV_LINK";



const NavLinks = [
  // {
  //   name: "Emmanuel Oladoyin",
  //   icons: "/Icons/Rectangle.png",
  //   link: Routes.userProfile,
  // },
  {
    name: "Home",
    icons: "/Icons/Vector.svg",
    about:
      "Empowering Your Financial Journey with Expert Guidance and Market Insights.",
    link: Routes.userHome,
  },
  {
    name: "My Courses",
    icons: "/Icons/graduate.svg",
    about:
      "Track Your Progress and Master the Markets with Expert-Led Courses.",
    link: Routes.userCourses,
  },
  {
    name: "All Courses",
    icons: "/Icons/book.svg",
    about:
      "Master the Markets with Expert-Led Courses Designed for Every Trader.",
    link: Routes.userAllCourses,
  },
  {
    name: "Upcoming Classes",
    icons: "/Icons/class.svg",
    about: "Stay Ahead with Our Upcoming Classes ",
    link: Routes.userUpcoming,
  },
];

function Sidebar() {
const [active, setActive] = useState(false)
const pathName = usePathname();

return (
  <aside className="flex fixed flex-col py-8 max-w-full w-72 text-white bg-white bg-opacity-[0.03] rounded-lg">
    <header className=" mx-auto">
      <Image
        src="/assets/Home/topline.svg"
        width={130}
        height={130}
        alt="Topline Icon"
      />
    </header>
    <hr className="mt-5 ml-10 w-56 border-t-1 border-[#C2CFD6]" />
    <Userprofile pathName={pathName} />
    <hr className="mt-8 w-56 ml-10" />

    {/* Navigation Links */}

    <nav className="mt-9 flex flex-col gap-5 ">
      {NavLinks.map((link) => (
        <NAV_LINK
          name={link.name}
          about={link.about}
          icons={link.icons}
          link={link.link}
          pathName={pathName}
        />
      ))}
    </nav>

    <hr className="mt-8 w-56 ml-10" />
    <div className="mt-5 ml-3 flex flex-col gap-5">
      <SLogout
        name="Help & support"
        icons="/Icons/Help.svg"
        color="text-white"
        link={Routes.userSupport}
        pathName={pathName}
      />
      <SLogout
        name="Logout"
        icons="/Icons/logout-03.svg"
        color="text-[#FF8800]"
        link="ginger"
        pathName=""
      />
    </div>
  </aside>
);
}

export default Sidebar;
