"use client"

import { motion } from 'framer-motion';

function AboutBox() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.85 }}
            >
                <div className="flex flex-col md:flex-row gap-1 md:gap-6 lg:gap-8 mx-auto">
                    <div className="text-stone-300 font-medium text-sm md:text-base ml-10 md:ml-8">
                        about
                    </div>

                    <div className="text-white font-medium text-sm md:text-base ml-10 mr-8 md:mr-32">
                        hi! i&apos;m roy, a software engineer. i code for impact.
                        will also code for food.
                        <br /><br />
                        currently, i&apos;m studying cs and japanese at the university of pittsburgh.
                        <br /><br />
                        outside of coding, i enjoy mma, shogi, and playing with my cat, shiina.
                    </div>
                </div>

                <section className="mx-auto mt-8 md:mt-8 max-w-screen-md">
                    <div className="flex flex-col md:flex-row gap-1 md:gap-6 lg:gap-8 mx-auto">
                        <div className="text-stone-300 font-medium text-sm md:text-base ml-10 md:ml-8">
                            on repeat
                        </div>

                        <div className="text-white text-sm md:text-base ml-8 mr-8 md:mr-124 lg:w-full">
                            <iframe
                                style={{ border: '0', allowTransparency: 'true' }}
                                src="https://open.spotify.com/embed/track/5T1tYlzy1CUlbOlYHdlLXM?utm_source=generator&theme=0"
                                width="100%" height="123"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </section>



            </motion.div>
        </div>
    );
}

export default AboutBox;
