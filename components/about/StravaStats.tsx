"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../app/variants"; // Adjust path if needed

type StravaData = {
  last_updated: string;
  // We no longer need the weekly_stats in the type definition!
  recent_activities: {
    name: string;
    dist_display: number;
    type: string;
    date_display: string;
  }[];
};

export default function StravaStats({ data }: { data: StravaData }) {
  // Format the date
  const formattedDate = new Date(data.last_updated).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div 
      variants={fadeIn("up", 0.5)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm"
    >
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 mb-6 gap-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-[#FC4C02]">Strava</span> Recent Activities
          </h3>
          <p className="text-white/50 text-sm mt-1">Last updated: {formattedDate}</p>
        </div>
      </div>

      {/* Full-Width Recent Activities List */}
      <div>
        {/* max-h-[350px] keeps it from getting too tall, no-scrollbar keeps it clean */}
        <ul className="flex flex-col gap-y-3 max-h-[350px] overflow-y-auto no-scrollbar pr-1">
          {data.recent_activities.map((activity, index) => (
            <li 
              key={index} 
              className="flex justify-between items-center bg-white/5 border border-white/5 px-5 py-4 rounded-xl shrink-0 transition-colors hover:bg-white/10"
            >
              <div className="flex flex-col overflow-hidden pr-4">
                <span className="text-white/90 font-medium truncate text-lg">{activity.name}</span>
                <span className="text-white/40 text-sm mt-1">{activity.date_display} • {activity.type}</span>
              </div>
              <div className="text-right whitespace-nowrap pl-4">
                <span className="text-white font-bold text-xl">
                  {activity.dist_display} <span className="text-white/40 text-sm font-normal">mi</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}