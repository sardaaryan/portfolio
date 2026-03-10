"use client";

import { motion } from "framer-motion";

// You might need to adjust this path to wherever your variants file is
import { fadeIn } from "../../app/variants"; 

type SpotifyData = {
  last_updated: string;
  total_listening_time: string;
  top_artists_weekly: { artist_name: string; plays: number }[];
  top_tracks_weekly: { track_name: string; artist_name: string; plays: number }[];
  top_albums_weekly: { album_name: string; artist_name: string; plays: number }[];
};

export default function SpotifyStats({ data }: { data: SpotifyData }) {
  // Format the date to be more readable
  const formattedDate = new Date(data.last_updated).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div 
      variants={fadeIn("up", 0.4)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm"
    >
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 mb-6 gap-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-[#1DB954]">Spotify</span> Weekly Stats
          </h3>
          <p className="text-white/50 text-sm mt-1">Last updated: {formattedDate}</p>
        </div>
        <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/5 text-center">
          <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Total Listening</p>
          <p className="text-lg font-bold text-accent">{data.total_listening_time}</p>
        </div>
      </div>

      {/* 3-Column Grid for Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Top Artists */}
        <div>
          <h4 className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">Top Artists</h4>
          <ul className="flex flex-col gap-y-3">
            {data.top_artists_weekly.map((artist, index) => (
              <li key={index} className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-md">
                <span className="text-white/80 font-medium truncate pr-4">{artist.artist_name}</span>
                <span className="text-white/40 text-sm">{artist.plays} plays</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Tracks */}
        <div>
          <h4 className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">Top Tracks</h4>
          <ul className="flex flex-col gap-y-3">
            {data.top_tracks_weekly.map((track, index) => (
              <li key={index} className="flex flex-col bg-white/5 px-3 py-2 rounded-md">
                <div className="flex justify-between items-start">
                  <span className="text-white/80 font-medium truncate pr-4">{track.track_name}</span>
                  <span className="text-white/40 text-sm whitespace-nowrap">{track.plays} plays</span>
                </div>
                <span className="text-white/50 text-xs truncate">{track.artist_name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Albums */}
        <div>
          <h4 className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">Top Albums</h4>
          <ul className="flex flex-col gap-y-3">
            {data.top_albums_weekly.map((album, index) => (
              <li key={index} className="flex flex-col bg-white/5 px-3 py-2 rounded-md">
                <div className="flex justify-between items-start">
                  <span className="text-white/80 font-medium truncate pr-4">{album.album_name}</span>
                  <span className="text-white/40 text-sm whitespace-nowrap">{album.plays} plays</span>
                </div>
                <span className="text-white/50 text-xs truncate">{album.artist_name}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
}