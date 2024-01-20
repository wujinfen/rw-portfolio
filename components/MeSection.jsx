"use client"

import { motion } from 'framer-motion';

import Image from 'next/image';
import IconButton from "../components/IconButton";
import { FaLinkedin } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";

function MeSection({ pfp }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Image */}
        <div className="mx-auto bg-gradient-to-b from-zinc-700 to-sGray rounded-full shadow-lg overflow-hidden w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36">
          <Image src={pfp} alt="Roy Wu pfp" className="w-14 h-auto ml-5 mt-4 md:w-20 md:ml-6 lg:w-24 lg:ml-6" />
        </div>

        {/* Name */}
        <div className="flex justify-center mt-2 text-white font-semibold text-xl md:text-2xl lg:text-3xl lg:mt-4">
          Roy Wu
        </div>

        {/* Title */}
        <div className="flex justify-center mt-1 text-stone-300 font-medium text-sm md:text-md lg:text-lg lg:mt-2">
          CS Student @ University of Pittsburgh
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        {/* Title continuation */}
        <div className="flex justify-center items-center gap-2 mt-3 mr-3 md:gap-3 md:mt-4 lg:gap-4 lg:mt-5">
          <div className="bg-green-400 rounded-full h-1 w-1 md:h-2 md:w-2" />
          <div className="text-stone-300 font-medium text-sm md:text-md lg:text-lg">
            Looking for new opportunities
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.30 }}
      >
        <div className="flex justify-center items-center gap-9 mt-4
       md:gap-12 md:mt-5
       lg:gap-16 lg:mt-6">

          <a href="https://www.linkedin.com/in/roywuu/" target="_blank" rel="noopener noreferrer">
            <IconButton text="/roywuu">
              <FaLinkedin size="32" color="#BFBFBF" />
            </IconButton>
          </a>

          <a href="https://github.com/wujinfen" target="_blank" rel="noopener noreferrer">
            <IconButton text="/wujinfen">
              <VscGithub size="32" color="#BFBFBF" />
            </IconButton>
          </a>

          <a href="https://twitter.com/wuroyy" target="_blank" rel="noopener noreferrer">
            <IconButton text="/wuroyy">
              <BsTwitterX size="32" color="#BFBFBF" />
            </IconButton>
          </a>

          <a href="https://www.instagram.com/roy.wu/" target="_blank" rel="noopener noreferrer">
            <IconButton text="/roy.wu">
              <FaInstagram size="32" color="#BFBFBF" />
            </IconButton>
          </a>
        </div>
      
        {/* EMAIL AND PHONE FORM */}
        <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-10">
          <a href="mailto:wuroyy@gmail.com" className="flex justify-center bg-stone-300 rounded-lg shadow-md transition-colors duration-300 hover:bg-sGray hover:text-white 
                  w-32 h-9 mt-4
                  md:w-44 md:h-12 md:mt-8">
            <div className="mt-2 text-xs md:ml-2 md:mt-3.5 md:text-sm text-sGray font-semibold transition-colors duration-300 hover:text-white">Contact me</div>
            <div className="mt-1 ml-2 md:ml-4 md:mt-2.5">
              <HiOutlineMail size="28" color="#3C3c3c" />
            </div>
          </a>

          <div className="text-stone-300 font-medium text-sm mt-4 md:text-md md:mt-7">or</div>

          <a href={`tel:${+14842804791}`} className="flex justify-center bg-sGray rounded-lg shadow-md transition-colors duration-300 hover:bg-stone-300 hover:text-white
                  w-32 h-9 mt-4
                  md:w-44 md:h-12 md:mt-8">
            <div className="mt-2 text-xs md:ml-2 md:mt-3.5 md:text-sm text-stone-300 font-semibold transition-colors duration-300 hover:text-custom-gray">Reach out</div>
            <div className="mt-1 ml-2 md:ml-4 md:mt-2.5"><MdLocalPhone size="28" color="#bfbfbf" /></div>
          </a>
        </div>
      </motion.div>

    </div>
  );
}

export default MeSection;
