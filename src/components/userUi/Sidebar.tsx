import Image from "next/image";
import { Routes } from "@/constant/Constants";
import Link from "next/link";


const NavLinks = [
  // {
  //   name: "Emmanuel Oladoyin",
  //   icons: "/Icons/Rectangle.png",
  //   link: Routes.userProfile,
  // },
  {
    name: "Home",
    icons: "/Icons/Vector.svg",
    link: Routes.userHome,
  },
  {
    name: "My Courses",
    icons: "/Icons/graduate.svg",
    link: Routes.userCourses,
  },
  {
    name: "All Courses",
    icons: "/Icons/book.svg",
    link: Routes.userAllCourses,
  },
  {
    name: "Upcoming Classes",
    icons: "/Icons/class.svg",
    link: Routes.userUpcoming,
  },
  {
    name: "Help & Support",
    icons: "/Icons/Help.svg",
    link: Routes.userUpcoming,
  },
];

function Sidebar() {
  return (
    <aside className=" lg:block lg:bg-[#160623] text-serene-ash lg:fixed fixed z-50 bg-[#160623] top-20 w-[15rem] h-[30rem] pt-2  lg:top-0 lg:z-[1000] lg:bottom-0 lg:h-full lg:w-[12.625rem] xl:w-[15.625rem] text-white">
      <div className="w-36 mx-auto py-3">
        <Image
          src="/assets/Home/topline.svg"
          width={130}
          height={130}
          alt="Topline Icon"
        />
      </div>
      <hr className="mt-5 mx-auto w-52 border-t-1 border-[#C2CFD6]" />

      <div>
        <Link
          className="flex justify-start items-center gap-5 mt-7  text-sm bg-[#230c36] "
          href={Routes.userProfile}
        >
          {" "}
          <Image
            src="/Icons/Rectangle2.png"
            alt="Profile link"
            width={40}
            height={30}
            className="ml-3"
          />
          <h4 className="flex flex-col text-base my-3">
            Emmanuel Ginger <span className="text-xs">Freemium plan</span>
          </h4>
        </Link>
      </div>

      {NavLinks.map((link, index) => {
        return (
          <nav key={index}>
            <ul>
              <li>
                <Link className="flex gap-4 ml-2 mt-5 text-xs" href={link.link}>
                  <Image
                    src={link.icons}
                    alt="navigation"
                    width={20}
                    height={20}
                  />
                  {link.name}
                </Link>
              </li>
            </ul>
          </nav>
        );
      })}
    </aside>
  );
}

export default Sidebar;
