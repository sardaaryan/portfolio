"use client";

import Header from "../components/Header";
import { motion } from "framer-motion";
import Grad from "../components/Grad";
import ProjectsBtn from "../components/ProjectsBtn";
import ParticlesContainer from "../components/ParticlesContainer";
import { fadeIn } from "./variants";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      
      {/* --- 1. THE FIXED BACKGROUND LAYER --- */}
      {/* This sits behind everything (z-[-10]) and stays fixed while you scroll. */}
      <div className="fixed inset-0 z-[-10] w-full h-full pointer-events-none">
        {/* Spider-Punk Poster Matching Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-slate-900 to-rose-500" />

        {/* The Noise/Grain Texture */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.065' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Particles */}
        <ParticlesContainer />
      </div>

      {/* --- 2. HEADER --- */}
      {/* Absolute positioned at the top so it doesn't interfere with flex centering */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* --- 3. EXPLOSION BACKGROUND (Desktop Only) --- */}
      {/* Kept your original explosion texture, locked to the right side */}
      <div 
        role="img" 
        className="fixed right-0 bottom-0 w-full xl:w-[1280px] h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0 pointer-events-none z-[-5]" 
        aria-hidden 
      />

      {/* --- 4. MAIN SCROLLABLE CONTENT --- */}
      {/* Added pt-32 to push content below the absolute header on mobile. */}
      <div className="relative min-h-screen flex items-center justify-center pt-32 pb-24 lg:pt-0 z-10 w-full">
        
        {/* FLEX ROW/COLUMN CONTAINER */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-y-12 lg:gap-x-12">
          
          {/* --- LEFT SIDE: TEXT --- */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center text-center lg:text-left z-20">
            
            {/* Name */}
            <motion.h1 
              variants={fadeIn("down", 0.2)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg"
            >
              Aryan Sarda
            </motion.h1>

            {/* Degree / Subtitle */}
            <motion.p 
              variants={fadeIn("down", 0.3)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className="text-accent text-sm md:text-base font-bold mb-6 uppercase tracking-widest"
            >
              B.S: Computer Science & B.A: Economics (Data Analytics)
            </motion.p>

            {/* Bio Paragraphs */}
            <motion.div 
              variants={fadeIn("down", 0.4)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className="flex flex-col gap-y-4 max-w-[550px] mx-auto lg:mx-0 text-white/80 text-sm md:text-base leading-relaxed font-light mb-8"
            >
              <p>
                Graduate from UC Davis with hands-on experience building healthcare, AI, and cloud-based systems. Completed a double major in three and a half years while designing and developing scalable distributed applications spanning full-stack development, data pipelines, and AI platforms.
              </p>
              <p>
                Currently conducting contract-based AI research at Handshake AI and leading frontend modernization efforts for Icarus Alpha Inc. Hold three AWS certifications: Cloud Practitioner, AI Practitioner, and Data Engineer Associate. NVIDIA AI Infrastructure and Operations Certified.
              </p>
              <p className="font-medium text-white/90">
                Actively seeking Software Engineering and AI/Data Engineering roles.
              </p>
            </motion.div>

            {/* Projects Button */}
            <motion.div 
              variants={fadeIn("up", 0.6)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className="flex justify-center lg:justify-start"
            >
              <ProjectsBtn />
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          {/* Sits in the normal flow so it drops nicely below the text on mobile */}
          <motion.div 
            variants={fadeIn("up", 0.5)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end z-20 relative"
          >
            {/* Container for your Grad component */}
            <div className="w-full max-w-[500px] lg:max-w-[737px] relative flex justify-center items-center">
               <Grad />
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}