"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Background from "./Background"; // Floating Tech Icons Background

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

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
      className="relative min-h-screen bg-[#121212] text-white py-24 px-6 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Animated Floating Background */}
      <Background />

      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
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
                  📍
                </span>
                <span>India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                Social Profiles
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-white/5 hover:bg-emerald-500 hover:text-black text-gray-300 rounded-xl transition-all"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ajitchaudhary714"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-white/5 hover:bg-emerald-500 hover:text-black text-gray-300 rounded-xl transition-all"
                >
                  GitHub
                </a>
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
                placeholder="John Doe"
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
                placeholder="john@example.com"
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
                placeholder="Hi Ajit, I would like to discuss a project..."
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