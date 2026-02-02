import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white fixed left-0 right-0 top">
      <nav className="max-w-360 md:h-[14vh] h-[9vh] mx-auto px-10 items-center  flex justify-between">
        {/* logo */}

        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>
        {/* Desktop menu */}

        <ul className="md:flex items-center gap-x-5 hidden">
          <li>
            <a
              href="#"
              className="font-samibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-samibold tracking-wider text-zine-800 hover:text-orange-500 transition-all duration-.05"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-samibold tracking-wider text-zine-800  hover:text-orange-500 transition-all duration-.05"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-samibold tracking-wider text-zine-800  hover:text-orange-500 transition-all duration-.05"
            >
              Contast us
            </a>
          </li>
        </ul>
        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* input feild */}
          <div className="md:flex p-1 pl-3 border-2  border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search.."
              autoComplete="off"
              className="flex-1 h-[5vh] focus:outline-none"
            />

            <button className="text-white bg-linear-to-b from-orange-300 to-orange-500  w-10 h-10 flex justify-center text-2xl items-center rounded-full">
              <IoSearchOutline />
            </button>
          </div>

          <a href="#" className="text-zinc-800 text-2xl">
            {" "}
            <FaCartPlus />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <GiShoppingBag />
          </a>
          {/* hamburgger */}
          <a
            href="#"
            onClick={toggleMenu}
            className="text-zinc-800 text-3xl md:hidden"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>
        {/* mobile menu */}
        <ul
          className={`flex flex-col gap-y-12 p-10 bg-orange-500/15 backdrop-blur-xl 
  rounded-lg items-center md:hidden absolute top-24 transition-all duration-300
  ${showMenu ? "left-1/2 -translate-x-1/2" : "-left-full"}`}
        >
          <li>
            <a
              href="#"
              className="font-samibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-samibold tracking-wider text-zine-800 hover:text-orange-500 transition-all duration-.05"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-samibold tracking-wider text-zine-800  hover:text-orange-500 transition-all duration-.05"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-samibold tracking-wider text-zine-800  hover:text-orange-500 transition-all duration-.05"
            >
              Contast us
            </a>
          </li>

          <li className="flex p-1 pl-3 border-2  border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search.."
              autoComplete="off"
              className="flex-1 h-[5vh] focus:outline-none"
            />

            <button className="text-white bg-linear-to-b from-orange-300 to-orange-500  w-10 h-10 flex justify-center text-2xl items-center rounded-full">
              <IoSearchOutline />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
