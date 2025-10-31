// src/components/PremiumFeatures.jsx
import React from "react";
import { motion } from "framer-motion";

const ORANGE = "#FB8500";
const BLUE = "#219EBC";
const GRID_BG = "#F5F3EF";
const BASE = import.meta.env.BASE_URL || "/";

function FeatureCard({ title, desc, img, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay }}
      className="relative rounded-2xl shadow-sm overflow-hidden bg-white/80 backdrop-blur"
      style={{
        background: `linear-gradient(120deg, ${BLUE}33, #ffffff, ${ORANGE}33)`,
      }}
    >
      <div className="rounded-2xl bg-white/75 p-5 sm:p-6">
        <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0B1324]">
          {title}
        </h3>
        <p className="mt-2 text-[13px] sm:text-[14px] leading-relaxed text-[#0B1324]/70">
          {desc}
        </p>
        <div className="mt-4 rounded-2xl overflow-hidden">
          <div className="relative w-full pt-[56%] rounded-2xl">
            <img
              src={`${BASE}${img}`}
              alt={title}
              className="absolute inset-0 h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PremiumFeatures() {
  const cards = [
    {
      title: "Mobile-first Experience",
      desc:
        "Convert mobile shoppers with fast, responsive, mobile-optimized storefronts.",
      img: "store_features/mobile.webp",
    },
    {
      title: "Product Swatches",
      desc:
        "Show variants like color, size, and style as swatches for clearer choices.",
      img: "store_features/product.webp",
    },
    {
      title: "Advanced Product Filter",
      desc:
        "Help customers find products quickly with powerful, easy filters.",
      img: "store_features/filter.webp",
    },
    {
      title: "High-Converting Cart Pages",
      desc:
        "Boost AOV with countdowns, trust badges, shipping calculators & more.",
      img: "store_features/cartpage.webp",
    },
  ];

  return (
    <section className="w-full" style={{ backgroundColor: GRID_BG }}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="mb-0 text-center text-3xl sm:text-4xl font-semibold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
              Premium Store Features
            </span>
          </h2>
          <p className="mt-3 text-center text-[15px] text-[#111827]/70">
            Features that transform your store into a top-tier experience.
          </p>
        </div>

        {/* 🌈 Wrapper keeps border radius consistent */}
        <div className="rounded-2xl p-3 sm:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            <div className="flex flex-col gap-4 lg:gap-5">
              <FeatureCard {...cards[0]} delay={0.1} />
              <FeatureCard {...cards[2]} delay={0.25} />
            </div>
            <div className="flex flex-col gap-4 lg:gap-5 md:mt-10 lg:mt-12">
              <FeatureCard {...cards[1]} delay={0.18} />
              <div className="md:-mt-1 lg:-mt-2">
                <FeatureCard {...cards[3]} delay={0.32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
