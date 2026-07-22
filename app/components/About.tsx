"use client";

import React from "react";
import Image from "next/image"; // Agar React.js use kar rahe hain to <img> tag use kar sakte hain
import Background from "./Background"; // Floating Tech Icons Background

export default function About() {
  const skills = [
    { name: "HTML5", bg: "bg-orange-600" },
    { name: "CSS3", bg: "bg-blue-600" },
    { name: "Bootstrap", bg: "bg-purple-600" },
    { name: "JavaScript", bg: "bg-yellow-500 text-black" },
    { name: "React.js", bg: "bg-cyan-500 text-black" },
    { name: "Next.js", bg: "bg-white text-black" },
    { name: "Tailwind", bg: "bg-sky-400 text-black" },
    { name: "Node.js", bg: "bg-green-600" },
    { name: "MongoDB", bg: "bg-emerald-600" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#121212] text-white py-24 px-6 overflow-hidden flex items-center justify-center"
    >
      {/* Floating Animated Background */}
      <Background />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text & Information */}
        <div className="flex flex-col text-left">
          <h2 className="text-4xl font-extrabold text-emerald-400 mb-6 tracking-wide">
            About me
          </h2>

          <div className="text-gray-300 space-y-4 text-base leading-relaxed mb-6">
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
            <h3 className="text-emerald-400 font-bold text-lg mb-1">Education:</h3>
            <p className="font-semibold text-white">Bachelor of Technology (CSE)</p>
            <p className="text-gray-400 text-sm">Dr. A.P.J. Abdul Kalam Technical University, Lucknow | 2019-2023

</p>
 <p className="text-gray-400 text-sm">8.3 CGPA

</p>
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <h3 className="text-emerald-400 font-bold text-lg mb-1">Experience:</h3>
            <p className="font-semibold text-white">Frontend Developer</p>
            <p className="text-gray-400 text-sm">2+ Years of Hands-on Experience</p>
          </div>

          {/* Main Skills Badges */}
          <div>
            <h3 className="text-emerald-400 font-bold text-lg mb-3">Here are my main skills:</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold shadow-md hover:scale-105 transition-transform duration-200 cursor-default ${skill.bg}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Profile Picture Card */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md h-[450px] rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/10 group">
            {/* Glowing Accent Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-purple-500/20 to-pink-500/20 z-0" />
            
            {/* Replace /profile.jpg with your photo path in public folder */}
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