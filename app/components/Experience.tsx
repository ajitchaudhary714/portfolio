"use client";

import React from "react";
import { motion } from "framer-motion";
import Background from "./Background"; // Floating Tech Icons Background

export default function Experience() {
  // Professional Experience Data
  const experiences = [
    {
      company: "Self-Employed",
      role: "Freelance Frontend Developer",
      duration: "Jan 2026 – Present",
      location: "Remote",
      highlights: [
        "Developed and deployed modern web applications using React.js, Next.js, TypeScript, and Tailwind CSS.",
        "Integrated REST APIs and third-party services for authentication, payments, and data management.",
        "Built AI-powered features using OpenAI APIs, including intelligent content generation, chat assistants, and automation workflows.",
        "Implemented dynamic dashboards, reusable component libraries, and responsive user interfaces.",
        "Worked with React Hook Form, Zod, Redux Toolkit, and TanStack Query for scalable frontend architecture.",
        "Optimized application performance through code splitting, lazy loading, and SEO best practices in Next.js.",
        "Collaborated directly with clients to gather requirements, deliver projects, and provide ongoing technical support."
      ],
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "OpenAI API",
        "TanStack Query",
        "React Hook Form",
        "Zod",
        "Redux Toolkit",
        "REST APIs"
      ]
    },
    {
      company: "RedSecOps Cyber India Pvt Ltd ",
      role: "Frontend Developer",
      duration: "Nov 2023 - Jan 2026",
      location: "Full-Time",
      highlights: [
        "Architected and optimized responsive web dashboards using React.js, Next.js, and Tailwind CSS.",
        "Engineered dynamic user interfaces with smooth interactive animations leveraging Framer Motion.",
        "Seamlessly integrated complex RESTful APIs and state management to enhance overall platform performance.",
      ],
      skills: [
        "Next.js (App Router)",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Framer Motion",
        "Redux Toolkit ",
        "REST APIs & GraphQL",
        "Shadcn UI",
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
        "Managed application state efficiently using Redux Toolkit, significantly reducing overall page load times.",
        "Collaborated with cross-functional teams, UI/UX designers, and backend engineers to deliver scalable features.",
      ],
      skills: ["JavaScript", "React.js", "Redux Toolkit", "HTML5/CSS3", "Bootstrap", "Git"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#121212] text-white py-24 px-6 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background Floating Animation */}
      <Background />

      <div className="max-w-5xl mx-auto w-full z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
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
              <div className="bg-[#1e1e1e]/70 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:border-emerald-500/40 transition-all duration-300 hover:shadow-emerald-500/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
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
<ul className="list-disc list-outside pl-5 space-y-2 text-gray-300 text-sm leading-relaxed mb-6">
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
                      className="text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2.5 py-1 rounded-md"
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