import Link from "next/link";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 flex flex-col sm:flex-row gap-6 mt-4">
      
      {/* --- ABOUT / DASHBOARD BUTTON (The Impressive Page) --- */}
      <Link 
        href="/about"
        className="group relative inline-flex items-center justify-center px-8 py-4 font-black uppercase tracking-widest text-white transition-all duration-300"
      >
        {/* The Red -> Cyan Background */}
        <span className="absolute inset-0 w-full h-full bg-[#ff2a2a] skew-x-[-15deg] group-hover:bg-[#00ffff] group-hover:skew-x-[15deg] transition-all duration-500 shadow-[6px_6px_0px_white]"></span>
        
        {/* The Text & Icon */}
        <span className="relative flex items-center gap-2 group-hover:text-black transition-colors duration-300">
          Access Data
          <span className="text-2xl font-normal leading-none mb-[2px]">→</span>
        </span>
      </Link>

      {/* --- WORK HISTORY BUTTON --- */}
      <Link 
        href="/work"
        className="group relative inline-flex items-center justify-center px-8 py-4 font-black uppercase tracking-widest text-white transition-all duration-300"
      >
        {/* The Purple -> Pink Background */}
        <span className="absolute inset-0 w-full h-full bg-[#7000ff] skew-x-[-15deg] group-hover:bg-[#ff00ff] group-hover:skew-x-[15deg] transition-all duration-500 shadow-[6px_6px_0px_white]"></span>
        
        {/* The Text & Icon */}
        <span className="relative flex items-center gap-2 transition-colors duration-300">
          View Work
          <span className="text-2xl font-normal leading-none mb-[2px]">→</span>
        </span>
      </Link>

    </div>
  );
};

export default ProjectsBtn;