"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";

// Make sure your path to variants is correct based on your folder structure
import { fadeIn } from "../app/variants"; 

// FLATTENED DATA
const workExperiences = [
  {
    title: "Icarus Alpha",
    path: "/thumb1.jpeg",
    link: "https://icarusalpha.com",
    position: "Lead Software Engineer",
    description: "Leading the redesign and modernization of website + underlying infrastructure",
  },
  {
    title: "OdisAI",
    path: "/thumb2.jpeg",
    link: "https://odisai.net",
    position: "Founding Engineer",
    description: "Transcription of veterinary appointment audio into structured SOAP notes. Extracted, processed, and stored textbook data in vectorized DB(PostgreSQL via Supabase) for RAG use and implemented AWS Glue ETL pipelines for patient record + appointment data processing",
  },
  {
    title: "Handshake AI",
    path: "/thumb3.jpeg",
    link: "https://joinhandshake.com/",
    position: "AI Researcher",
    description: "Fine-tuning LLMs via post-training RLHF",
  },
  {
    title: "Hvantage Technologies",
    path: "/thumb4.jpeg",
    link: "https://www.hvantagetechnologies.com/",
    position: "Software Engineer Intern",
    description: "Worked on an Angular healthcare web app integrating Google Maps API with backend REST APIs to support route optimization for appointment scheduling while maintaining scalable+modular UI components.",
  },
];

const WorkSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeDescription = () => setSelectedIndex(null);

  // Fallback animation in case fadeIn isn't perfectly linked
  const defaultFade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {selectedIndex === null ? (
          /* --- LIST VIEW --- */
          <motion.div
            key="list"
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="flex flex-col gap-y-4 max-w-[600px] mx-auto w-full"
          >
            {workExperiences.map((experience, index) => (
              <motion.div
                key={index}
                // Using a custom delay for a staggered list entrance
                variants={fadeIn ? fadeIn("up", index * 0.1) : defaultFade}
                className="flex flex-row items-center gap-x-6 border border-white/10 rounded-2xl p-4 bg-pink-50/5 hover:bg-pink-50/10 transition-colors cursor-pointer group"
                onClick={() => setSelectedIndex(index)}
              >
                {/* Image Thumbnail */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={experience.path}
                    alt={experience.title}
                    fill
                    // ADDED SIZES PROP HERE to fix the Next.js warning
                    sizes="(max-width: 640px) 96px, 128px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>

                {/* Text Layout */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-widest mb-1">
                    {experience.title}
                  </h3>
                  <div className="text-accent font-semibold text-sm sm:text-base mb-2">
                    {experience.position}
                  </div>
                  <div className="flex items-center gap-x-2 text-[11px] text-white/50 group-hover:text-accent transition-colors duration-300 uppercase tracking-wider font-semibold">
                    <span>View Details</span>
                    <BsArrowRight className="text-sm" aria-hidden />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* --- DETAIL/DESCRIPTION VIEW --- */
          <motion.div
            key="details"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="relative bg-[#1e1e24]/80 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-accent/50 max-w-[600px] mx-auto w-full shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeDescription}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-accent text-2xl transition-colors"
              aria-label="Close details"
            >
              <RxCross2 />
            </button>

            {/* Header: Title & Position */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-widest mb-2 pr-8">
              {workExperiences[selectedIndex].title}
            </h3>
            <h4 className="text-accent font-semibold text-lg sm:text-xl mb-6">
              {workExperiences[selectedIndex].position}
            </h4>

            {/* Description */}
            <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-8">
              {workExperiences[selectedIndex].description}
            </p>

            {/* External Link */}
            <Link
              href={workExperiences[selectedIndex].link}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-x-2 text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1"
            >
              <span>Visit Company Site</span>
              <BsArrowRight className="text-lg" aria-hidden />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkSlider;