"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CircuitOverlay from "../../components/CircuitOverlay";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import Header from "../../components/Header";
import RotatingText from "../../components/RotatingText";
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <main className="relative w-full h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-primary/30">
      <CircuitOverlay />
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="min-h-screen flex items-center justify-center pt-32 pb-24 xl:pt-0 relative overflow-hidden">
        <div className="container mx-auto z-10 px-4">
          <div className="flex flex-col xl:flex-row gap-x-8 items-center justify-between">
            {/* TEXT SECTION & STATUS FEED */}
            <div className="flex flex-col items-center text-center w-full xl:w-[40%] mb-12 xl:mb-0 relative">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 xl:mb-6 tracking-tight text-transparent [-webkit-text-stroke:2px_#ff2a2a] [text-shadow:0_0_20px_rgba(255,42,42,0.8),_0_0_40px_rgba(255,42,42,0.4)]"
              >
                My work <span className="text-white [-webkit-text-stroke:0px] [text-shadow:none]"></span>
              </motion.h2>

              <motion.p variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-[400px] text-base md:text-lg text-white/80 font-light">
                Here is a showcase of all the places that I&apos;ve had the pleasure to work at.
              </motion.p>

              <motion.div variants={fadeIn("up", 0.5)} initial="hidden" animate="show" exit="hidden" className="h-[2px] w-[80%] max-w-[300px] my-6 bg-gradient-to-r from-[#ff2a2a] to-transparent shadow-[0_0_15px_rgba(255,42,42,0.8)]" />

              <motion.div variants={fadeIn("up", 0.6)} initial="hidden" animate="show" exit="hidden" className="mt-4 flex justify-center w-full">
                <RotatingText texts={["Eat", "Code", "Sleep"]} />
              </motion.div>

              <motion.div variants={fadeIn("up", 0.7)} initial="hidden" animate="show" exit="hidden" className="mt-6 flex justify-center w-full">
                <div className="relative w-[130px] md:w-[180px] flex items-center justify-center">
                  <Image src="/hamster_wheel.gif" alt="Automated Hamster Wheel" width={200} height={200} unoptimized={true} className="w-full h-auto object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_20px_rgba(255,42,42,0.3)]" />
                </div>
              </motion.div>
            </div>

            {/* LIST SECTION */}
            <motion.div variants={fadeIn("down", 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[60%]">
              <WorkSlider />
            </motion.div>
          </div>
        </div>

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
