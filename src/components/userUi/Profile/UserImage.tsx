
function UserImage (){
    return (
      <header className="relative bg-white bg-opacity-5">
        <div className="relative w-full">
          <img
            src="/assets/cover-image.png"
            alt="Cover image of the page"
            loading="lazy"
            className="object-cover w-full "
          />
          <img
            src="/Icons/profile-image.png"
            alt="User profile"
            loading="lazy"
            className="absolute w-20 left-7 lg:top-28 md:top-14 max-md:w-14 max-sm:top-10"
          />
        </div>
        <div className="my-11 mx-7 pb-5 flex  items-center text-white">
          <h1 className="text-white font-semibold text-lg">Emmanuel Ginger</h1>
          <span className="text-xs font-light ml-5 ">
            Become a Mentorship Member
          </span>
        </div>
      </header>
    );
}
export default UserImage