import Image from "next/image";
import Link from "next/link";

type Sidebar = {
  name: string;
  icons: string;
  about: string;
  link: string;
  pathName:string
};

const NAV_LINK: React.FC<Sidebar> = ({ name, icons, about, link,pathName }) => {
  return (
    <>
      <Link className={`text-sm pl-4 py-3${
                pathName === link
                  ? " bg-[#606A08] bg-opacity-[12%] p border-l-4 border-l-white  pl-4"
                  : ""
              }`} href={link}>
        <div className="flex gap-4">
          <Image src={icons} alt="navigation" width={20} height={20} />
          <h3 className="text-sm font-medium">{name}</h3>
        </div>
        <div className="text-xs pl-9">{about}</div>
      </Link>
    </>
  );
};
export default NAV_LINK
