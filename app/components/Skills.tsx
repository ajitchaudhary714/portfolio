"use client";

import React from "react";
import { motion } from "framer-motion";
import Background from "./Background"; // Floating Tech Icons Background

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: "90%" },
        { name: "Next.js", level: "85%" },
        { name: "JavaScript (ES6+)", level: "90%" },
                { name: "TypeScript", level: "70%" },

        { name: "Tailwind CSS", level: "95%" },
        { name: "HTML5 / CSS3", level: "95%" },
        { name: "Redux Toolkit", level: "80%" },
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js", level: "50%" },
        { name: "Express.js", level: "50%" },
        { name: "REST APIs Integration", level: "90%" },
        { name: "MongoDB", level: "70%" },
      ],
    },
    {
      category: "Tools & Version Control",
      skills: [
        { name: "Git & GitHub", level: "88%" },
        { name: "VS Code", level: "95%" },
        { name: "Postman", level: "85%" },
        { name: "Vercel / Netlify", level: "90%" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative  bg-[#121212] text-white py-12  sm:py-24 px-4 sm:px-6 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background Floating Animation */}
      <Background />

      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white tracking-wide">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Technologies, frameworks, and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1e1e1e]/80 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:border-emerald-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-emerald-400 mb-6 border-b border-white/10 pb-3">
                {cat.category}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1 text-sm">
                      <span className="font-semibold text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-xs text-emerald-400 font-bold">
                        {skill.level}
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}