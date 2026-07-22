"use client";

import React, { useState, useEffect } from "react";
import Background from "./Background"; // Floating Tech Icons Background
import Skills from "./Skills";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll event listener to add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Client-side Resume Download Handler
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // public/ folder me resume.pdf honi chahiye
    link.download = "Ajit_Verma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-hidden ${
        scrolled
          ? "bg-[#121212]/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-[#121212]/40 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      {/* Background Floating Icons Animation */}
      {/* <Background /> */}

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative z-10">
        {/* Modern Logo with Terminal/Code Icon */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 text-emerald-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-xl font-extrabold text-white tracking-wider">
            Ajit<span className="text-emerald-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-semibold tracking-wide text-gray-300">
            {links.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume CTA Button */}
          <button
            onClick={handleDownloadResume}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-5 py-2 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95 text-xs tracking-wider uppercase"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}