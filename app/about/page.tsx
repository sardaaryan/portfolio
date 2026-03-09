import Header from "../../components/Header"; 
import SpotifyStats from "../../components/SpotifyStats";
import StravaStats from "../../components/StravaStats"; 

import spotifyData from "../../data/stats.json"; 
import stravaData from "../../data/metrics.json"; 

export default function About() {
  return (
    <main 
      // 1. Changed min-h-screen to h-screen so THIS container handles the scrolling
      className="relative h-screen w-full overflow-y-auto no-scrollbar"
      style={{
        // 2. Added a dark overlay gradient so your text remains readable over the busy poster!
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/about.png')",
        
        // 3. 'local' forces the background to scroll WITH the content inside this scrollable container
        backgroundAttachment: "local",         
        
        // 4. Anchors the image to the top so you see the top of the poster first
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
      {/* Added z-10 to ensure your content stays above everything */}
      <div className="relative flex-grow flex flex-col pt-32 pb-24 z-10">
        <div className="container mx-auto px-4 flex flex-col gap-y-12">
          
          {/* PAGE TITLE */}
          <div className="text-center lg:text-left mt-8 xl:mt-12">
            {/* The Gradient Heading */}
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-500">
              About Me <span className="text-white">.</span>
            </h2>
            
            {/* The Updated Text */}
            <p className="max-w-[650px] mx-auto lg:mx-0 text-white/90 text-lg md:text-xl font-medium drop-shadow-md leading-relaxed">
              Beyond the code, here is a real-time look at my life outside of work, powered by automated ETL pipelines pulling from my personally used services. 
              <br className="mt-2 block" />
              <span className="text-pink-400/90 text-base italic">
                (And yeah, I put together the Spider-Punk poster in the background 🎸)
              </span>
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