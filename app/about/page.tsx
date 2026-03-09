import Header from "../../components/Header"; // Adjust paths based on your actual folder setup
import SpotifyStats from "../../components/SpotifyStats";

// Directly import the JSON data. 
// Webpack/Next.js handles this automatically.
import spotifyData from "../../data/stats.json"; 

export default function About() {
  return (
    <main className="relative min-h-screen w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-primary/30">
      
      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="min-h-screen flex flex-col pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto z-10 px-4 flex flex-col gap-y-12">
          
          {/* PAGE TITLE */}
          <div className="text-center lg:text-left mt-8 xl:mt-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              About Me <span className="text-accent">.</span>
            </h2>
            <p className="max-w-[600px] mx-auto lg:mx-0 text-white/70 text-base md:text-lg">
              Beyond the code, here is a real-time look at my life outside of work, powered by automated ETL pipelines pulling from my personal services.
            </p>
          </div>

          {/* DASHBOARD GRID */}
          <div className="w-full flex flex-col gap-y-8">
            {/* Spotify Pipeline Component */}
            <SpotifyStats data={spotifyData} />
            
            {/* Future Strava Component will go here! */}
            {/* <StravaStats data={stravaData} /> */}
          </div>

        </div>
      </div>
    </main>
  );
}