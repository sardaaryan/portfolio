"use client";

import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import Header from "../../components/Header";
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <main className="relative w-full h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-primary/30">
      {/* HEADER: Absolute Top */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* MAIN CONTENT WRAPPER 
          Added pt-32 to clear the header on mobile.
          Used min-h-screen to ensure it takes up the full viewport.
      */}
      <div className="min-h-screen flex items-center justify-center pt-32 pb-24 xl:pt-0 relative overflow-hidden">
        <div className="container mx-auto z-10 px-4">
          
          {/* FLEX ROW CONTAINER 
              Added 'items-center' here so the text and list align perfectly in the middle on desktop.
          */}
          <div className="flex flex-col xl:flex-row gap-x-8 items-center justify-between">
            
            {/* TEXT SECTION */}
            <div className="text-center flex flex-col lg:text-left w-full xl:w-[35%] mb-12 xl:mb-0">
              <motion.h2 
                variants={fadeIn("up", 0.2)} 
                initial="hidden" 
                animate="show" 
                exit="hidden" 
                // Replaced 'h2' class with explicit Tailwind typography for a clean, bold look
                className="text-4xl md:text-5xl font-bold text-white mb-4 xl:mb-6 tracking-tight"
              >
                My work <span className="text-accent">.</span>
              </motion.h2>
              <motion.p 
                variants={fadeIn("up", 0.4)} 
                initial="hidden" 
                animate="show" 
                exit="hidden" 
                className="max-w-[400px] mx-auto lg:mx-0 text-base md:text-lg text-white/70"
              >
                Here is a showcase of all the places that I&apos;ve had the pleasure to work at.
              </motion.p>
            </div>

            {/* LIST SECTION */}
            <motion.div 
              variants={fadeIn("down", 0.6)} 
              initial="hidden" 
              animate="show" 
              exit="hidden" 
              className="w-full xl:max-w-[60%]"
            >
              <WorkSlider />
            </motion.div>

          </div>
        </div>

        {/* BACKGROUND ELEMENTS */}
        <div className="absolute bottom-0 left-0 z-0">
          <Bulb />
        </div>
        <div className="absolute -bottom-10 -right-10 z-0 w-[200px] xl:w-[300px] opacity-50 mix-blend-color-dodge pointer-events-none">
          <Circles />
        </div>
      </div>
    </main>
  );
};

export default Work;