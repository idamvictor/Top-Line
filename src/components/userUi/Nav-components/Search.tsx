const Search = () => {
  return (
    <form className="w-full flex p-2 bg-[#221a36] rounded-lg">
      <div className="relative text-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search through site content"
          className="w-full p-2 pl-12 bg-transparent outline-none"
        />
        <img
          src="/Icons/search.svg"
          alt="Search"
          width={20}
          height={20}
          className="absolute left-3 top-3 text-gray-400"
        />
      </div>
    </form>
  );
};

export default Search;
