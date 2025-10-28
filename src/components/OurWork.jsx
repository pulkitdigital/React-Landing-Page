import React from "react";
import { motion } from "framer-motion";

const ORANGE = "#FB8500";
const BLUE = "#219EBC";

export default function OurWork() {
  const WORKS = [
    { src: "/our_works/social-media-marketing.jpg", alt: "Social Media Marketing" },
    { src: "/our_works/video-production.jpg", alt: "Video Production" },
    { src: "/our_works/website-design.jpg", alt: "Website Design" },
    { src: "/our_works/art-&-design.jpg", alt: "Social Media Marketing" },
    { src: "/our_works/branding.jpg", alt: "Video Production" },
    { src: "/our_works/content-&-marketing.jpg", alt: "Website Design" },
  ];

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, duration: 0.5, ease: "easeOut" },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="mb-0 text-center text-3xl sm:text-4xl font-semibold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
             See Our Work
          </span>
        </h2>
        <p className="mt-3 text-center text-[15px] text-[#111827]/70">
          Explore the stores we’ve transformed.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {WORKS.map((work, i) => (
          <motion.div
            key={i}
            variants={item}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
          >
            <img
              src={work.src}
              alt={work.alt}
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Overlay Gradient + Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center rounded-2xl">
              <p className="text-white text-sm sm:text-base font-medium mb-3">
                {work.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
