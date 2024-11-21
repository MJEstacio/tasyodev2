import React from "react";
import { portfolios } from "../api/data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Reveal } from "./Reveal";
import { animateContainer } from "./Animation";

const Portfolio = () => {
  return (
    <section
      className=" relative  max-w-[1440px]  lg:mx-auto my-20  portfolio dark:text-black overflow-hidden  "
      id="portfolio"
    >
      <span className="backtext ">Portfolio</span>

      <div
        className={`grid grid-cols-1 gap-0 md:gap-8  pt-28 px-2 md:px-5 2xl:px-3 ${animateContainer}  `}
      >
        {portfolios.map(
          ({ title, image, link, description, programs }, index) => (
            <Reveal
              y={100}
              className={`mt-5 rounded-xl portfolio-card my-20 md:mx-0 duration-500 flex flex-col lg:flex-row  gap-2 lg:gap-20  `}
              key={title}
            >
              <div
                className={`relative img-container overflow-hidden ${
                  index % 2 == 0 && "lg:order-1"
                } lg:basis-1/2 hover:shadow-lg rounded-md duration-300 hover:shadow-sky-300 ring-2 dark:ring-sky-400  ring-offset-2 my-auto `}
              >
                <img
                  src={image}
                  alt={title}
                />
                <a
                  href={link}
                  target="_blank"
                >
                  <div className="overlay">
                    <FaExternalLinkAlt className="text-sky-200 text-4xl " />
                  </div>
                </a>
              </div>
              <Reveal
                x={100}
                className=" py-5 lg:basis-1/2 px-2 lg:px-5 xl:px-10 "
              >
                <h2 className="font-bold text-3xl  dark:text-white ">
                  {title}
                </h2>
                <p className="mt-3  leading-7 text-sm lg:text-base mb-10">
                  {description}
                </p>
                {/* <ul className="flex gap-5 mb-10">
                {programs.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-md  duration-500 font-semibold   text-sky-400 italic "
                  >
                    {item}
                  </li>
                ))}
              </ul> */}
                <div>
                  <a
                    href={link}
                    target="_blank"
                    className="bg-sky-400 px-8 py-3 rounded-md text-white duration-500 font-semibold hover:bg-transparent hover:ring-2 hover:text-sky-400 hover:ring-sky-400 "
                  >
                    Visit Site
                  </a>
                </div>

                <div className="flex gap-2"></div>
              </Reveal>
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
};

export default Portfolio;
