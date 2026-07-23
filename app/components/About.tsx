


"use client";

import React from "react";
import { 
  SiHtml5, 
  
  SiBootstrap, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb 
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";

import Background from "./Background"; // Floating Tech Icons Background

export default function About() {
  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "hover:text-orange-500 hover:border-orange-500/50" },
{ name: "CSS3", icon:  IoLogoCss3, color: "hover:text-blue-500 hover:border-blue-500/50" },    { name: "Bootstrap", icon: SiBootstrap, color: "hover:text-purple-500 hover:border-purple-500/50" },
    { name: "JavaScript", icon: SiJavascript, color: "hover:text-yellow-400 hover:border-yellow-400/50" },
    { name: "React.js", icon: SiReact, color: "hover:text-cyan-400 hover:border-cyan-400/50" },
    { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white hover:border-white/50" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-sky-400 hover:border-sky-400/50" },
    { name: "Node.js", icon: SiNodedotjs, color: "hover:text-green-500 hover:border-green-500/50" },
    { name: "MongoDB", icon: SiMongodb, color: "hover:text-emerald-500 hover:border-emerald-500/50" },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#121212] text-white py-24 px-4 md:px-6 overflow-hidden flex items-center justify-center"
    >
      {/* Floating Animated Background */}
      <Background />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text & Information */}
        <div className="flex flex-col text-left">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-400 mb-6 tracking-wide">
            About me
          </h2>

          <div className="text-gray-300 space-y-4 text-sm sm:text-base leading-relaxed mb-6">
            <p>
              Hi there! I'm <span className="font-bold text-white">Ajit Verma</span>, 
              a passionate Frontend & Web Developer with 2+ years of experience building modern, 
              scalable, and interactive web applications.
            </p>
            <p>
              I specialize in crafting responsive user interfaces and seamless user experiences using{" "}
              <span className="font-bold text-white">React.js, Next.js, JavaScript, Tailwind CSS,</span> and modern web technologies.
            </p>
            <p>
              Always learning and exploring new technologies, I thrive in fast-paced environments 
              and love solving real-world problems with clean, maintainable code.
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-6">
            <h3 className="text-emerald-400 font-bold text-base md:text-lg mb-1">Education:</h3>
            <p className="font-semibold text-sm sm:text-base text-white">Bachelor of Technology (CSE)</p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Dr. A.P.J. Abdul Kalam Technical University, Lucknow | 2019-2023
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">8.3 CGPA</p>
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <h3 className="text-emerald-400 font-bold text-base sm:text-lg mb-1">Experience:</h3>
            <p className="font-semibold text-sm sm:text-base text-white">Frontend Developer</p>
            <p className="text-gray-400 text-xs sm:text-sm">2+ Years of Hands-on Experience</p>
          </div>

          {/* Main Skills Icons Section */}
          <div>
            <h3 className="text-emerald-400 font-bold text-base sm:text-lg mb-4">
              Here are my main skills:
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-4">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    title={skill.name} // Hover karne par skill name show karega
                    className={`p-2 sm:p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 
                      transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg 
                      flex items-center justify-center group ${skill.color}`}
                  >
                    <Icon className="text-xl sm:text-2xl transition-colors duration-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Profile Picture Card */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/10 group">
            {/* Glowing Accent Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-purple-500/20 to-pink-500/20 z-0" />
            
            <img
              src="/image.png" 
              alt="Ajit Verma"
              className="w-full h-full object-cover object-center relative z-10 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}