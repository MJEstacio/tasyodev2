import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import mjpic from "../assets/mjpic.png";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { item } from "./Animation";

const Hero = () => {
  return (
    <Reveal
      className={`min-h-[110vh]  mx-auto overflow-hidden relative `}
      id="hero"
    >
      <Reveal
        className={` max-w-7xl mx-auto mt-60 ${item} overflow-hidden grid grid-cols-1 lg:grid-cols-2 px-5 2xl:px-0`}
        variants={item}
      >
        <div className="flex justify-center flex-col text-center lg:text-left">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-semibold text-sky-500 mb-5"
          >
            Mark Joseph Estacio
          </motion.h1>
          <motion.h2
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-xl"
          >
            Freelance Web Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="py-5 max-w-[800px] text-sm sm:text-base leading-6 mx-auto lg:mx-0 "
          >
            As a full-stack developer, I bridge the gap between powerful backend
            systems and dynamic, user-centric frontend experiences. With a
            passion for building scalable solutions, I deliver everything from
            intuitive interfaces to robust APIs, ensuring seamless performance
            across all devices. I thrive in turning complex challenges into
            elegant code, staying at the forefront of emerging technologies
            while prioritizing clean, maintainable architecture. Whether you're
            a startup looking to disrupt the market or an established business
            seeking digital transformation, I bring expertise and creativity to
            drive your vision forward.
            <p className="mt-5 text-sm font-semibold">
              From concept to launch, I make your innovation not just
              functional—but unforgettable.
            </p>
          </motion.p>
        </div>

        <div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="max-w-md  bg-gradient-to-b from-sky-500 to-sky-100 flex mx-auto rounded-full overflow-hidden object-contain flex items-center justify-center my-10 shadow-md shadow-sky-500/50"
          >
            <img
              src={mjpic}
              alt="mjpic"
            />
          </motion.div>
          <div className="social-icons gap-5 justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 1 }}
            >
              <a
                href="https://www.facebook.com/shempot1601 "
                target="_blank"
              >
                <BsFacebook
                  size={30}
                  className="text-blue-600  hover:text-sky-500 duration-500 cursor-pointer"
                />
              </a>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 1 }}
            >
              <a
                href="https://www.linkedin.com/in/markjosephestacio/"
                target="_blank"
              >
                <BsLinkedin
                  size={30}
                  className="text-sky-600 hover:text-sky-500 duration-500 cursor-pointer"
                  target="_blank"
                />
              </a>
            </motion.div>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 1.5 }}
            >
              <a
                href="https://github.com/MJEstacio"
                target="_blank"
              >
                <BsGithub
                  size={30}
                  className={` hover:text-sky-500 duration-500 cursor-pointer`}
                />
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 1 }}
            >
              <a href="mailto:mjestacioiii@gmail.com">
                <AiOutlineMail
                  size={30}
                  className=" hover:text-sky-500 duration-500 cursor-pointer"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </Reveal>
  );
};

export default Hero;
