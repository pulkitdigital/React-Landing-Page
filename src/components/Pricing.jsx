import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

const ORANGE = "#FB8500";
const BLUE = "#219EBC";

const PLANS = [
  {
    name: "Basic",
    price: "₹29,999",
    cta: "Get in touch",
    highlight: false,
    features: [
      { label: "Store Setup", ok: true },
      { label: "Premium Shop Experience", ok: true },
      { label: "Domain Setup", ok: true },
      { label: "Payment Gateway Set Up", ok: true },
      { label: "List up to 100 Products", ok: true },
      { label: "Support for 1 Month", ok: true },
      { label: "Live Chat", ok: false },
      { label: "SEO", ok: false },
      { label: "Advanced apps", ok: false },
      { label: "Advanced analytics", ok: false },
    ],
  },
  {
    name: "Pro (BeBeyond)",
    price: "₹49,999",
    cta: "Get in touch",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Store Setup", ok: true },
      { label: "Premium Shop Experience", ok: true },
      { label: "Domain Setup", ok: true },
      { label: "Payment Gateway Set Up", ok: true },
      { label: "List up to 250 Products", ok: true },
      { label: "Support for 3 Months", ok: true },
      { label: "Live Chat", ok: true },
      { label: "SEO", ok: true },
      { label: "Advanced apps", ok: false },
      { label: "Advanced analytics", ok: false },
    ],
  },
  {
    name: "Business",
    price: "₹74,999",
    cta: "Get in touch",
    highlight: false,
    features: [
      { label: "Store Setup", ok: true },
      { label: "Premium Shop Experience", ok: true },
      { label: "Domain Setup", ok: true },
      { label: "Payment Gateway Set Up", ok: true },
      { label: "List up to 500 Products", ok: true },
      { label: "Support for 6 Months", ok: true },
      { label: "Live Chat", ok: true },
      { label: "SEO", ok: true },
      { label: "Advanced apps", ok: true },
      { label: "Advanced analytics", ok: true },
    ],
  },
];

// motion variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, ease: "easeOut" },
  },
};

const card = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Pricing() {
  // 👇 scroll handler
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#F5F3EF] overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
            Pricing
          </span>
        </h2>
        <p className="mt-3 text-[15px] text-[#111827]/70">
          Invest in a store built right — designed to drive lasting results.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {PLANS.map((plan) => (
          <motion.div
            key={plan.name}
            variants={card}
            whileHover={{
              y: -8,
              boxShadow: plan.highlight
                ? "0px 8px 30px rgba(251,133,0,0.3)"
                : "0px 6px 20px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 },
            }}
            className={`relative rounded-2xl border border-black/10 shadow-sm overflow-hidden transform transition-all duration-300 ${
              plan.highlight ? "p-[1px]" : ""
            }`}
            style={
              plan.highlight
                ? {
                    background: `linear-gradient(135deg, ${ORANGE}, ${BLUE})`,
                    boxShadow:
                      "0px 0px 18px rgba(251,133,0,0.4), 0px 0px 30px rgba(33,158,188,0.3)",
                  }
                : undefined
            }
          >
            {/* Badge */}
            {plan.highlight && plan.badge && (
              <div className="absolute right-3 top-3 z-10">
                <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-[#0B1324] shadow-sm">
                  {plan.badge}
                </span>
              </div>
            )}

            {/* Inner card */}
            <div
              className={`h-full rounded-2xl ${
                plan.highlight
                  ? "bg-gradient-to-br from-white/90 to-white/70"
                  : "bg-white"
              } p-5 sm:p-6 transition-all`}
            >
              <div className="text-sm text-[#0B1324]/70">{plan.name}</div>

              <div className="mt-1 text-3xl font-extrabold text-[#0B1324]">
                {plan.price}
              </div>

              {/* 👇 Button triggers scroll */}
              <button
                onClick={scrollToContact}
                className={`mt-4 w-full rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-[#0B1324] hover:bg-[#f1f1f1]"
                    : "bg-black text-white hover:bg-[#111827]"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="mt-5 space-y-3">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] text-[#0B1324]"
                  >
                    {f.ok ? (
                      <FaCheck className="mt-[2px] text-green-600" size={14} />
                    ) : (
                      <FaTimes
                        className="mt-[2px] opacity-60 text-gray-400"
                        size={14}
                      />
                    )}
                    <span className={f.ok ? "" : "opacity-70"}>{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
