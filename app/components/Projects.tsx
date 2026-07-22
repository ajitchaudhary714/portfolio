"use client";

import React from "react";
import { motion } from "framer-motion";
import Background from "./Background"; // Floating Tech Icons Background

export default function Projects() {
  // Provided 5 Live Projects Data
  const projects = [
    {
      title: "MySkillWallet",
      description:
        "AI-powered talent management & skills platform designed to streamline skill verification and career growth.",
      tags: ["React.js", "Next.js", "Tailwind CSS", "REST API"],
      link: "https://myskillwallet.ai/",
      category: "AI & EdTech Platform",
    },
    {
      title: "Conqt",
      description:
        "Enterprise B2B marketplace platform for seamless software acquisition and vendor management solutions.",
      tags: ["React.js", "Tailwind CSS", "Redux", "Node.js"],
      link: "https://conqt.com/",
      category: "B2B Marketplace",
    },
    {
      title: "Troven AI",
      description:
        "Innovative AI-driven platform delivering smart automated workflows and data intelligence tools.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://troven.ai/",
      category: "AI Platform",
    },
    {
      title: "SSN Curvv AI",
      description:
        "Modern analytics and AI dashboard application with rich data visualization and smooth interactivity.",
      tags: ["React.js", "Recharts", "Tailwind CSS", "REST API"],
      link: "https://ssn.curvv-ai.com/",
      category: "AI Dashboard",
    },
    {
      title: "Upahaar Setu",
      description:
        "Digital web application focused on seamless gifting, donations, and social connect services.",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Web APIs"],
      link: "https://upahaarsetu.com/",
      category: "Web Application",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#121212] text-white py-24 px-6 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Animated Floating Background */}
      <Background />

      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Some of the live web applications and production platforms I've worked on.
          </p>
        </div>

        {/* Animated Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#1e1e1e]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
            >
              {/* Top Card Bar */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  
                  {/* External Link Icon */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors p-1"
                    title="Visit Live Site"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom Card Area */}
              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 text-sm"
                >
                  Live Demo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}