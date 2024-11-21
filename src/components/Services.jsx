import React from "react";
import {
  BsCodeSlash,
  BsGear,
  BsLayoutTextSidebarReverse,
} from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { GiShop } from "react-icons/gi";

import { BsCardText } from "react-icons/bs";
import { item } from "./Animation";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
const services = [
  {
    icon: (
      <BsCodeSlash
        size={40}
        className="text-sky-500 mt-5 mx-auto"
      />
    ),
    title: "Web Applications & Systems",
    content:
      " I'll make sure your company functions in the most efficient way as possible as I will be building Web Apps and Systems that are tailor fit to your day to day needs.",
  },
  {
    icon: (
      <GiShop
        size={40}
        className="text-sky-500 mt-5 mx-auto"
      />
    ),
    title: "E-Commerce & Marketing Websites",
    content:
      "I can curate and build your online presence and help you make a mark in the industry.",
  },
  {
    icon: (
      <MdWeb
        size={40}
        className="text-sky-500 mt-5 mx-auto"
      />
    ),
    title: "UI / UX Design",
    content:
      " I will provide designs that not only looks good visually, but also communicates to its clients.",
  },
  {
    icon: (
      <BsCardText
        size={40}
        className="text-sky-500 mt-5 mx-auto"
      />
    ),
    title: "Content Management Systems (CMS)",
    content:
      "Samples will show you the feeling on how to play around using the components in the website building process.",
  },
  {
    icon: (
      <BsGear
        size={40}
        className="text-sky-500 mt-5 mx-auto"
      />
    ),
    title: "Maintenance and Support",
    content: "Ongoing tasks such as updates, bug fixes, and user support.",
  },
  {
    icon: (
      <BsLayoutTextSidebarReverse
        size={40}
        className="text-sky-500 mt-5 mx-auto"
      />
    ),
    title: "Tech Consultations & Operations Management",
    content:
      "You can decide whether to create your site using UI Kit blocks or samples.",
  },
];

const Services = () => {
  return (
    <section
      className="relative flex max-w-[1440px] mx-auto px-2 mt-10"
      id="services"
    >
      <span className="backtext  ">Services</span>
      <Reveal
        className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 my-32 gap-5 text-center`}
      >
        {services.map((card) => (
          <motion.div
            className="service-card"
            key={card.title}
            variants={item}
          >
            {card.icon}
            <span className="mb-4 font-semibold text-xl">{card.title}</span>
            <p>{card.content}</p>
          </motion.div>
        ))}
      </Reveal>
    </section>
  );
};

export default Services;
