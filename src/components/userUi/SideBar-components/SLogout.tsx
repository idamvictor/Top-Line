import Image from "next/image";
import Link from "next/link";

type Sidebar = {
  name: string;
  icons: string;
  color: string;
  link: string;
  pathName: string
};

const SLogout: React.FC<Sidebar> = ({ name, icons, color, link,pathName}) => {
  return (
    <>
      <Link
        className={`flex flex-col pl-4 py-2 ${pathName === link && "bg-[#606A08]"}`}
        href={link}
      >
        <div className="flex gap-4">
          <Image src={icons} alt="navigation" width={25} height={25} />
          <h3 className={`text-sm font-medium ${color}`}>{name}</h3>
        </div>
      </Link>
    </>
  );
};

export default SLogout