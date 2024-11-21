import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import mjelogo from "../assets/mjelogo.jpg";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";

import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className=" py-20 dark:text-sky-50 bg-sky-50 text-blue-600 dark:bg-sky-600">
      <div className="max-w-[1440px] mx-auto flex grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex relative p-10 ">
          <div className="flex flex-col justify-center items-center mx-auto  relative  ">
            <img
              src={mjelogo}
              alt="mjelogo"
              className="w-20 rounded-full"
            />
            <span className="text-2xl font-semibold ">TasyoDev</span>
          </div>
        </div>
        <div className="flex  justify-around flex-col sm:flex-row">
          <div className="flex flex-col gap-3 justify-center p-10 relative z-10 ">
            <div className="flex items-center gap-4 relative z-10">
              <MdEmail size={25} />
              <span>mjestacioiii@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <BsWhatsapp size={25} />
              <span>+639653458348</span>
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <BsTelegram size={25} />
              <span>@MJEstacio</span>
            </div>
            <address className="flex items-center gap-4">
              <span>
                <AiOutlineHome size={25} />
              </span>{" "}
              Pinagbuhatan, Pasig City, Metro Manila, Philippines
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
