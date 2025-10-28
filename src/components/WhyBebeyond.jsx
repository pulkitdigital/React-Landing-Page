// src/components/WhyBeBeyondGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import { SiShopify, SiSpeedtest } from "react-icons/si";
import { FaTruckFast, FaStore, FaPalette } from "react-icons/fa6";

const ORANGE = "#FB8500";
const BLUE = "#219EBC";

/* reusable card with motion */
function Card({
  icon,
  title,
  highlight = "",
  subtitle = "",
  gradFrom = BLUE,
  gradTo = ORANGE,
  big = false,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={[
        "relative overflow-hidden rounded-2xl border border-black/5 shadow-md hover:shadow-lg",
        big ? "p-5 sm:p-6 md:p-7" : "p-4 sm:p-5",
        "bg-gradient-to-br backdrop-blur transition-transform duration-300 hover:-translate-y-1",
      ].join(" ")}
      style={{
        background: `linear-gradient(135deg, ${gradFrom}15 0%, #ffffff 50%, ${gradTo}15 100%)`,
      }}
    >
      <div className="rounded-xl bg-white/70 p-4 sm:p-5">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="shrink-0">{icon}</div>
          <div>
            <h3
              className={
                big
                  ? "text-xl sm:text-2xl font-semibold text-[#219ebc]"
                  : "text-xl sm:text-2xl font-semibold text-[#219ebc]"
              }
            >
              {title}{" "}
              {highlight && (
                <span
                  className="font-extrabold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${ORANGE}, ${BLUE})`,
                  }}
                >
                  {highlight}
                </span>
              )}
            </h3>
            {subtitle && (
              <p className="mt-1 text-sm text-[#0B1324]/70">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* corner glows */}
      <div
        className="pointer-events-none absolute -top-10 -left-10 h-28 w-28 rounded-full blur-2xl opacity-40"
        style={{ background: BLUE }}
      />
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full blur-2xl opacity-40"
        style={{ background: ORANGE }}
      />
    </motion.div>
  );
}

export default function WhyBeBeyond() {
  return (
    <div className="bg-[#f5f3ef]"> {/* New wrapper div with background */}
      <section className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16">
        {/* Animated gradient background */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-semibold leading-tight"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${ORANGE}, ${BLUE})`,
            }}
          >
            Why BeBeyond?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-center text-[15px] text-[#0B1324]/70"
        >
          End-to-end expertise for a seamless store experience.
        </motion.p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
          <div className="lg:col-span-3">
            <Card
              big
              icon={<SiShopify size={64} color="#65C653" />}
              title="Registered"
              highlight="Shopify Partner"
              gradFrom="#65C653"
              gradTo="#65C653"
              delay={0.1}
            />
          </div>

          <div className="lg:col-span-3">
            <Card
              big
              icon={<FaTruckFast size={64} color={ORANGE} />}
              title="Setup under"
              highlight="14 Days"
              gradFrom={BLUE}
              gradTo={ORANGE}
              delay={0.2}
            />
          </div>

          <div className="lg:col-span-2">
            <Card
              icon={<FaStore size={52} color={BLUE} />}
              title="End-to-End Store"
              subtitle="Domain to payment"
              gradFrom={BLUE}
              gradTo={ORANGE}
              delay={0.3}
            />
          </div>

          <div className="lg:col-span-2">
            <Card
              icon={<SiSpeedtest size={52} color={BLUE} />}
              title="SEO & Speed"
              subtitle="Optimized"
              gradFrom={ORANGE}
              gradTo={BLUE}
              delay={0.4}
            />
          </div>

          <div className="lg:col-span-2">
            <Card
              icon={<FaPalette size={52} color={ORANGE} />}
              title="Premium"
              subtitle="UI Designs"
              gradFrom={BLUE}
              gradTo={ORANGE}
              delay={0.5}
            />
          </div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[15px] text-[#0B1324]/70">
            All of this and more starting at
          </p>
          <div
            className="mt-2 text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${ORANGE}, ${BLUE})`,
            }}
          >
            Only
          </div>
        </motion.div>
      </section>
    </div>
  );
}
