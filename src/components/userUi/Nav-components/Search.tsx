import Image from "next/image";

const Search = () => {
  return (
    <div className="w-full flex p-2 bg-[#221a36] rounded-lg ">
      <div className="relative text-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <input type="search" placeholder="Search" className="w-full p-2 pl-12 bg-transparent" />
        <Image
          src="/Icons/search.svg"
          alt=""
          width={20}
          height={20}
          className=" absolute left-3 top-3 text-gray-400"
        />
      </div>
    </div>
  );
};

export default Search;