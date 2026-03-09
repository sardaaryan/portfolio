"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "../variants";
import ParticlesContainer from "../../components/ParticlesContainer";

const Contact = () => {
  return (
    <main className="relative w-full h-screen bg-primary/30 overflow-hidden flex items-center justify-center">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/90" />
        <ParticlesContainer />
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-4 z-10">
        
        {/* WARNING ICON */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="mb-6 text-[#ff2a2a] text-6xl md:text-8xl drop-shadow-[0_0_15px_rgba(255,42,42,1)]"
        >
          ⚠
        </motion.div>

        {/* MAIN TEXT */}
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          data-text="COMING SOON"
          className="animate-glitch text-6xl md:text-8xl lg:text-9xl font-black italic uppercase text-white mb-4 tracking-tighter leading-none drop-shadow-[8px_8px_0px_#ff2a2a] [text-shadow:4px_4px_0px_#00ffff]"
        >
          COMING <br className="md:hidden" /> SOON
        </motion.h1>

        {/* SUBTEXT / STATUS */}
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          className="text-accent font-bold uppercase tracking-[0.3em] text-sm md:text-base bg-white/10 px-4 py-2 skew-x-[-12deg] border-2 border-accent shadow-[4px_4px_0px_#ff2a2a] mb-12"
        >
          Signal Interrupted // Frequency Offline
        </motion.p>

        {/* --- RETURN TO HOME OPTION --- */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
        >
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-black uppercase tracking-widest text-white transition-all duration-300"
          >
            {/* The "Tape/Paper" Background */}
            <span className="absolute inset-0 w-full h-full bg-[#ff2a2a] skew-x-[-15deg] group-hover:bg-[#00ffff] group-hover:skew-x-[15deg] transition-all duration-500 shadow-[6px_6px_0px_white]"></span>
            
            {/* The Label */}
            <span className="relative flex items-center gap-2 group-hover:text-black">
              <span className="text-2xl">←</span> 
              Abort & Return
            </span>
          </Link>
        </motion.div>

        {/* SCANLINE OVERLAY */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>
    </main>
  );
};

export default Contact;