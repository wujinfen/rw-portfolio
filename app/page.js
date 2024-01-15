import Image from "next/image"
import pfp from "../public/pfp.png"
import medkit from "../public/healthkit.png"
import medday from "../public/med-day.png"
import pghseal from "../public/pghseal.png"

import IconButton from "../components/IconButton"
import EmailButton from "../components/EmailButton"


import { FaLinkedin } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";
import { TbCoffee } from "react-icons/tb";
import { IoMdOpen } from "react-icons/io";



export default function Home() {
  return (

    <main className="bg-gradient-to-b from-zinc-700 to-neutral-800 overflow-x-hidden">

      {/* ME SECTION - SOCIALS - CONTACT */}
      <section className="pt-4 md:pt-8 lg:pt-10">
        {/* image */}
        <div className="mx-auto bg-gradient-to-b from stone-700 rounded-full shadow-lg overflow-hidden
          w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36">
          <Image src={pfp} alt="Roy Wu pfp" className="w-14 h-auto ml-5 mt-4
                                      md:w-20 md:ml-6
                                      lg:w-24 lg-ml-8"  />
        </div>

        {/* name */}
        <div className="flex justify-center mt-2 text-white font-medium text-xl
                        md:text-2xl md:mt-3
                        lg:text-3xl lg:mt-4">
          Roy Wu
        </div>

        {/* title */}
        <div className="flex justify-center mt-1 text-stone-300 font-medium text-sm
                        md:text-md md:mt-2
                        lg:text-lg lg:mt-2">
          CS Student @ University of Pittsburgh
        </div>

        {/* title cont. */}
        <div className="flex justify-center items-center gap-2 mt-3 mr-3
                        md:gap-3 md:mt-4
                        lg:gap-4 lg:mt-5">
          <div className="bg-green-400 rounded-full h-1 w-1 md:h-2 md:w-2" />
          <div className="text-stone-300 font-medium text-sm md:text-md lg:text-lg">
            Looking for new opportunities
          </div>
        </div>

        {/* personal handles */}
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

        {/* email and phone form */}
        <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-10">
          <a href="mailto:wuroyy@gmail.com" className="flex justify-center bg-stone-300 rounded-lg shadow-md transition-colors duration-300 hover:bg-zinc-600 hover:text-white 
                  w-32 h-9 mt-4
                  md:w-44 md:h-12 md:mt-8">
            <div className="mt-2 text-xs md:ml-2 md:mt-3.5 md:text-sm text-custom-gray font-medium transition-colors duration-300 hover:text-white">Contact me</div>
            <div className="mt-1 ml-2 md:ml-4 md:mt-2.5">
              <HiOutlineMail size="28" color="#3C3c3c" />
            </div>
          </a>

          <div className="text-stone-300 font-medium text-sm mt-4 md:text-md md:mt-6">or</div>

          <a href={`tel:${+14842804791}`} className="flex justify-center bg-zinc-600 rounded-lg shadow-md transition-colors duration-300 hover:bg-stone-300 hover:text-white
                  w-32 h-9 mt-4
                  md:w-44 md:h-12 md:mt-8">
            <div className="mt-2 text-xs md:ml-2 md:mt-3.5 md:text-sm text-stone-300 font-medium transition-colors duration-300 hover:text-custom-gray">Reach out</div>
            <div className="mt-1 ml-2 md:ml-4 md:mt-2.5"><MdLocalPhone size="28" color="#bfbfbf" /></div>
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      {/* ABOUT SECTION NEED TO ADAPT TO SMALL AND MEDIUM SCREENS*/}

      <section className="mx-auto mt-4 md:mt-8 max-w-screen-md">
        <div className="flex flex-col md:flex-row gap-1 md:gap-6 lg:gap-8 mx-auto">
          <div className="text-stone-300 text-sm md:text-base ml-10 md:ml-9">
            About
          </div>

          <div className="text-white text-sm md:text-base ml-10 mr-8 md:mr-32">
            Hi! I&apos;m Roy, a rising software engineer and full-stack developer.
            <br /><br />
            Currently, I&apos;m studying CS and Japanese at the University of Pittsburgh, where I also serve as a student ambassador.
            <br /><br />
            I have a passion for learning new technologies and I&apos;m eager to contribute to dynamic teams.
            Outside of coding, I enjoy MMA, Shogi, and playing with my cat, Shiina.
          </div>
        </div>
      </section>

      {/* ON REPEAT SECTION */}
      <section className="mx-auto mt-8 md:mt-8 max-w-screen-md">
        <div className="flex flex-col md:flex-row gap-1 md:gap-6 lg:gap-8 mx-auto">
          <div className="text-stone-300 text-sm md:text-base ml-10 md:ml-9">
            On repeat
          </div>

          <div className="text-white text-sm md:text-base ml-8 mr-8 md:mr-32 lg:w-full">
            <iframe
              style={{ border: '0', allowTransparency: 'true' }}
              src="https://open.spotify.com/embed/track/5T1tYlzy1CUlbOlYHdlLXM?utm_source=generator&theme=0"
              width="100%" height="123"
              frameBorder="0"
              allowFullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-0 max-w-screen-md">
        <div className="flex flex-col md:flex-row gap-1 md:gap-6 lg:gap-8 mx-auto">
          {/* Work Title */}
          <div className="text-stone-300 text-sm md:text-base ml-10 mb-1 md:ml-9">
            Work
          </div>

          {/* Work Content */}
          <div className="flex flex-col gap-4 ml-10 mr-8 md:mr-16 lg:ml-5 lg:mr-124 w-full ">
            {/* Work Box 1 */}
            <div className="bg-zinc-600 shadow-lg flex-1 rounded-md
                              min-h-64 md:min-h-80 lg:min-h-96 mr-76 md:mr-14 lg:mr-0 lg:ml-7">
              {/* Content for Box 1 */}

              {/* Content Layer (Non-blurred) */}
              <div className="flex mx-auto h-full justify-center items-center text-lBrown font-semibold relative">
                MUD - Makerspace User Database <br /> In Progress
              </div>
            </div>

            {/* Work Box 2 */}
            <div className="hover:shadow-xl transition-transform transform hover:scale-105 duration-300 bg-zinc-600 shadow-lg flex-1 rounded-md min-h-64 md:min-h-80 lg:min-h-96 mr-76 md:mr-14 lg:mr-0 lg:ml-7">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <div>
                      <Image src={medkit} alt="Medkit" className="w-10 h-auto ml-3 mt-2" />
                    </div>
                    <div className="flex-col ml-1 mt-2">
                      <a href="https://devpost.com/software/med-day" target="_blank" rel="noopener noreferrer">
                        <div className="text-md md:text-lg flex lex-row  font-semibold">Med-Day
                          <div className="mt-1">
                            <a href="https://devpost.com/software/med-day" target="_blank" rel="noopener noreferrer">
                              <IoMdOpen size="10" />
                            </a>
                          </div>
                        </div>
                        <div className="text-2xs md:text-sm italic">EMT Protocol Simulator</div>
                      </a>
                    </div>

                  </div>

                  <div>
                    <Image src={medday} alt="Med-Day Game" className="
                    rounded-md
                    w-52 h-52 ml-3 mt-1
                    md:w-72 md:h-64 
                    lg:w-72 lg:mt-3
                    "/>
                  </div>
                </div>

                <div className="text-box p-3 mt-10 md:mt-12 lg:mt-14 flex-1">
                  <p className="text-xs ">
                    Med-Day is an 8bit style choice-based text game that simulates first-responder emergency medical situations.
                    <br /> <br />
                    Players must execute proper EMT protocols to transfer patient care and clear the levels.
                    <br /> <br />
                    <p className="italic">
                      Med-Day was developed for the Pitt Challenge Healthcare Hackathon and won the &apos;Supporting Caregivers&apos; Track.
                    </p>

                  </p>
                </div>
              </div>
            </div>

            {/* Work Box 3 */}
            <div className="hover:shadow-xl transition-transform transform hover:scale-105 duration-300 bg-zinc-600 shadow-lg flex-1 rounded-md min-h-64 md:min-h-80 lg:min-h-96 mr-76 md:mr-14 lg:mr-0 lg:ml-7">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <div>
                      <Image src={pghseal} alt="City of Pittsburgh Official Seal" className="w-10 h-auto ml-3 mt-2" />
                    </div>
                    <div className="flex-col ml-1 mt-2">
                      <a href="https://github.com/wujinfen/PGH-Getaway-Crimes" target="_blank" rel="noopener noreferrer">
                        <div className="text-md md:text-lg flex lex-row  font-semibold">Pittsburgh&apos;s Getaway Crimes
                          <div className="mt-1">
                            <a href="https://github.com/wujinfen/PGH-Getaway-Crimes" target="_blank" rel="noopener noreferrer">
                              <IoMdOpen size="10" />
                            </a>
                          </div>
                        </div>
                        <div className="text-2xs md:text-sm italic">Community Safety Analytics</div>
                      </a>
                    </div>

                  </div>

                  <div>
                    <Image src={medday} alt="Med-Day Game" className="
                    rounded-md
                    w-52 h-52 ml-3 mt-1
                    md:w-72 md:h-64 
                    lg:w-72 lg:mt-3
                    "/>
                  </div>
                </div>

                <div className="text-box p-3 mt-10 md:mt-12 lg:mt-14 flex-1">
                  <p className="text-xs ">
                    Med-Day is an 8bit style choice-based text game that simulates first-responder emergency medical situations.
                    <br /> <br />
                    Players must execute proper EMT protocols to transfer patient care and clear the levels.
                    <br /> <br />
                    <p className="italic">
                      Med-Day was developed for the Pitt Challenge Healthcare Hackathon and won the &apos;Supporting Caregivers&apos; Track.
                    </p>

                  </p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>


      {/*FOOTER*/}
      <section className="flex flex-row mt-4 pb-3 md:mt-8 md:pb-4">
        <div className="w-max mx-auto text-stone-300 text-3xs md:text-xs opacity-40 flex">
          made by roy wu with Next.js, React, Tailwind CSS, and lots of coffee <span className="md:ml-1 align-top"><TbCoffee size="21" color="burlywood" /></span>
        </div>
      </section>


    </main>


  )
}
