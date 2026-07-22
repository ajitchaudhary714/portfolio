"use client";

import { motion } from "framer-motion";

const techIcons = [
  { name: "JS", bg: "bg-yellow-400/20 text-yellow-300 border-yellow-400/30", top: "15%", left: "10%", duration: 6 },
  { name: "React", bg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30", top: "65%", left: "18%", duration: 8 },
  { name: "HTML", bg: "bg-orange-500/20 text-orange-300 border-orange-500/30", top: "25%", left: "80%", duration: 7 },
  { name: "CSS", bg: "bg-blue-500/20 text-blue-300 border-blue-500/30", top: "75%", left: "70%", duration: 5 },
  { name: "Node", bg: "bg-green-600/20 text-green-300 border-green-600/30", top: "45%", left: "5%", duration: 9 },
  { name: "Next", bg: "bg-white/10 text-gray-300 border-white/20", top: "85%", left: "40%", duration: 6 },
];

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {techIcons.map((icon, idx) => (
        <motion.div
          key={idx}
          className={`absolute px-2.5 py-1 text-xs font-bold rounded-md border backdrop-blur-sm shadow-sm opacity-30 hover:opacity-100 transition-opacity duration-300 ${icon.bg}`}
          style={{ top: icon.top, left: icon.left }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon.name}
        </motion.div>
      ))}
    </div>
  );
}