// components/Nav.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "work", path: "/work", Icon: HiViewColumns },
  { name: "contact", path: "/contact", Icon: HiEnvelope },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center gap-y-4 fixed h-max bottom-0 mt-auto z-50 w-full xl:static xl:w-auto xl:h-auto xl:bg-transparent">
      {/* Mobile: Fixed bottom strip, full width, larger icons (text-3xl)
         Desktop (xl): Pill shape, relative position, crisp border, medium icons (text-xl)
      */}
      <div className="flex w-full items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-8 h-[80px] xl:h-[50px] py-8 bg-white/10 backdrop-blur-md text-3xl xl:text-xl xl:rounded-full border-t border-white/10 xl:border xl:border-white/20 shadow-lg">
        <div className="flex w-full xl:w-auto items-center justify-between xl:justify-center xl:gap-x-8">
          {navData.map((link, i) => (
            <Link className={`${link.path === pathname && "text-accent"} relative flex items-center group hover:text-accent transition-all duration-300`} href={link.path} key={i}>
              {/* Tooltip */}
              <div
                role="tooltip"
                // 1. Position: centered below the icon
                // 2. Transition: starts invisible (opacity-0) and slightly lower (translate-y-2),
                //    then slides up and fades in on hover.
                // 3. pointer-events-none: ensures the tooltip doesn't interfere with clicking
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none hidden xl:block"
              >
                {/* The Bubble */}
                <div className="bg-white/90 backdrop-blur-sm relative flex text-slate-900 items-center px-3 py-[6px] rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                  {/* The Text */}
                  <div className="text-[10px] font-bold uppercase tracking-widest leading-none">{link.name}</div>

                  {/* The Triangle Arrow */}
                  {/* A CSS border trick to make a triangle pointing up */}
                  <div className="border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-white/90 absolute -top-[6px] left-1/2 -translate-x-1/2" aria-hidden />
                </div>
              </div>

              {/* Icon */}
              <div>
                <link.Icon aria-hidden />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
