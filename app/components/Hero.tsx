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

   const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ajit-verma-174ba5250/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/ajitchaudhary714",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:ajitchaudhary714@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative  bg-[#121212] text-white flex items-center justify-center pt-20 px-4 sm:px-6 overflow-hidden"
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

          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight mb-3">
            Ajit Verma
          </h1>

          <h3 className="text-base sm:text-xl font-bold text-emerald-400 mb-6">
Building Scalable <span className="text-emerald-400">Frontend & Full-Stack</span> Web Applications          </h3>

        <p className="text-gray-400 text-sm sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
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
          <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="p-3 bg-white/5 hover:bg-emerald-500 hover:text-black text-gray-300 rounded-xl transition-all duration-300 border border-white/10 hover:border-emerald-500 shadow-lg hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
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
          <div className="absolute w-56 h-56 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

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