import React from "react";
import MJLogo from "../assets/mjelogo.jpg";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const links = [
  {
    linkName: "Home",
    url: "#",
  },
  {
    linkName: "Tech",
    url: "#tech",
  },

  {
    linkName: "Portfolio",
    url: "#portfolio",
  },
  {
    linkName: "Certificates",
    url: "#certificates",
  },
  {
    linkName: "Services",
    url: "#services",
  },
];

const Nav = ({ handleclick, openmodal, darkMode }) => {
  const [nav, setNav] = useState(false);

  return (
    <header
      className={`${
        darkMode ? "dark" : ""
      }  fixed top-0  left-0 w-screen overflow-x-hidden bg-sky-50/80 z-50 px-5 dark:bg-slate-900/90 duration-500`}
    >
      <nav className="max-w-[1440px] mx-auto py-2 flex items-center justify-between">
        <a
          href="/"
          className="logo flex items-center gap-2"
        >
          <img
            src={MJLogo}
            alt="mjlogo"
            className="w-14 rounded-full"
          />
          <span className="text-2xl font-semibold text-sky-500">TasyoDev</span>
        </a>
        <ul className=" gap-5 items-center flex">
          {links.map((link) => (
            <li key={link.linkName}>
              <a
                href={link.url}
                className="hidden lg:flex font-semibold hover:text-sky-500 duration-300"
              >
                {link.linkName}
              </a>
            </li>
          ))}

          <li>
            <button
              className="hidden lg:flex font-semibold hover:text-sky-500 duration-300 cursor-pointer"
              onClick={openmodal}
            >
              Contact Me
            </button>
          </li>
          <li className="relative overflow-hidden">
            <BsFillMoonStarsFill
              size={25}
              onClick={handleclick}
              className="cursor-pointer absolute top-0 left-0 dark:-translate-x-12 duration-300 "
            />
            <BsFillSunFill
              size={25}
              onClick={handleclick}
              className="cursor-pointer top-0 left-0 translate-x-12 dark:translate-x-0 duration-300"
            />
          </li>
          <li className="block lg:hidden ">
            <RiMenu3Line
              size={30}
              onClick={() => setNav(!nav)}
              className="dark:text-white duration-500"
            />
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <div
        onClick={() => setNav(!nav)}
        className={
          !nav
            ? " fixed top-0 left-0 bg-black/90 w-full h-full flex justify-end overflow-hidden translate-x-[100%] backdrop:blur-sm overlay z-40 "
            : " fixed top-0 left-0 bg-black/90 w-full h-full flex justify-end overflow-hidden overlay z-40 "
        }
      >
        <nav
          className={
            !nav
              ? "w-[300px] bg-sky-100 flex justify-center items-center translate-x-[100%] duration-300 relative dark:bg-slate-900 z-50"
              : "w-[300px] bg-sky-100 flex justify-center items-center duration-300 relative dark:bg-slate-900 z-50"
          }
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 text-sky-500 dark:text-white"
            onClick={() => setNav(!nav)}
          />
          <ul className="flex flex-col gap-5 text-2xl font-semibold text-sky-500 ">
            {links.map((link) => (
              <li
                key={link.linkName}
                className="duration-200 hover:text-slate-500 cursor-pointer"
              >
                <a href={link.url}>{link.linkName}</a>
              </li>
            ))}

            <li>
              <a
                className="duration-200 hover:text-slate-500 cursor-pointer"
                onClick={openmodal}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
