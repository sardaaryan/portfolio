"use client";

import Header from "../../components/Header";
import SpotifyStats from "../../components/about/SpotifyStats";
import StravaStats from "../../components/about/StravaStats";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import spotifyData from "../../data/stats.json";
import stravaData from "../../data/metrics.json";

const NeonCardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative group w-full p-[2px] overflow-hidden rounded-2xl">
      <div
        className="absolute inset-[-1000%] animate-border-spin
                   bg-[conic-gradient(from_0deg,#7000ff,#ff00ff,#00ffff,#ff00ff,#7000ff)]
                   opacity-15 group-hover:opacity-50 transition-opacity duration-500"
      />

      <div className="relative z-10 w-full rounded-[14px] bg-black/45 backdrop-blur-sm overflow-hidden">
        {children}
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#7000ff] via-[#ff00ff] to-[#00ffff] blur-xl opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
    </div>
  );
};

export default function About() {
  return (
    <main
      className="relative h-screen w-full overflow-y-auto no-scrollbar"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/about.png')",
        backgroundAttachment: "local",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="relative flex-grow flex flex-col pt-32 pb-24 z-10">
        <div className="container mx-auto px-4 flex flex-col gap-y-12">
          <div className="text-center lg:text-left mt-8 xl:mt-12">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter uppercase
                         text-transparent bg-clip-text
                         bg-[linear-gradient(to_right,#7000ff,#ff00ff,#00ffff,#ff00ff,#7000ff)]
                         animate-gradient w-fit mx-auto lg:mx-0
                         drop-shadow-[0_0_15px_rgba(255,0,255,0.4)]
                         [text-shadow:0_0_20px_rgba(255,255,255,0.1)]
                         hover:scale-[1.02] transition-all duration-500"
            >
              About Me<span className="text-white">.</span>
            </h2>

            <p className="max-w-[650px] mx-auto lg:mx-0 text-white/90 text-lg md:text-xl font-medium drop-shadow-md leading-relaxed">
              Beyond the code, here is a real-time look at my life outside of work, powered by automated ETL pipelines pulling from my personally used services.
              <br className="mt-2 block" />
              <span className="text-[#d441ff] text-base italic font-bold">
                (And yeah, I put together the Spider-Punk poster in the background 🎸)
              </span>
            </p>
          </div>

          <div className="w-full space-y-12">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="w-full"
            >
              <NeonCardWrapper>
                <SpotifyStats data={spotifyData} />
              </NeonCardWrapper>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              className="w-full"
            >
              <NeonCardWrapper>
                <StravaStats data={stravaData} />
              </NeonCardWrapper>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}