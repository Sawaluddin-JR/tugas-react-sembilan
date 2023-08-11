import { AiOutlineMenu, AiOutlineClose, AiTwotoneHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { BiSolidHelpCircle } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <Link to={"/"}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 hover:text-orange-900">
            Foods<span className="font-bold">Web</span>
          </h1>
        </Link>
        {/* <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div> */}
      </div>
      {/* search input */}
      {/* <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          placeholder="Search foods"
          className="bg-transparent p-2 w-full focus:outline-none"
        />
      </div> */}
      {/* cart button */}
      <button className="bg-cyan-500 hover:bg-cyan-400">
        <h1 className="text-gray-900 text-lg">Login</h1>
      </button>
      {/* mobile is menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Foods<span className="font-bold">Web</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <Link to={"/"}>
              <li className="text-xl py-4 flex">
                <AiTwotoneHome size={25} className="mr-4" /> Home
              </li>
            </Link>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <BiSolidHelpCircle size={25} className="mr-4" /> Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
