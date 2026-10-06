"use client";

import React from "react";
import { motion } from "framer-motion";
import Background from "./Background"; // Floating Tech Icons Background

export default function Experience() {
  // Professional Experience Data
  const experiences = [
   
{
  company: "TriArmour AI Private Limited ",
  role: "Frontend Developer",
  duration: "Feb 2026 – Present",
  location: "Remote",
  highlights: [
    "Developed and deployed scalable web applications using React.js, Next.js, TypeScript, and Tailwind CSS.",
    "Built responsive and reusable user interfaces using React.js, Next.js, React Hooks, and component-based architecture.",
    "Integrated RESTful APIs using Axios and Fetch for authentication, data management, and application workflows.",
    "Implemented application state management using Redux Toolkit and handled form validation and API data efficiently.",
    "Built modern and interactive UI features with a strong focus on responsive design, usability, and user experience.",
    "Implemented authentication workflows using JWT and integrated frontend applications with backend services.",
    "Optimized application performance, responsiveness, and scalability while collaborating with clients to understand requirements and deliver production-ready solutions."
  ],
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Redux Toolkit",
    "React Hooks",
    "REST APIs",
    "JWT",
    "Axios",
    "React Hook Form",
    "Zod",
    "TanStack Query"
  ]
},

  
{
  company: "RedSecOps Cyber India Pvt Ltd ",
  role: "Frontend Developer",
  duration: "Jan 2024 - Jan 2026",
  location: "Full-Time",
  highlights: [
    "Developed and optimized responsive web applications using React.js, Next.js, TypeScript, and JavaScript.",
    "Built dynamic user interfaces and reusable components with React.js, Next.js, Tailwind CSS, and Framer Motion.",
    "Integrated RESTful APIs and implemented state management using Redux Toolkit to deliver scalable and high-performance applications.",
  ],

  skills: [
    "Next.js (App Router)",
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Redux Toolkit",
    "REST APIs",
    "Framer Motion",
    "Git & GitHub",
  ]
},

    {
      company: "Tech Curve AI",
      role: "Frontend Developer",
      duration: "Mar 2023 - Oct 2023",
      location: " Remote",
      highlights: [
        "Developed cross-browser compatible, high-performing web interfaces following modern UI/UX design guidelines.",
        "Built reusable React.js components and managed application state efficiently using Redux Toolkit.",
        "Collaborated with cross-functional teams, UI/UX designers, and backend engineers to deliver scalable frontend features.",
      ],
      skills: ["JavaScript", "React.js", "Redux Toolkit", "HTML5/CSS3", "Bootstrap", "Git"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative  bg-[#121212] text-white py-12 sm:py-24  px-4 sm:px-6 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background Floating Animation */}
      <Background />

      <div className="max-w-5xl mx-auto w-full z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white tracking-wide">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            A summary of my professional frontend development background and contributions.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 group"
            >
              {/* Timeline Glowing Dot Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#121212] group-hover:scale-125 group-hover:bg-emerald-400 transition-all duration-300 shadow-md shadow-emerald-500/50" />

              {/* Date Badge for Desktop View */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2 sm:mb-0 sm:w-28 sm:text-right">
                {exp.duration}
              </div>

              {/* Glassmorphic Card */}
              <div className="bg-[#1e1e1e]/70 border border-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl hover:border-emerald-500/40 transition-all duration-300 hover:shadow-emerald-500/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-gray-400  bg-white/5 px-3 py-1 rounded-full w-fit">
                    {exp.location}
                  </span>
                </div>

                <p className="text-emerald-400 group-hover:text-gray-100 transition-colors text-sm font-semibold mb-4">
                  {exp.company}
                </p>

                {/* Bullets List */}
{/* Bullets List */}
<ul className="list-disc list-outside  pl-3 sm:pl-5 space-y-2 text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
  {exp.highlights.map((item, i) => (
    <li key={i} className="pl-1">
      {item}
    </li>
  ))}
</ul>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-1.5 sm:px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}