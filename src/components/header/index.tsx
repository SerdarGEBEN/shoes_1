import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="mb-6 xl:mb-20 md:mb-10 lg:mb-15 flex justify-between items-center
       bg-white-fa p-4 md:p-5 lg:p-6 xl:p-8 text-gray rounded-[12px] md:rounded-[16px] lg:rounded-[20px] 
     xl:rounded-[24px] "
    >
      <nav className="flex gap-10 font-semibold max-lg:hidden">
        <a>New Drops 🔥</a>
        <a>Men</a>
        <a>Women</a>
      </nav>

      <button className="lg:hidden">
        <img src="hamburger.svg" alt="" />
      </button>

      <Link to="/" className="w-[16%] max-w-[128px] max-h-[32px]">
        <img className="size-full" src="Group.svg" alt="" />
      </Link>

      <div className="flex items-center gap-5 lg:gap-10">
        <img
          className="size-4 md:size-5 lg:size-6 xl:size-7"
          src="User.svg"
          alt=""
        />
        <img
          className="size-4 md:size-5 lg:size-6 xl:size-7 max-lg:hidden"
          src="Search.svg"
          alt=""
        />
        <span
          className="size-[25px] md:size-[30px] lg:size-[40px] 
           bg-yellow-500 rounded-full grid place-items-center 
        font-open font-semibold"
        >
          0
        </span>
      </div>
    </header>
  );
};

export default Header;
