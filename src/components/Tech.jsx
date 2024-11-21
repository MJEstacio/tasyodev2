import React from "react";

import { Reveal } from "./Reveal";
import { animateContainer, item } from "./Animation";
import { motion } from "framer-motion";
import { FaHtml5, FaSass, FaWordpress } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";

import {
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiSvelte,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

const techStack = [
  {
    stack: "HTML",
    icon: (
      <FaHtml5
        size={30}
        className="text-orange-500"
      />
    ),
  },
  {
    stack: "CSS",
    icon: (
      <SiCss3
        size={30}
        className="text-blue-600"
      />
    ),
  },
  {
    stack: "SCSS/Sass",
    icon: (
      <FaSass
        size={30}
        className="text-pink-300"
      />
    ),
  },
  {
    stack: "JavaScript",
    icon: (
      <SiJavascript
        size={30}
        className="text-yellow-300"
      />
    ),
  },
  {
    stack: "TypeScript",
    icon: (
      <SiTypescript
        size={30}
        className="text-blue-600"
      />
    ),
  },
  {
    stack: "Tailwind CSS",
    icon: (
      <SiTailwindcss
        size={30}
        className="text-sky-600"
      />
    ),
  },
  {
    stack: "React",
    icon: (
      <SiReact
        size={30}
        className="text-blue-600 rotate"
      />
    ),
  },
  {
    stack: "NextJs",
    icon: (
      <SiNextdotjs
        size={30}
        className="text-black"
      />
    ),
  },
  {
    stack: "Svelte",
    icon: (
      <SiSvelte
        size={30}
        className="text-orange-600"
      />
    ),
  },
  {
    stack: "NodeJs",
    icon: (
      <IoLogoNodejs
        size={30}
        className="text-green-600"
      />
    ),
  },
  {
    stack: "WordPress",
    icon: (
      <FaWordpress
        size={30}
        className="text-slate-600"
      />
    ),
  },
  {
    stack: "Webflow",
    icon: (
      <FaWebflow
        size={30}
        className="text-sky-600"
      />
    ),
  },
];

const Tech = () => {
  // const myRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log("entry", entry);
  //   });
  //   observer.observe(myRef.current);
  // }, []);

  return (
    <section
      className="tech "
      id="tech"
    >
      <Reveal>
        <div className="max-w-fit pb-14  h-2 mx-auto relative">
          <h2 className="text-xl md:text-4xl text-white font-bold text-center">
            Tech Stack Tools and Frameworks
          </h2>
          <div className="w-1/2 h-1 rounded-xl bg-slate-200 absolute left-0 translate-x-1/2 translate-y-5"></div>
        </div>
        <div className=" max-w-[1440px] mx-auto justify-center ">
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  px-2 py-10  gap-5 text">
            {techStack.map((techs) => {
              return (
                <motion.div
                  className={`flex flex-col items-center p-5 border border-2 rounded-md text-slate-800 bg-white ${item} shadow-md`}
                  key={techs.stack}
                  variants={item}
                >
                  {techs.icon}
                  <span className="font-semibold text-slate-800">
                    {techs.stack}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
};

export default Tech;
