import React from "react";

import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Copyright = () => {
  const copyrightYear = new Date().getFullYear();
  const socialIcons = [
    {
      icon: <AiFillFacebook size={25} />,
      url: "https://www.facebook.com/shempot1601",
    },
    {
      icon: <AiFillLinkedin size={25} />,
      url: "https://www.linkedin.com/in/markjosephestacio/",
    },
    {
      icon: <AiOutlineMail size={25} />,
      url: "mailto:mjestacioiii@gmail.com",
    },
  ];

  return (
    <section className="bg-sky-50 dark:bg-sky-600 ">
      <div className="max-w-[1440px] mx-auto border-t-2 py-5 border-blue-600 dark:border-sky-50  flex flex-col sm:flex-row  justify-between px-3 gap-2">
        <p className="text-blue-600 dark:text-blue-50  flex justify-start px-2 mx-auto sm:mx-0">
          © {copyrightYear} TasyoDev | All rights reserved.
        </p>
        <div className="flex gap-5 justify-center">
          {socialIcons.map((item, i) => (
            <a
              href={item.url}
              target="_blank"
              key={i}
              className="text-blue-600 dark:text-blue-50 hover:text-blue-500 duration-200"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Copyright;
