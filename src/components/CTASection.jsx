// src/components/CTASection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const handleScroll = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative w-full py-16 sm:py-20 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/cta-img.jpg')", // 👈 image from 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue overlay on top of image */}
      <div className="absolute inset-0 bg-[#1f2237]/70 z-10" />

      {/* Optional gradient glow for depth */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#FB8500]/15 via-transparent to-[#219EBC]/15 blur-3xl z-20" /> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20"
      >
        {/* Glassmorphic Card */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1324] leading-tight">
            Bring Your Vision to Life — Your Dream Website Awaits ✨
          </h2>

          <p className="mt-4 text-[#0B1324]/70 text-base sm:text-lg max-w-2xl mx-auto">
            Whether you need a powerful <b>WordPress</b> site, a custom{" "}
            <b>coded</b> experience, or a creative <b>Framer</b> showcase —{" "}
            <span className="text-[#219EBC] font-semibold">BeBeyond Digital</span>{" "}
            builds modern, fast, and stunning websites that drive real results.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5 mt-8">
            {/* Visit Main Website */}
            <a
              href="https://bebeyond.digital/"
              target="_blank"
              rel="noreferrer"
              className="relative z-0 inline-flex items-center justify-center px-6 sm:px-7 py-3 text-[15px] font-semibold text-white bg-black rounded-md shadow-md hover:shadow-lg transition-all duration-500 hover:scale-[1.03] active:scale-95"
            >
              Visit Main Website
            </a>

            {/* Contact Now */}
            <button
              onClick={handleScroll}
              className="relative z-0 inline-flex items-center justify-center px-6 sm:px-7 py-3 text-[15px] font-semibold text-white bg-[#219EBC] rounded-md overflow-hidden
              before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#FB8500] before:transition-transform before:duration-700
              hover:before:translate-x-0 hover:before:translate-y-0 active:scale-95"
            >
              Contact Now
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
