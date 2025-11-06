// import React from "react";
// import { motion } from "framer-motion";
// import { LuTrendingUp, LuSparkles } from "react-icons/lu";
// import { FiBarChart } from "react-icons/fi"; // fallback bar chart icon
// import { PiQuotesFill } from "react-icons/pi";
// import { FaUserCircle } from "react-icons/fa";
// import { testimonials2 } from "./../Testimonials";

// const CYAN = "#219EBC";
// const CYAN_TINT = "#E6F5FA";
// const ORANGE = "#FB8500";
// const ORANGE_TINT = "#FFF3E5";

// const StatCard = ({ value, label, tone = "cyan", IconCmp }) => {
//   const isCyan = tone === "cyan";
//   const bg = isCyan ? CYAN_TINT : ORANGE_TINT;
//   const stroke = isCyan ? CYAN : ORANGE;

//   return (
//     <div
//       className="rounded-2xl border border-black/10 shadow-sm flex flex-col justify-between h-full p-5 md:p-6"
//       style={{ backgroundColor: bg, borderColor: `${stroke}22` }}
//     >
//       <div>
//         <h4
//           className="bricolage_grotesque_head text-h2 font-h2 leading-none"
//           style={{ color: "#0F172A" }}
//         >
//           {value}
//         </h4>
//         <p
//           className="public_sans_body text-p2 font-p2 mt-1"
//           style={{ color: "#475569" }}
//         >
//           {label}
//         </p>
//       </div>
//       <div className="mt-6 inline-flex items-center">
//         <span
//           className="inline-flex items-center justify-center rounded-2xl"
//           style={{
//             width: 40,
//             height: 40,
//             background: isCyan ? `${CYAN}12` : `${ORANGE}12`,
//             border: `1px solid ${isCyan ? CYAN : ORANGE}33`,
//             color: isCyan ? CYAN : ORANGE,
//           }}
//         >
//           {IconCmp ? <IconCmp size={32} /> : <LuTrendingUp size={32} />}
//         </span>
//       </div>
//     </div>
//   );
// };

// const QuoteCard = ({ quote, author }) => (
//   <div
//     className="rounded-2xl border border-black/10 shadow-sm p-5 md:p-6 bg-white h-full"
//     style={{ borderColor: "#E5E7EB" }}
//   >
//     <span className="inline-flex text-h4" style={{ color: "#94A3B8" }}>
//       <PiQuotesFill />
//     </span>
//     <p
//       className="public_sans_body text-p1 font-p1 mt-2"
//       style={{ color: "#334155" }}
//     >
//       {quote}
//     </p>
//     <div className="mt-5 flex items-center gap-4">
//       <FaUserCircle size={48} className="text-[#94A3B8]" />
//       <div className="min-w-0">
//         <h6 className="text-black font-600 text-p1 font-p1 leading-none">
//           {author}
//         </h6>
//       </div>
//     </div>
//   </div>
// );

// const layoutLg = [
//   "lg:col-span-3 lg:col-start-1",
//   "lg:col-span-3 lg:col-start-4",
//   "lg:col-span-6 lg:col-start-7",
//   "lg:col-span-6 lg:col-start-1",
//   "lg:col-span-6 lg:col-start-7",
//   "lg:col-span-3 lg:col-start-1",
//   "lg:col-span-6 lg:col-start-4",
//   "lg:col-span-3 lg:col-start-10",
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 2.5, type: "spring", stiffness: 100, damping: 20 },
//   },
// };

// function ClientsTestimonials1() {
//   return (
//     <section className="relative mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8 py-0">
//       <div className="clients-testimonials-1-container max-w-1600px w-full flex items-center justify-center relative">
//         <div className="clients-testimonials-1 w-88% flex flex-col items-center py-14 gap-5 relative z-10">
//           <div className="top-div-of-clients-testimonials-1 w-full flex flex-col items-center justify-center gap-5">
//             <motion.div
//               initial={{ opacity: 0, y: "50%" }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="h2-div-for-clients-testimonials-1 text-center"
//             >
//               <span className="span-for-h2-div-for-clients-testimonials-1"></span>
//               <h2 className="mb-2 text-center text-3xl sm:text-4xl font-semibold leading-tight">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
//                   Customer Reviews
//                 </span>
//               </h2>
//             </motion.div>
//           </div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[10px] md:gap-[14px] lg:gap-4"
//           >
//             {testimonials2.map((item, idx) => {
//               const IconCmp =
//                 item.icon === "sparkles"
//                   ? LuSparkles
//                   : item.icon === "bars"
//                   ? FiBarChart
//                   : LuTrendingUp;

//               const lgPos = layoutLg[idx] || "lg:col-span-4";

//               const content =
//                 item.type === "stat" ? (
//                   <StatCard
//                     value={item.value}
//                     label={item.label}
//                     tone={item.tone}
//                     IconCmp={IconCmp}
//                   />
//                 ) : (
//                   <QuoteCard
//                     quote={item._p}
//                     author={item._name}
//                     avatar={item._dp}
//                   />
//                 );

//               return (
//                 <motion.div key={idx} className={lgPos} variants={itemVariants}>
//                   {content}
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ClientsTestimonials1;


// import React from "react";
// import { motion } from "framer-motion";
// import { LuTrendingUp, LuSparkles } from "react-icons/lu";
// import { FiBarChart } from "react-icons/fi";
// import { PiQuotesFill } from "react-icons/pi";
// import { FaUserCircle } from "react-icons/fa";
// import { testimonials2 } from "./../Testimonials";

// const CYAN = "#219EBC";
// const CYAN_TINT = "#E6F5FA";
// const ORANGE = "#FB8500";
// const ORANGE_TINT = "#FFF3E5";

// // ✅ Stat Card
// const StatCard = ({ value, label, tone = "cyan", IconCmp }) => {
//   const isCyan = tone === "cyan";
//   const bg = isCyan ? CYAN_TINT : ORANGE_TINT;
//   const stroke = isCyan ? CYAN : ORANGE;

//   return (
//     <div
//       className="rounded-2xl border border-black/10 shadow-sm flex flex-col justify-between h-full p-5 md:p-6"
//       style={{ backgroundColor: bg, borderColor: `${stroke}22` }}
//     >
//       <div>
//         <h4
//           className="bricolage_grotesque_head text-h2 font-h2 leading-none"
//           style={{ color: "#0F172A" }}
//         >
//           {value}
//         </h4>
//         <p
//           className="public_sans_body text-p2 font-p2 mt-1"
//           style={{ color: "#475569" }}
//         >
//           {label}
//         </p>
//       </div>
//       <div className="mt-6 inline-flex items-center">
//         <span
//           className="inline-flex items-center justify-center rounded-2xl"
//           style={{
//             width: 40,
//             height: 40,
//             background: isCyan ? `${CYAN}12` : `${ORANGE}12`,
//             border: `1px solid ${isCyan ? CYAN : ORANGE}33`,
//             color: isCyan ? CYAN : ORANGE,
//           }}
//         >
//           {IconCmp ? <IconCmp size={32} /> : <LuTrendingUp size={32} />}
//         </span>
//       </div>
//     </div>
//   );
// };

// // ✅ Quote Card (with Google Badge)
// const QuoteCard = ({ quote, author }) => (
//   <div className="rounded-2xl border border-black/10 shadow-sm p-5 md:p-6 bg-white h-full flex flex-col justify-between">
//     {/* Quote Icon */}
//     <div>
//       <span className="inline-flex text-h4" style={{ color: "#94A3B8" }}>
//         <PiQuotesFill />
//       </span>
//       <p
//         className="public_sans_body text-p1 font-p1 mt-2"
//         style={{ color: "#334155" }}
//       >
//         {quote}
//       </p>
//     </div>

//     {/* Author + Badge */}
//     <div className="mt-5 flex items-center justify-between">
//       <div className="flex items-center gap-4">
//         <FaUserCircle size={48} className="text-[#94A3B8]" />
//         <div className="min-w-0">
//           <h6 className="text-black font-600 text-p1 font-p1 leading-none">
//             {author}
//           </h6>
//         </div>
//       </div>

//       {/* Optional Star Rating (small badge) */}
//       <div className="flex items-center text-[#FB8500]">
//         <span className="text-[14px] font-semibold">★★★★★</span>
//         <span className="ml-1 text-[13px] text-[#64748B]">(5.0)</span>
//       </div>
//     </div>
//   </div>
// );

// // Animation Variants
// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1, type: "spring", stiffness: 100, damping: 20 },
//   },
// };

// function ClientsTestimonials1() {
//   return (
//     <section className="relative mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8 py-14">
//       <div className="w-full flex flex-col items-center relative">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: "50%" }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-8"
//         >
//           <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
//               Customer Reviews
//             </span>
//           </h2>
//         </motion.div>

//         {/* Grid (responsive, unchanged layout) */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[10px] md:gap-[14px] lg:gap-4"
//         >
//           {testimonials2.map((item, idx) => {
//             const IconCmp =
//               item.icon === "sparkles"
//                 ? LuSparkles
//                 : item.icon === "bars"
//                 ? FiBarChart
//                 : LuTrendingUp;

//             const lgPos = [
//               "lg:col-span-3 lg:col-start-1",
//               "lg:col-span-3 lg:col-start-4",
//               "lg:col-span-6 lg:col-start-7",
//               "lg:col-span-6 lg:col-start-1",
//               "lg:col-span-6 lg:col-start-7",
//               "lg:col-span-3 lg:col-start-1",
//               "lg:col-span-6 lg:col-start-4",
//               "lg:col-span-3 lg:col-start-10",
//             ][idx] || "lg:col-span-4";

//             const content =
//               item.type === "stat" ? (
//                 <StatCard
//                   value={item.value}
//                   label={item.label}
//                   tone={item.tone}
//                   IconCmp={IconCmp}
//                 />
//               ) : (
//                 <QuoteCard quote={item._p} author={item._name} />
//               );

//             return (
//               <motion.div key={idx} className={lgPos} variants={itemVariants}>
//                 {content}
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default ClientsTestimonials1;






import React from "react";
import { motion } from "framer-motion";
import { PiQuotesFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { testimonials } from "./../Testimonials"; // import below JS file

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Individual Quote Card
const QuoteCard = ({ quote, author }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      y: -8,
      transition: { duration: 0.3 },
      boxShadow: "0 2px 5px rgba(33,158,188,0.25)",
    }}
    className="rounded-2xl border border-black/10 bg-white shadow-sm p-6 flex flex-col justify-between transition-all duration-300"
  >
    <div>
      <span className="inline-flex text-2xl text-[#94A3B8] mb-2">
        <PiQuotesFill />
      </span>
      <p className="text-[#334155] leading-relaxed text-[15px] md:text-base">
        {quote}
      </p>
    </div>

    <div className="mt-5 flex items-center gap-4">
      <FaUserCircle size={48} className="text-[#94A3B8]" />
      <div className="min-w-0">
        <h6 className="text-black font-semibold leading-none">{author}</h6>
        <div className="mt-1 text-[#FB8500] text-sm">★★★★★</div>
      </div>
    </div>
  </motion.div>
);

export default function ClientsTestimonials1() {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
            Customer Reviews
          </span>
        </h2>
        <p className="text-[#4B5563] text-sm sm:text-base mt-3">
          Real experiences from real clients — trust built through results.
        </p>
      </motion.div>

      {/* 6-grid layout with animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4"
      >
        {testimonials.slice(0, 6).map((t, idx) => (
          <QuoteCard key={idx} quote={t._p} author={t._name} />
        ))}
      </motion.div>
    </section>
  );
}
