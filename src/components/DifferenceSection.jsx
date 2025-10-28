// import React from "react";
// import {
//     FaCheckCircle,
//     FaThumbsDown,
//     FaMinusCircle,
// } from "react-icons/fa";

// const ORANGE = "#FB8500";
// const BLUE = "#219EBC";
// const GOOD = "#22C55E"; // green
// const NEUTRAL = "#F59E0B"; // amber
// const MUTED = "#9CA3AF"; // gray

// export default function DifferenceSection({
//     studioName = "BeBeyond Digital Solutions",
// }) {
//     const ROWS = [
//         {
//             feature: "End-to-End",
//             freelancer: { icon: "down" },
//             agency: { icon: "neutral", note: "Limited scope" },
//             studio: { icon: "check" },
//         },
//         {
//             feature: "Timeline",
//             freelancer: { icon: "down", note: "Unreliable timelines" },
//             agency: { icon: "neutral", note: "2–4 weeks delay" },
//             studio: { icon: "check", note: "Guaranteed\n14 day Delivery" },
//         },
//         {
//             feature: "Design",
//             freelancer: { icon: "down", note: "Patchwork design" },
//             agency: { icon: "neutral", note: "Template-heavy" },
//             studio: { icon: "check", note: "Premium,\ncohesive branding" },
//         },
//         {
//             feature: "Costs",
//             freelancer: { icon: "down", note: "Hidden costs" },
//             agency: { icon: "neutral", note: "Retainer + add-ons" },
//             studio: { icon: "check", note: "Transparent pricing" },
//         },
//         {
//             feature: "SEO Optimization",
//             freelancer: { icon: "down" },
//             agency: { icon: "neutral" },
//             studio: { icon: "check" },
//         },
//     ];

//     const Icon = ({ type }) => {
//         if (type === "check") return <FaCheckCircle size={18} color={GOOD} />;
//         if (type === "neutral") return <FaMinusCircle size={18} color={NEUTRAL} />;
//         return <FaThumbsDown size={18} color={MUTED} />; // "down"
//     };

//     return (
//         <section className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-14">
//             {/* Heading */}
//             <div className="text-center mb-6">
//                 <h2 className="mb-0 text-center text-3xl sm:text-4xl font-semibold leading-tight">
//                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
//                         How we’re Different?
//                     </span>
//                 </h2>
//                 <p className="mt-3 text-center text-[15px] text-[#111827]/70">
//                     Let’s find out
//                 </p>
//             </div>

//             {/* Card wrapper with subtle gradient edge */}
//             <div
//                 className="rounded-2xl p-[1px] shadow-sm"
//                 style={{
//                     background: `linear-gradient(135deg, ${ORANGE}33, #ffffff, ${BLUE}33)`,
//                 }}
//             >
//                 <div className="rounded-2xl bg-white">
//                     {/* Table header */}
//                     <div className="grid grid-cols-4 text-[15px] font-semibold">
//                         <div className="px-5 py-4 border-b border-black/10 text-[#219ebc]">
//                             Features/Offerings
//                         </div>
//                         <div className="px-5 py-4 border-b border-black/10 text-[#219ebc]">Freelancers</div>
//                         <div className="px-5 py-4 border-b border-black/10 text-[#219ebc]">Other Agencies</div>
//                         <div className="px-5 py-4 border-b border-black/10">
//                             <span
//                                 className="bg-clip-text text-transparent"
//                                 style={{
//                                     backgroundImage: `linear-gradient(90deg, ${ORANGE}, ${BLUE})`,
//                                 }}
//                             >
//                                 {studioName}
//                             </span>
//                         </div>
//                     </div>

//                     {/* Rows (desktop) */}
//                     <ul className="hidden md:block">
//                         {ROWS.map((r) => (
//                             <li
//                                 key={r.feature}
//                                 className="grid grid-cols-4 items-center border-b border-black/5"
//                             >
//                                 {/* Feature */}
//                                 <div className="px-5 py-4 text-[#0B1324]/90">{r.feature}</div>

//                                 {/* Freelancers */}
//                                 <div className="px-5 py-4">
//                                     <div className="flex items-center gap-3 text-[#0B1324]/75 text-sm">
//                                         <Icon type={r.freelancer.icon} />
//                                         {r.freelancer.note && <span>{r.freelancer.note}</span>}
//                                     </div>
//                                 </div>

//                                 {/* Other Agencies */}
//                                 <div className="px-5 py-4">
//                                     <div className="flex items-center gap-3 text-[#0B1324]/75 text-sm">
//                                         <Icon type={r.agency.icon} />
//                                         {r.agency.note && <span>{r.agency.note}</span>}
//                                     </div>
//                                 </div>

//                                 {/* Studio */}
//                                 <div className="px-5 py-4">
//                                     <div className="flex items-start gap-3">
//                                         <Icon type={r.studio.icon} />
//                                         {r.studio.note ? (
//                                             <p
//                                                 className="text-sm leading-snug"
//                                                 style={{ color: GOOD, whiteSpace: "pre-line" }}
//                                             >
//                                                 {r.studio.note}
//                                             </p>
//                                         ) : (
//                                             <span className="sr-only">Available</span>
//                                         )}
//                                     </div>
//                                 </div>
//                             </li>
//                         ))}

//                         {/* Pricing row */}
//                         <li className="grid grid-cols-4 items-center">
//                             <div className="px-5 py-4 text-[#0B1324]/70 text-black font-bold">Pricing</div>
//                             <div className="px-5 py-4 text-[#0B1324] font-semibold">₹89,999</div>
//                             <div className="px-5 py-4 text-[#0B1324] font-semibold">₹1.2L+</div>
//                             <div className="px-5 py-4 font-semibold">
//                                 <span
//                                     className="bg-clip-text text-transparent"
//                                     style={{
//                                         backgroundImage: `linear-gradient(90deg, ${ORANGE}, ${BLUE})`,
//                                     }}
//                                 >
//                                     Starting
//                                 </span>
//                             </div>
//                         </li>
//                     </ul>

//                     {/* Mobile layout (stacked) */}
//                     <ul className="md:hidden divide-y divide-black/5">
//                         {ROWS.map((r) => (
//                             <li key={r.feature} className="px-5 py-4">
//                                 <div className="font-semibold text-[#0B1324]">{r.feature}</div>

//                                 <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
//                                     <div>
//                                         <div className="font-semibold text-[#0B1324]">Freelancers</div>
//                                         <div className="mt-1 flex items-center gap-2 text-[#0B1324]/75">
//                                             <Icon type={r.freelancer.icon} />
//                                             <span className="text-xs">{r.freelancer.note || "—"}</span>
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <div className="font-semibold text-[#0B1324]">Other</div>
//                                         <div className="mt-1 flex items-center gap-2 text-[#0B1324]/75">
//                                             <Icon type={r.agency.icon} />
//                                             <span className="text-xs">{r.agency.note || "—"}</span>
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <div className="font-semibold">
//                                             <span
//                                                 className="bg-clip-text text-transparent"
//                                                 style={{
//                                                     backgroundImage: `linear-gradient(90deg, ${ORANGE}, ${BLUE})`,
//                                                 }}
//                                             >
//                                                 {studioName}
//                                             </span>
//                                         </div>
//                                         <div className="mt-1 flex items-start gap-2">
//                                             <Icon type={r.studio.icon} />
//                                             <span
//                                                 className="text-xs"
//                                                 style={{ color: GOOD, whiteSpace: "pre-line" }}
//                                             >
//                                                 {r.studio.note || "—"}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>
//                         ))}

//                         {/* Pricing (mobile) */}
//                         <li className="px-5 py-4">
//                             <div className="font-semibold text-[#0B1324] mb-2">Pricing</div>
//                             <div className="grid grid-cols-3 gap-3 text-sm">
//                                 <div className="font-semibold text-[#0B1324]">₹89,999</div>
//                                 <div className="font-semibold text-[#0B1324]">₹1.2L+</div>
//                                 <div className="font-semibold">
//                                     <span
//                                         className="bg-clip-text text-transparent"
//                                         style={{
//                                             backgroundImage: `linear-gradient(90deg, ${ORANGE}, ${BLUE})`,
//                                         }}
//                                     >
//                                         Starting
//                                     </span>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     );
// }













"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    PiMaskSadFill,     // left list icon (sad/mask)
    PiCheckBold,       // check glyph
} from "react-icons/pi";
// import "./style.css";

// theme
const PRIMARY = "#219EBC";
const ACCENT = "#FB8500";
const BG = "#f5f3ef";

// tiny gradient ring utility
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
            {/* dark badge with gradient ring */}
            <span
                className="inline-flex items-center justify-center rounded-full"
                style={{
                    width: 28,
                    height: 28,
                    background:
                        "radial-gradient(circle at 50% 50%, #0B0B0C 0%, #16181B 100%)",
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
                {/* BG maps remain if you use them elsewhere; omitted here for a cleaner, tight layout */}

                <div className="clients-testimonials-1 w-88% flex flex-col items-center py-14 gap-5 relative z-10">
                    {/* TOP (unchanged) */}
                    <div className="top-div-of-clients-testimonials-1 w-full flex flex-col items-center justify-center gap-1">
                        <motion.div
                            initial={{ opacity: 0, y: "50%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="h2-div-for-clients-testimonials-1 text-center mb-4"
                        >
                            <span className="span-for-h2-div-for-clients-testimonials-1"></span>
                            <h2 className="mb-0 text-center text-3xl sm:text-4xl font-semibold leading-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
                                    How we re Different?
                                </span>
                            </h2>
                        </motion.div>
                        {/* <motion.h3
                            initial={{ y: "50%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-black text-[24px] text-center leading-h2 1004px:text-h3 792px:text-h4 leading-4"
                        >
                            What Sets BeBeyond Apart
                        </motion.h3> */}
                        <motion.h3
                            initial={{ y: "50%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="mt-0 text-center text-[15px] text-[#111827]/70"
                            style={{ fontWeight: 400, }}
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

                        {/* connector dots (subtle) */}
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
                            <div className="px-6 py-4 bg-[#EFEFEF] border-b border-[#D4D4D8]">
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

                        {/* RIGHT: Skyloom Studios (rounded gradient stroke) */}
                        <div
                            className="bg-white rounded-[18px] overflow-hidden"
                            style={{
                                border: "2px solid transparent",
                                backgroundImage: `linear-gradient(white, white), linear-gradient(180deg, #219ebc, #fb8500)`,
                                backgroundOrigin: "border-box",
                                backgroundClip: "content-box, border-box",
                            }}
                        >
                            <div className="px-6 py-4 bg-white border-b border-[#ECECEC]">
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
                        className=" relative z-0 flex items-center justify-center 
                                px-8 py-2.5 text-white text-[16px] font-semibold 
                                public-sans bg-[#219EBC] overflow-hidden 
                                before:absolute before:inset-0 before:-z-10 
                                before:translate-x-[150%] before:translate-y-[150%] 
                                before:scale-[2.5] before:rounded-[100%] 
                                before:bg-[#FB8500] before:transition-transform 
                                before:duration-700 hover:before:translate-x-0 
                                hover:before:translate-y-0 
                                active:scale-90 active:transition-all active:duration-300 
                                400px:px-4 400px:py-2"
                    >
                        Get in Touch
                    </motion.button>
                </div>
            </div>
        </main>
    );
}

