import { Routes } from "@/constant/Constants";
import Image from "next/image";
import Link from "next/link";

type pathname = {
    pathName: string;
}

const Userprofile: React.FC<pathname> = ({pathName}) => {
  return (
    <header>
      <Link
        className={`flex justify-start items-center gap-5 mt-7 text-sm  ${
          pathName === Routes.userProfile
            ? "bg-[#606A08] border-l-4 border-l-white bg-opacity-[12%]"
            : "bg-[#230c36]"
        }`}
        href={Routes.userProfile}
      >
        <Image
          src="/Icons/Rectangle2.png"
          alt="Profile link"
          width={40}
          height={30}
          className="ml-3"
        />
        <h4 className="flex flex-col text-sm font-medium my-3">
          Emmanuel Ginger{" "}
          <span className="text-xs font-light">Freemium plan</span>
        </h4>
      </Link>
    </header>
  );
}

export default Userprofile