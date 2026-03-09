"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RotatingText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // Swaps words every 2 seconds
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="relative h-[80px] md:h-[100px] w-[180px] md:w-[250px] flex items-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          // Here is the magic: Transparent fill, red stroke, and red glowing text-shadow
          className="absolute text-5xl md:text-7xl font-bold tracking-wide text-transparent [-webkit-text-stroke:2px_#ff2a2a] [text-shadow:0_0_20px_rgba(255,42,42,0.8),_0_0_40px_rgba(255,42,42,0.4)]"
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}