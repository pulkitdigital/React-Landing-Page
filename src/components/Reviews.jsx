// import React, { useState, useEffect } from "react";
// import { FaUserCircle, FaStar } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const ORANGE = "#FB8500";
// const BLUE = "#219EBC";

// // Review Data — you can add/remove reviews easily here
// const REVIEWS = [
//     {
//         name: "Rahul Banka",
//         role: "Senior Director, Acme",
//         rating: 5,
//         quote:
//             "BeBeyond shipped our store in 14 days. Clear comms, zero chaos, and a launch that just worked.",
//     },
//     {
//         name: "Aaradhya Mehta",
//         role: "Founder, Glowphoria",
//         rating: 5,
//         quote:
//             "Design to deployment was smooth and fast. The UI feels modern, and their team communicates like clockwork.",
//     },
//     {
//         name: "Kunal Sharma",
//         role: "Head of E-com, Zephyr",
//         rating: 4,
//         quote:
//             "The process was professional and transparent. We were updated at every step, and the result was top-tier.",
//     },
//     {
//         name: "Srishti Verma",
//         role: "Business Dev Manager, NorthStar",
//         rating: 5,
//         quote:
//             "Loved the premium finish! The branding and site design feel cohesive and truly high-end.",
//     },
// ];

// export default function CustomerReviews() {
//     const [current, setCurrent] = useState(0);

//     // Auto-slide every 6 seconds
//     useEffect(() => {
//         const timer = setInterval(
//             () => setCurrent((prev) => (prev + 1) % REVIEWS.length),
//             6000
//         );
//         return () => clearInterval(timer);
//     }, []);

//     const review = REVIEWS[current];

//     return (
//         <section className="relative mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8 py-16">
//             {/* soft background gradient */}
//             <motion.div
//                 aria-hidden
//                 className="pointer-events-none absolute inset-0 -z-10"
//                 style={{
//                     background: `radial-gradient(700px 260px at 20% 35%, ${BLUE}18, transparent 70%),
//                        radial-gradient(700px 260px at 80% 70%, ${ORANGE}18, transparent 70%)`,
//                 }}
//                 animate={{ opacity: [0.8, 1, 0.8] }}
//                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//             />

//             {/* heading */}
//             <div className="text-center mb-10">
//                 <h2
//                     className="text-3xl sm:text-4xl font-semibold bg-clip-text text-transparent"
//                     style={{
//                         backgroundImage: `linear-gradient(90deg, ${ORANGE}, ${BLUE})`,
//                     }}
//                 >
//                     Customer Reviews
//                 </h2>
//                 <p className="text-sm sm:text-base text-[#0B1324]/70 mt-2">
//                     Real stories from brands we’ve helped build.
//                 </p>
//             </div>

//             {/* review card */}
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={current}
//                     initial={{ opacity: 0, y: 20, scale: 0.98 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     exit={{ opacity: 0, y: -20, scale: 0.98 }}
//                     transition={{ duration: 0.45 }}
//                     className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6"
//                 >
//                     {/* avatar left */}
//                     <div className="flex-shrink-0 flex flex-col items-center md:items-start">
//                         <div className="bg-[#F5F5F5] rounded-2xl flex items-center justify-center w-[120px] h-[120px]">
//                             <FaUserCircle size={70} className="text-gray-300" />
//                         </div>

//                     </div>
//                     <div className=" h-full">
//                         <div className="text-center md:text-left mt-3">
//                             <h3 className="text-[16px] font-semibold text-[#111827]">
//                                 {review.name}
//                             </h3>
//                             <p className="text-[13px] text-[#6B7280] mt-0">{review.role}</p>
//                             <div className="flex justify-center md:justify-start mt-2">
//                                 {Array.from({ length: 5 }).map((_, i) => (
//                                     <FaStar
//                                         key={i}
//                                         size={14}
//                                         color={i < review.rating ? "#F59E0B" : "#E5E7EB"}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <p className="text-[17px] sm:text-[18px] text-[#111827] font-medium leading-relaxed">
//                             {review.quote}
//                         </p>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* dots navigation */}
//             <div className="mt-6 flex items-center justify-center gap-2">
//                 {REVIEWS.map((_, i) => (
//                     <button
//                         key={i}
//                         onClick={() => setCurrent(i)}
//                         aria-label={`Go to review ${i + 1}`}
//                         className={`h-2.5 rounded-full transition-all ${i === current ? "w-6 bg-gray-500" : "w-2.5 bg-gray-200"
//                             }`}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }


import React from "react";
import { motion } from "framer-motion";
import { LuTrendingUp, LuSparkles } from "react-icons/lu";
import { FiBarChart } from "react-icons/fi"; // fallback bar chart icon
import { PiQuotesFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { testimonials2 } from "./../Testimonials"

const CYAN = "#219EBC";
const CYAN_TINT = "#E6F5FA";
const ORANGE = "#FB8500";
const ORANGE_TINT = "#FFF3E5";

const StatCard = ({ value, label, tone = "cyan", IconCmp }) => {
  const isCyan = tone === "cyan";
  const bg = isCyan ? CYAN_TINT : ORANGE_TINT;
  const stroke = isCyan ? CYAN : ORANGE;

  return (
    <div
      className="rounded-2xl border flex flex-col justify-between h-full p-5 md:p-6"
      style={{ backgroundColor: bg, borderColor: `${stroke}22` }}
    >
      <div>
        <h4 className="bricolage_grotesque_head text-h2 font-h2 leading-none" style={{ color: "#0F172A" }}>
          {value}
        </h4>
        <p className="public_sans_body text-p2 font-p2 mt-1" style={{ color: "#475569" }}>
          {label}
        </p>
      </div>
      <div className="mt-6 inline-flex items-center">
        <span
          className="inline-flex items-center justify-center rounded-2xl"
          style={{
            width: 40, height: 40,
            background: isCyan ? `${CYAN}12` : `${ORANGE}12`,
            border: `1px solid ${isCyan ? CYAN : ORANGE}33`,
            color: isCyan ? CYAN : ORANGE,
          }}
        >
          {IconCmp ? <IconCmp size={32} /> : <LuTrendingUp size={32} />}
        </span>
      </div>
    </div>
  );
};

const QuoteCard = ({ quote, author, role }) => (
  <div className="rounded-2xl border p-5 md:p-6 bg-white h-full" style={{ borderColor: "#E5E7EB" }}>
    <span className="inline-flex text-h4" style={{ color: "#94A3B8" }}>
      <PiQuotesFill />
    </span>
    <p className="public_sans_body text-p1 font-p1 mt-2" style={{ color: "#334155" }}>
      {quote}
    </p>
    <div className="mt-5 flex items-center gap-4">
      {/* plain profile icon with no frame/padding */}
      <FaUserCircle size={48} className="text-[#94A3B8]" />
      <div className="min-w-0">
        <h6 className="text-black font-600 text-p1 font-p1 leading-none">{author}</h6>
        {role ? (
          <p className="public_sans_body text-p3 font-p3 mt-1 truncate" style={{ color: "#64748B" }}>
            {role}
          </p>
        ) : null}
      </div>
    </div>
  </div>
);

// Desktop placement map (12-col grid)
// 1: stat 2X (cols 1-3) | 2: stat 5X (cols 4-6) | 3: quote (cols 7-12)
// 4: quote (cols 1-6)   | 5: quote (cols 7-12)
// 6: stat 5X (cols 1-3) | 7: quote (cols 4-9)  | 8: stat 3X (cols 10-12)
const layoutLg = [
  "lg:col-span-3 lg:col-start-1",
  "lg:col-span-3 lg:col-start-4",
  "lg:col-span-6 lg:col-start-7",
  "lg:col-span-6 lg:col-start-1",
  "lg:col-span-6 lg:col-start-7",
  "lg:col-span-3 lg:col-start-1",
  "lg:col-span-6 lg:col-start-4",
  "lg:col-span-3 lg:col-start-10",
];

function ClientsTestimonials1() {
  return (
    <section className="relative mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8 py-0">
      <div className="clients-testimonials-1-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="clients-testimonials-1 w-88% flex flex-col items-center py-14 gap-5 relative z-10">
          <div className="top-div-of-clients-testimonials-1 w-full flex flex-col items-center justify-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h2-div-for-clients-testimonials-1 text-center"
            >
              <span className="span-for-h2-div-for-clients-testimonials-1"></span>
              <h2 className="mb-2 text-center text-3xl sm:text-4xl font-semibold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
                        Cusomer Reviews
                    </span>
                </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[10px] md:gap-[14px] lg:gap-4"
          >
            {testimonials2.map((item, idx) => {
              const IconCmp =
                item.icon === "sparkles" ? LuSparkles :
                item.icon === "bars"     ? FiBarChart :
                                            LuTrendingUp;

              const lgPos = layoutLg[idx] || "lg:col-span-4"; // safe default

              if (item.type === "stat") {
                return (
                  <div key={idx} className={` ${lgPos}`}>
                    <StatCard value={item.value} label={item.label} tone={item.tone} IconCmp={IconCmp} />
                  </div>
                );
              }
              return (
                <div key={idx} className={` ${lgPos}`}>
                  <QuoteCard quote={item._p} author={item._name} role={item._role} avatar={item._dp} />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
   );
 }

 export default ClientsTestimonials1;
