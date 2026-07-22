"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Background from "./Background"; // Floating Tech Icons Background

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, success: false, error: false });
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

  // React Hook Form initialization
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = async (data) => {
    setStatus({ loading: true, success: false, error: false });

    const formData = new FormData();
    formData.append("access_key", "121e7dce-8381-4420-afed-1675196f6ebd");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("subject", "New Portfolio Contact Message from Ajit's Site");
    formData.append("to_email", "ajitchaudhary714@gmail.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const resData = await response.json();

      if (resData.success) {
        setStatus({ loading: false, success: true, error: false });
        reset(); // Reset form using React Hook Form's reset method
      } else {
        setStatus({ loading: false, success: false, error: true });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section
      id="contact"
      className="relative  bg-[#121212] text-white py-12 sm:py-24 px-6 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Animated Floating Background */}
      <Background />

      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white tracking-wide">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Have a project in mind or want to connect? Send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Info Panel */}
          <div className="lg:col-span-2 bg-[#1e1e1e]/80 border border-white/10 p-6 rounded-2xl backdrop-blur-md space-y-6">
            <h3 className="text-xl font-bold text-emerald-400">Contact Information</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Feel free to reach out via email or connect with me on social platforms.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                  📧
                </span>
                <a
                  href="mailto:ajitchaudhary714@gmail.com"
                  className="hover:text-emerald-400 transition-colors"
                >
                  ajitchaudhary714@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <span className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                  ☎️
                </span>
                <span>+91 9026029479</span>
              </div>
               <div className="flex items-center gap-3 text-gray-300">
                <span className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                  📍
                </span>
                <span>Noida, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                Social Profiles
              </p>
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
            </div>
          </div>

          {/* Right Contact Form using React Hook Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-[#1e1e1e]/80 border border-white/10 p-8 rounded-2xl backdrop-blur-md space-y-5 shadow-2xl hover:border-emerald-500/30 transition-all duration-300"
          >
            {/* Name Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Enter your message..."
                {...register("message", { required: "Message is required" })}
                className="w-full p-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.loading}
              className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 text-black font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-98 flex items-center justify-center gap-2"
            >
              {status.loading ? "Sending Message..." : "Send Message"}
            </button>

            {/* Success Feedback */}
            {status.success && (
              <p className="text-emerald-400 text-sm text-center font-semibold mt-2">
                ✅ Message sent successfully! I will reply to you soon.
              </p>
            )}

            {/* Error Feedback */}
            {status.error && (
              <p className="text-red-400 text-sm text-center font-semibold mt-2">
                ❌ Something went wrong. Please try again or email directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}


