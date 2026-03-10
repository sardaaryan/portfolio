"use client";

import Image from "next/image";

export default function CircuitOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {/* Left circuit graphic */}
      <div className="absolute left-[30%] top-[42%] -translate-y-1/2 opacity-[0.14] xl:left-[30%] xl:top-[40%] xl:opacity-[0.18]">
        <Image
          src="/circuit.png"
          alt="Circuit overlay"
          width={520}
          height={900}
          priority
          className="w-[220px] md:w-[300px] xl:w-[420px] h-auto object-contain select-none"
        />
      </div>

      {/* Soft red ambient glow behind it */}
      <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[360px] md:h-[360px] xl:w-[520px] xl:h-[520px] rounded-full bg-[#ff2a2a]/10 blur-3xl" />

      {/* Top left subtle red fade */}
      <div className="absolute left-0 top-0 w-[45vw] h-[35vh] bg-gradient-to-br from-[#ff2a2a]/8 via-transparent to-transparent blur-2xl" />

      {/* Bottom right subtle balance glow */}
      <div className="absolute right-0 bottom-0 w-[30vw] h-[30vh] bg-gradient-to-tl from-[#ff2a2a]/6 via-transparent to-transparent blur-2xl" />
    </div>
  );
}