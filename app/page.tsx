"use client";

import Header from "../components/Header";
import { motion } from "framer-motion";
import Grad from "../components/home/Grad";
import ProjectsBtn from "../components/home/ProjectsBtn";
import ParticlesContainer from "../components/ParticlesContainer";
import { fadeIn } from "./variants";

export default function Home() {
  // Updated helper function synced with the 4-second CSS cycle
  const renderGlitchWord = (word: string, offset: number = 0) => {
    return word.split("").map((char, index) => {
      const delay = ((index + offset) * 0.2) % 4.0; 
      return (
        <span
          key={index}
          className="animate-glitch inline-block"
          data-text={char}
          style={{ animationDelay: `${delay}s` }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <main className="relative w-full h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* --- 1. THE FIXED BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-[-10] w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-slate-900 to-rose-500" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.065' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} />
        <ParticlesContainer />
      </div>

      {/* --- 2. HEADER --- */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* --- 3. EXPLOSION BACKGROUND --- */}
      <div role="img" className="fixed right-0 bottom-0 w-full xl:w-[1280px] h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0 pointer-events-none z-[-5]" aria-hidden />

      {/* --- 4. MAIN CONTENT --- */}
      <div className="relative min-h-screen flex items-start lg:items-center justify-center pt-48 pb-24 lg:pt-32 z-10 w-full">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-y-12 lg:gap-x-12">
          
          {/* --- LEFT SIDE: TEXT --- */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center text-center lg:text-left z-20">
            
            {/* NAME LOGIC UPDATED HERE */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-6xl md:text-7xl lg:text-8xl font-black italic uppercase text-white mb-2 tracking-tighter leading-none drop-shadow-[6px_6px_0px_#ff2a2a] [text-shadow:3px_3px_0px_#00ffff]"
            >
              {renderGlitchWord("Aryan", 0)}
              <br className="lg:hidden" />
              <span className="hidden lg:inline">&nbsp;</span>
              {renderGlitchWord("Sarda", 5)}
            </motion.h1>

            {/* BIO & TAGS */}
            <motion.p variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden" className="inline-block self-center lg:self-start bg-accent text-primary px-3 py-1 text-xs md:text-sm font-black uppercase tracking-[0.2em] skew-x-[-10deg] mb-8 shadow-[4px_4px_0px_white]">
              B.S: Computer Science & B.A: Economics
            </motion.p>

            <motion.div variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col gap-y-4 max-w-[550px] mx-auto lg:mx-0 text-white/90 text-sm md:text-base leading-tight font-medium mb-8 border-l-4 border-accent pl-6 italic text-left">
              <p>Graduate from UC Davis with hands-on experience building healthcare, AI, and cloud-based systems. Completed a double major in three and a half years while developing scalable applications.</p>
              <p className="text-accent/90">Currently conducting contract-based AI research at Handshake AI and leading frontend modernization efforts for Icarus Alpha Inc.</p>
              <p className="font-black text-white uppercase tracking-wider bg-white/10 p-2 border border-white/20">Actively seeking Software Engineering and AI/Data Engineering roles.</p>
            </motion.div>

            {/* PROJECTS BUTTON */}
            <motion.div variants={fadeIn("up", 0.6)} initial="hidden" animate="show" exit="hidden" className="flex justify-center lg:justify-start">
              <ProjectsBtn />
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          <motion.div variants={fadeIn("up", 0.5)} initial="hidden" animate="show" exit="hidden" transition={{ duration: 1, ease: "easeInOut" }} className="w-full lg:w-[45%] flex justify-center lg:justify-end z-20 relative">
            <div className="w-full max-w-[500px] lg:max-w-[737px] relative flex justify-center items-center">
              <Grad />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}