"use client";

import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import Header from "../../components/Header";
import { fadeIn } from "../variants";

const Work = () => {
  return (
    // Added overflow-hidden to prevent scrollbars from the circles
    <div className="h-full bg-primary/30 py-36 flex items-center relative overflow-hidden">
      {/* HEADER: Absolute Top */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="container mx-auto z-10">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* TEXT SECTION */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 xl:mt-12">
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden" className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Here is a showcase of my projects ranging from full-stack development to AI infrastructure and distributed systems.
            </motion.p>
          </div>

          {/* SLIDER SECTION */}
          <motion.div variants={fadeIn("down", 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </motion.div>
        </div>
      </div>

      {/* BACKGROUND ELEMENTS */}

      {/* Bulb: Bottom Left */}
      <div className="absolute bottom-0 left-0 z-0">
        <Bulb />
      </div>

      {/* Circles: Moved to Bottom Right */}
      <div className="absolute -bottom-10 -right-10 z-0 w-[200px] xl:w-[300px] opacity-50 mix-blend-color-dodge pointer-events-none">
        <Circles />
      </div>
    </div>
  );
};

export default Work;
