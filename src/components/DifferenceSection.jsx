import React from "react";
import { motion } from "framer-motion";
import {
  PiMaskSadFill, // left list icon (sad/mask)
  PiCheckBold,   // check glyph
} from "react-icons/pi";

const PRIMARY = "#219EBC";
const ACCENT = "#FB8500";
const BG = "#f5f3ef";
const gradientRing = `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`;

function BulletNegative({ children }) {
  return (
    <li className="flex items-center gap-3 public_sans_body text-p2 font-p2 text-[#111827]/70 text-semibold">
      <span className="inline-flex items-center justify-center">
        <PiMaskSadFill className="text-[18px]" style={{ color: "#6B7280" }} />
      </span>
      {children}
    </li>
  );
}

function BulletPositive({ children }) {
  return (
    <li className="flex items-center gap-3 public_sans_body text-p2 font-p2 text-[#111827]/70">
      <span
        className="inline-flex items-center justify-center rounded-full"
        style={{
          width: 28,
          height: 28,
          background: "radial-gradient(circle at 50% 50%, #0B0B0C 0%, #16181B 100%)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          border: "2px solid transparent",
          backgroundImage: `linear-gradient(#0F1114, #0F1114), ${gradientRing}`,
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          color: "white",
        }}
        aria-hidden
      >
        <PiCheckBold size={14} />
      </span>
      {children}
    </li>
  );
}

export default function ComparisonSection() {
  const otherAgencies = [
    "Generic pre-built website layouts",
    "Unclear timelines and inconsistent communication",
    "Complex feedback and approval process",
    "Average visuals with limited creativity",
    "No strategic direction in design or content",
    "Minimal post-launch support or updates",
    "Limited SEO and technical optimization",
    "Outdated, non-responsive web designs",
  ];

  const beBeyondDigital = [
    "Custom design crafted for your brand identity",
    "Defined timelines and transparent project workflow",
    "Streamlined feedback system with quick revisions",
    "Premium visuals and conversion-focused UI/UX",
    "Strategy-led creative and content planning",
    "Dedicated post-launch maintenance and support",
    "SEO-optimized, performance-driven websites",
    "Modern, fully responsive mobile-first designs",
  ];

  return (
    <main className="w-full flex items-center justify-center relative bg-color_creame overflow-hidden">
      <div className="clients-testimonials-1-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="clients-testimonials-1 w-88% flex flex-col items-center py-14 gap-5 relative z-10">
          {/* TOP */}
          <div className="top-div-of-clients-testimonials-1 w-full flex flex-col items-center justify-center gap-1">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h2-div-for-clients-testimonials-1 text-center mb-4"
            >
              <h2 className="mb-0 text-center text-3xl sm:text-4xl font-semibold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
                  How we re Different?
                </span>
              </h2>
            </motion.div>
            <motion.h3
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-0 text-center text-[15px] text-[#111827]/70"
              style={{ fontWeight: 400 }}
            >
              Discover how BeBeyond Digital outperforms other web agencies with tailored creativity, advanced functionality, and exceptional post-launch support.
            </motion.h3>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-4 mb-4">
            {/* VS pill (black) */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[74px] z-20">
              <div className="px-3 py-1 rounded-full bg-black text-white text-[12px] bricolage_grotesque_head tracking-wide shadow">
                V/S
              </div>
            </div>
            {/* connector dots */}
            <span
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[112px] rounded-full"
              style={{
                width: 8,
                height: 8,
                background: "#fff",
                border: "2px solid #D1D5DB",
                zIndex: 10,
                boxShadow: "0 0 0 2px #f5f3ef",
              }}
            />
            <span
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[132px] rounded-full"
              style={{
                width: 8,
                height: 8,
                background: "#fff",
                border: "2px solid #D1D5DB",
                zIndex: 10,
                boxShadow: "0 0 0 2px #f5f3ef",
              }}
            />

            {/* LEFT: Other Agencies */}
            <div className="bg-white rounded-2xl border border-[#D4D4D8] overflow-hidden">
              <div className="px-6 py-4 bg-[#EFEFEF] border-b border-[#D4D4D8] rounded-t-2xl">
                <h3 className="bricolage_grotesque_head text-h5 font-h5 text-black text-center">
                  Other Agencies
                </h3>
              </div>
              <ul className="p-6 flex flex-col gap-3">
                {otherAgencies.map((t, i) => (
                  <BulletNegative key={i}>{t}</BulletNegative>
                ))}
              </ul>
            </div>

            {/* RIGHT: BeBeyond Digital (rounded gradient stroke) */}
            <div
              className="bg-white rounded-2xl overflow-hidden"
              style={{
                border: "2px solid transparent",
                backgroundImage: `linear-gradient(white, white), linear-gradient(180deg, #219ebc, #fb8500)`,
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                borderRadius: "1rem"       // Ensures 16px if not using Tailwind class, but we can do:
                // borderRadius: "24px"     // For perfect matching all around, use 24px or Tailwind's rounded-2xl
              }}
            >
              <div className="px-6 py-4 bg-white border-b border-[#ECECEC] rounded-t-2xl">
                <h3 className="bricolage_grotesque_head text-h5 font-h5 text-[#FB8500] text-center">
                  BeBeyond Digital Solution
                </h3>
              </div>
              <ul className="p-6 flex flex-col gap-3">
                {beBeyondDigital.map((t, i) => (
                  <BulletPositive key={i}>{t}</BulletPositive>
                ))}
              </ul>
            </div>
          </div>

          <motion.button
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="relative z-0 flex items-center justify-center 
              px-8 py-2.5 text-white text-[16px] font-semibold 
              public-sans bg-[#219EBC] overflow-hidden 
              before:absolute before:inset-0 before:-z-10 
              before:translate-x-[150%] before:translate-y-[150%] 
              before:scale-[2.5] before:rounded-[100%] 
              before:bg-[#FB8500] before:transition-transform 
              before:duration-700 hover:before:translate-x-0 
              hover:before:translate-y-0 
              active:scale-90 active:transition-all active:duration-300 
              400px:px-4 400px:py-2 rounded-2xl"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </main>
  );
}
