import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    q: "How do you ensure my website/store aligns with my brand?",
    a: "We begin with a brand discovery session, analyze your guidelines, and proceed only after mockup approval. Each step is communicated clearly to ensure perfect brand alignment.",
  },
  {
    q: "How will we track progress and measure success?",
    a: "We provide progress reports at project milestones and set clear KPIs for post-launch measurement, such as load speed, conversions, and bounce rates.",
  },
  {
    q: "Do you offer ongoing support after the website/store is launched?",
    a: "Yes—ongoing support packages are available so your store/website runs smoothly, including troubleshooting, content updates, and new features.",
  },
];

function PlusMinusIcon({ open }) {
  return (
    <motion.span
      className="inline-block mr-2"
      aria-hidden
      animate={{ rotate: open ? 90 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {open ? (
        <span className="text-lg text-gray-400 font-bold">–</span>
      ) : (
        <span className="text-lg text-gray-400 font-bold">+</span>
      )}
    </motion.span>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <motion.section
      className="flex flex-col items-center py-10 sm:py-16 w-full bg-[#F5F3EF] px-2 sm:px-0 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <h2 className="mb-7 sm:mb-8 text-center text-2xl sm:text-4xl font-semibold leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
          Frequently Asked Questions
        </span>
      </h2>

      {/* FAQ Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-[850px] sm:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1100px] bg-white/80 rounded-2xl shadow-lg mt-1 sm:mt-2 p-1.5 sm:p-2"
      >
        {questions.map((item, idx) => {
          const open = openIdx === idx;
          return (
            <motion.div
              key={idx}
              className="border-b last:border-none"
              whileHover={{
                y: -2,
                boxShadow: "0 4px 24px rgba(80,96,120,0.09)",
              }}
            >
              {/* Question */}
              <button
                className="flex items-center w-full px-3 sm:px-5 py-3 sm:py-4 text-left text-gray-700 text-base sm:text-lg focus:outline-none"
                onClick={() => setOpenIdx(open ? null : idx)}
              >
                <PlusMinusIcon open={open} />
                <span className="font-medium">{item.q}</span>
              </button>

              {/* Answer Animation */}
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      type: "spring",
                      bounce: 0,
                    }}
                    className="px-4 sm:px-6 pb-3 sm:pb-4 text-[15px] sm:text-base text-gray-600 overflow-hidden rounded-2xl bg-white/90 shadow-sm"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
