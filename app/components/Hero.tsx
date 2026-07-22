"use client";

import { motion } from "framer-motion";
import Background from "./Background"; // Floating icons overlay

export default function Hero() {
  // Direct Client-side Resume Download Functionality
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Ensure resume.pdf is inside public/ folder
    link.download = "Ajit_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#121212] text-white flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Animated Floating Background Icons */}
      <Background />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 py-12">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left"
        >
         <span className="text-gray-400 text-lg mb-2 font-medium inline-flex items-center gap-2">
  Hello, I'm 
  <span className="inline-block animate-[wave_1.5s_infinite] origin-[70%_70%]">
    👋
  </span>
</span>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-3">
            Ajit Verma
          </h1>

          <h3 className="text-base sm:text-xl font-bold text-emerald-400 mb-6">
Building Scalable <span className="text-emerald-400">Frontend & Full-Stack</span> Web Applications          </h3>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
  Frontend Developer specializing in building high-performance, accessible, and scalable web applications using <span className="text-emerald-400 font-semibold">React</span>, <span className="text-emerald-400 font-semibold">Next.js (App Router)</span>, and modern <span className="text-emerald-400 font-semibold">JavaScript (ES6+)</span>. Skilled in state management with <span className="text-emerald-400 font-semibold">Redux Toolkit</span> and crafting pixel-perfect, responsive UIs using <span className="text-emerald-400 font-semibold">Tailwind CSS</span>. Focused on clean architecture, optimized performance, and fluid interactive user experiences.
</p>  {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              Contact
            </a>

            <button
              onClick={handleDownloadResume}
              className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-semibold px-8 py-3 rounded-full transition-all duration-300 active:scale-95"
            >
              Download CV
            </button>
 
          </div>
        </motion.div>

        {/* Right Side Illustration/Graphic Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          {/* Decorative Back Glow */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Hero Illustration Graphic */}
          <svg
            className="w-full max-w-md h-auto drop-shadow-2xl"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 250 C100 120, 380 120, 380 250 C380 380, 100 380, 100 250 Z"
              fill="#1E293B"
              opacity="0.5"
            />
            <circle cx="250" cy="220" r="80" fill="#10B981" opacity="0.8" />
            <rect x="180" y="280" width="140" height="120" rx="15" fill="#0F172A" />
            <circle cx="250" cy="220" r="50" fill="#121212" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}