import Header from "../../components/Header";
import SpotifyStats from "../../components/SpotifyStats";
import StravaStats from "../../components/StravaStats";

import spotifyData from "../../data/stats.json";
import stravaData from "../../data/metrics.json";

export default function About() {
  return (
    <main
      className="relative h-screen w-full overflow-y-auto no-scrollbar"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/about.png')",
        backgroundAttachment: "local",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative flex-grow flex flex-col pt-32 pb-24 z-10">
        <div className="container mx-auto px-4 flex flex-col gap-y-12">
          {/* PAGE TITLE SECTION */}
          <div className="text-center lg:text-left mt-8 xl:mt-12">
            {/* 1. PINK TO PURPLE GRADIENT HEADING */}
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter uppercase 
               text-transparent bg-clip-text 
               bg-[linear-gradient(to_right,#7000ff,#ff00ff,#00ffff,#ff00ff,#7000ff)] 
               animate-gradient w-fit mx-auto lg:mx-0 
               drop-shadow-[0_0_15px_rgba(255,0,255,0.3)]"
            >
              About Me <span className="text-white">.</span>
            </h2>

            <p className="max-w-[650px] mx-auto lg:mx-0 text-white/90 text-lg md:text-xl font-medium drop-shadow-md leading-relaxed">
              Beyond the code, here is a real-time look at my life outside of work, powered by automated ETL pipelines pulling from my personally used services.
              <br className="mt-2 block" />
              {/* 2. MAGENTA / ORCHID SUBTEXT (Between Pink and Purple) */}
              <span className="text-[#d441ff] text-base italic font-bold">(And yeah, I put together the Spider-Punk poster in the background 🎸)</span>
            </p>
          </div>

          {/* DASHBOARD GRID */}
          <div className="w-full flex flex-col gap-y-8">
            <SpotifyStats data={spotifyData} />
            <StravaStats data={stravaData} />
          </div>
        </div>
      </div>
    </main>
  );
}
