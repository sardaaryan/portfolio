import Image from "next/image";

const Grad = () => {
  return (
    <div className="relative group">
      <Image 
        src="/grad.jpg" 
        alt="poster" 
        width={737} 
        height={678} 
        // Priority tells Next.js to preload this immediately for LCP
        priority
        loading="eager"
        // Keeps your existing layout classes
        className="translate-z-0 w-full h-full object-contain shadow-2xl transition-all duration-300 group-hover:scale-[1.02]" 
      />
      
      {/* Optional: A subtle red 'Spider-Punk' glow behind the image */}
      <div className="absolute inset-0 z-[-1] bg-[#ff2a2a]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default Grad;