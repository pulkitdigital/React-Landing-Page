import React from "react";
import { motion } from "framer-motion";
import { LuTrendingUp, LuSparkles } from "react-icons/lu";
import { FiBarChart } from "react-icons/fi"; // fallback bar chart icon
import { PiQuotesFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { testimonials2 } from "./../Testimonials";

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
      className="rounded-2xl border border-black/10 shadow-sm flex flex-col justify-between h-full p-5 md:p-6"
      style={{ backgroundColor: bg, borderColor: `${stroke}22` }}
    >
      <div>
        <h4
          className="bricolage_grotesque_head text-h2 font-h2 leading-none"
          style={{ color: "#0F172A" }}
        >
          {value}
        </h4>
        <p
          className="public_sans_body text-p2 font-p2 mt-1"
          style={{ color: "#475569" }}
        >
          {label}
        </p>
      </div>
      <div className="mt-6 inline-flex items-center">
        <span
          className="inline-flex items-center justify-center rounded-2xl"
          style={{
            width: 40,
            height: 40,
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
  <div
    className="rounded-2xl border border-black/10 shadow-sm p-5 md:p-6 bg-white h-full"
    style={{ borderColor: "#E5E7EB" }}
  >
    <span className="inline-flex text-h4" style={{ color: "#94A3B8" }}>
      <PiQuotesFill />
    </span>
    <p
      className="public_sans_body text-p1 font-p1 mt-2"
      style={{ color: "#334155" }}
    >
      {quote}
    </p>
    <div className="mt-5 flex items-center gap-4">
      <FaUserCircle size={48} className="text-[#94A3B8]" />
      <div className="min-w-0">
        <h6 className="text-black font-600 text-p1 font-p1 leading-none">
          {author}
        </h6>
        {role ? (
          <p
            className="public_sans_body text-p3 font-p3 mt-1 truncate"
            style={{ color: "#64748B" }}
          >
            {role}
          </p>
        ) : null}
      </div>
    </div>
  </div>
);

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2.5, type: "spring", stiffness: 100, damping: 20 },
  },
};

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
                  Customer Reviews
                </span>
              </h2>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[10px] md:gap-[14px] lg:gap-4"
          >
            {testimonials2.map((item, idx) => {
              const IconCmp =
                item.icon === "sparkles"
                  ? LuSparkles
                  : item.icon === "bars"
                  ? FiBarChart
                  : LuTrendingUp;

              const lgPos = layoutLg[idx] || "lg:col-span-4";

              const content =
                item.type === "stat" ? (
                  <StatCard
                    value={item.value}
                    label={item.label}
                    tone={item.tone}
                    IconCmp={IconCmp}
                  />
                ) : (
                  <QuoteCard
                    quote={item._p}
                    author={item._name}
                    role={item._role}
                    avatar={item._dp}
                  />
                );

              return (
                <motion.div key={idx} className={lgPos} variants={itemVariants}>
                  {content}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ClientsTestimonials1;
