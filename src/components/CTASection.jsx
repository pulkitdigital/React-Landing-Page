// src/components/CTASection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const handleScroll = () => {
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FB8500]/15 via-transparent to-[#219EBC]/15 blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Glass card */}
        <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1324] leading-tight">
            From Idea to Impact We Handle Everything Digital.
          </h2>

          <p className="mt-4 text-[#0B1324]/70 text-base sm:text-lg max-w-2xl mx-auto">
            At
            <span className="text-[#219EBC] font-semibold">
              {" "}
              BeBeyond Digital Solutions
            </span>
            , we offer every digital marketing service under one roof — from social media and SEO to web design and e-commerce. Whether you need a website built on WordPress, Framer, or custom coding, we make it happen. We blend creativity, strategy, and technology to take your business beyond limits.
          </p>

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
              className="relative z-0 inline-flex items-center justify-center px-3 sm:px-4 py-1 text-white text-sm sm:text-[16px] font-semibold bg-[#219EBC] rounded-md overflow-hidden
                    before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#FB8500] before:transition-transform before:duration-700
                    hover:before:translate-x-0 hover:before:translate-y-0 active:scale-90 active:transition-all active:duration-300"
            >
              Contact Now
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
