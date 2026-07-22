// "use client";

// import React, { useState, useEffect } from "react";
// import Background from "./Background"; // Floating Tech Icons Background
// import Skills from "./Skills";

// const links = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Experience", href: "#experience" },
//   { name: "Projects", href: "#projects" },
//   { name: "Skills", href: "#skills" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   // Scroll event listener to add shadow on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Client-side Resume Download Handler
//   const handleDownloadResume = () => {
//     const link = document.createElement("a");
//     link.href = "/resume.pdf"; // public/ folder me resume.pdf honi chahiye
//     link.download = "Ajit_Verma_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-hidden ${
//         scrolled
//           ? "bg-[#121212]/80 backdrop-blur-md border-b border-white/10 shadow-lg"
//           : "bg-[#121212]/40 backdrop-blur-sm border-b border-white/5"
//       }`}
//     >
//       {/* Background Floating Icons Animation */}
//       {/* <Background /> */}

//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative z-10">
//         {/* Modern Logo with Terminal/Code Icon */}
//    <a
//   href="#home"
//   className="flex items-center gap-3.5 group cursor-pointer"
// >
//   {/* AV Custom Box */}
//   <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1e1e1e] to-[#121212] border border-emerald-500/30 flex items-center justify-center font-mono font-black text-emerald-400 text-sm shadow-lg shadow-black/50 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:scale-105 transition-all duration-300 overflow-hidden">
//     {/* Inner Ambient Glow */}
//     <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//     <span className="relative z-10 tracking-tighter group-hover:text-white transition-colors">
//       &lt;AV/&gt;
//     </span>
//   </div>

//   {/* Typography */}
//   <div className="flex flex-col leading-tight">
//     <div className="flex items-center gap-1.5">
//       <span className="text-lg font-black text-white tracking-tight group-hover:text-emerald-300 transition-colors">
//         Ajit Verma
//       </span>
//       <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//     </div>
//     <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/80 font-semibold">
//       Frontend Engineer
//     </span>
//   </div>
// </a>
//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex items-center gap-8">
//           <ul className="flex items-center gap-6 text-sm font-semibold tracking-wide text-gray-300">
//             {links.map((item) => (
//               <li key={item.name}>
//                 <a
//                   href={item.href}
//                   className="hover:text-emerald-400 transition-colors duration-200"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Resume CTA Button */}
//           <button
//             onClick={handleDownloadResume}
//             className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-5 py-2 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95 text-xs tracking-wider uppercase"
//           >
//             Resume
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";

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
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State

  // Scroll event listener to add shadow/blur on scroll
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
    link.href = "/resume.pdf";
    link.download = "Ajit_Verma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false); // Close mobile drawer on download
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121212]/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-[#121212]/40 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative z-10">
        {/* Modern Logo */}
        <a href="#home" className="flex items-center gap-3.5 group cursor-pointer">
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1e1e1e] to-[#121212] border border-emerald-500/30 flex items-center justify-center font-mono font-black text-emerald-400 text-sm shadow-lg shadow-black/50 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 tracking-tighter group-hover:text-white transition-colors">
              &lt;AV/&gt;
            </span>
          </div>

          <div className="flex flex-col leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                Ajit Verma
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/80 font-semibold">
              Frontend Engineer
            </span>
          </div>
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

          <button
            onClick={handleDownloadResume}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-5 py-2 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95 text-xs tracking-wider uppercase"
          >
            Resume
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-emerald-400 focus:outline-none p-2 rounded-lg transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.293 5.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden border-b border-white/10 ${
          isOpen ? "max-h-96 opacity-100 bg-[#121212]/95 backdrop-blur-xl" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-sm font-semibold text-gray-300">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={handleDownloadResume}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 text-xs tracking-wider uppercase"
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}