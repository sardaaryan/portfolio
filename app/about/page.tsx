import Header from "../../components/Header"; 
import SpotifyStats from "../../components/SpotifyStats";
import StravaStats from "../../components/StravaStats"; 

import spotifyData from "../../data/stats.json"; 
import stravaData from "../../data/metrics.json"; 

export default function About() {
  return (
    <main className="relative min-h-screen w-full overflow-y-scroll no-scrollbar bg-primary/30">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="min-h-screen flex flex-col pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto z-10 px-4 flex flex-col gap-y-12">
          
          <div className="text-center lg:text-left mt-8 xl:mt-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              About Me <span className="text-accent">.</span>
            </h2>
            <p className="max-w-[600px] mx-auto lg:mx-0 text-white/70 text-base md:text-lg">
              Beyond the code, here is a real-time look at my life outside of work, powered by automated ETL pipelines pulling from my personal services.
            </p>
          </div>

          <div className="w-full flex flex-col gap-y-8">
            <SpotifyStats data={spotifyData} />
            <StravaStats data={stravaData} />
          </div>

        </div>
      </div>
    </main>
  );
}