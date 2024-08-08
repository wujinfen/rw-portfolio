"use client"

import Image from "next/image"
import pfp from "../public/pfp.png"
import profilePic from "../public/pfp.png"

import MeddayCard from "../components/MeddayCard"
import GetAwayCard from "../components/GetAwayCard"
import MeSection from "../components/MeSection"
import AboutBox from "../components/AboutBox"

import { TbCoffee } from "react-icons/tb";
import { motion } from 'framer-motion';


export default function Home() {
  return (

    <main className="bg-gradient-to-b from-zshade to-dneutral overflow-x-hidden">


      {/* ME SECTION - SOCIALS - CONTACT */}
      <section className="pt-4 md:pt-8 lg:pt-10">
        <MeSection pfp ={profilePic} />
      </section>


      {/* ABOUT SECTION */}
      <section className="mx-auto mt-4 md:mt-8 max-w-screen-md">
        <AboutBox />
      </section>

      <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.85 }}
            >
      <section className="mx-auto max-w-screen-md">
        <div className="flex flex-col md:flex-row gap-1 md:gap-6 lg:gap-8 mx-auto">
          {/* Work Title */}
          <div className="text-stone-300 font-medium text-sm md:text-base ml-10 mb-1 md:ml-8">
            projects
          </div>

          {/* Work Content */}
          <div className="flex flex-col gap-4 ml-10 mr-8 md:mr-16 lg:ml-0 lg:mr-124 w-full ">

            <section className="hover:shadow-xl hover:mt-4 hover:mb-4 transition-all transform hover:scale-105 duration-300 rounded-md mr-76 md:mr-14 lg:mr-0 lg:ml-5">
              <MeddayCard />
            </section>

            <section className="hover:shadow-xl hover:mt-4 hover:mb-4 transition-all transform hover:scale-105 duration-300 rounded-md mr-76 md:mr-14 lg:mr-0 lg:ml-5">
              <GetAwayCard />
            </section>

          </div>
        </div>
      </section>


      {/*FOOTER*/}
      <section className="flex flex-row mt-8 pb-3 md:mt-8 md:pb-4">
        <div className="w-max mx-auto text-stone-300 text-3xs md:text-xs opacity-40 flex">
          made by roy wu with react, tailwind, and lots of coffee <span className="md:ml-1 align-top"><TbCoffee size="21" color="burlywood" /></span>
        </div>
      </section>

      </motion.div>
    </main>


  )
}
