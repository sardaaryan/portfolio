"use client";

import Header from "./components/Header";
import { motion } from "framer-motion";
import Poster from "./components/Poster";
import ProjectsBtn from "./components/ProjectsBtn";
import ParticlesContainer from "./components/ParticlesContainer";
import { fadeIn } from "./variants";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* --- 1. THE FIXED BACKGROUND LAYER --- */}
      {/* This sits behind everything (z-[-10]) and stays fixed while you scroll. */}
      <div className="fixed inset-0 z-[-10] w-full h-full">
        {/* Spider-Punk Poster Matching Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-slate-900 to-rose-500" />

        {/* The Noise/Grain Texture (Optional: Adds that comic book grit) */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.065' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* --- 2. SCROLLABLE CONTENT --- */}
      {/* min-h-screen ensures it fills the view, but 'relative' allows it to grow/scroll */}
      <div className="relative min-h-screen w-full">
        <Header />

        {/* Content Wrapper */}
        <div className="w-full h-full">
          {/* Text Section */}
          <div className="w-full h-full xl:min-h-screen flex flex-col justify-center">
            {/* Added xl:min-h-screen to center text on desktop, but allow scroll on mobile */}
            <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left container mx-auto z-10 relative pb-20 xl:pb-0">
              {/* title */}
              <motion.h1 variants={fadeIn("down", 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">
                Aryan Sarda <br />
                <span className="text-accent">B.S: Computer Science & B.A: Economics(Specialization: Data Analytics)</span>
              </motion.h1>

              {/* subtitle */}
              <motion.p variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-6">
                <br />
                Computer Science and Economics graduate from UC Davis with hands-on experience building healthcare, AI, and cloud-based systems. Completed a double major in three and a half years while designing and developing scalable distributed applications spanning full-stack development, data
                pipelines, and AI platforms.
              </motion.p>

              <motion.p variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-6">
                Currently conducting contract-based AI research at Handshake AI and leading frontend modernization efforts for Icarus Alpha Inc. Hold three AWS certifications: Cloud Practitioner, AI Practitioner, and Data Engineer Associate.
              </motion.p>

              <motion.p variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
                Actively seeking Software Engineering and AI/Data Engineering roles.
              </motion.p>

              {/* btn */}
              <div className="flex justify-center xl:hidden relative z-20">
                <ProjectsBtn />
              </div>
              <motion.div variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
                <ProjectsBtn />
              </motion.div>
            </div>
          </div>

          {/* --- 3. THE IMAGE LAYER --- */}
          <div className="w-full xl:w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none">
            {/* Background Texture */}
            <div role="img" className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" aria-hidden />

            {/* Particles */}
            <ParticlesContainer />

            {/* Avatar / Poster Image */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              // FIXED CLASSNAME BELOW:
              // Added lg:max-h-none and lg:h-full to allow overlap with header area
              className="w-full h-full max-w-[737px] max-h-[678px] lg:max-h-none lg:h-full absolute -bottom-32 lg:bottom-0 lg:right-[8%] py-8"
            >
              <Poster />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
