"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Footprint = {
  id: number;
  x: number;
  y: number;
  rotation: number;
};

export default function MouseTrail() {
  const [trail, setTrail] = useState<Footprint[]>([]);
  
  // FIXED: Using useRef instead of useState for instant, synchronous updates
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Calculate distance using the ref's current value
      const dx = clientX - lastPosRef.current.x;
      const dy = clientY - lastPosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // 100 is a good baseline spacing, but adjust as needed!
      if (distance > 100) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        const newId = Date.now() + Math.random(); 

        // Update the ref IMMEDIATELY so the next event calculates from this new spot
        lastPosRef.current = { x: clientX, y: clientY };

        // Add the footprint to the screen
        setTrail((prev) => [...prev, { id: newId, x: clientX, y: clientY, rotation: angle }]);

        // Clean up the footprint from the DOM after 1 second
        setTimeout(() => {
          setTrail((prev) => prev.filter((t) => t.id !== newId));
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // We only need to bind this event listener once, so the dependency array is empty
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []); 

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <AnimatePresence>
        {trail.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute text-2xl"
            style={{
              left: t.x,
              top: t.y,
              transform: `translate(-50%, -50%) rotate(${t.rotation}deg)`,
            }}
          >
            👣
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}