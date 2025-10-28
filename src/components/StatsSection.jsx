import React, { useEffect, useRef, useState } from "react";

/* ============ Utilities ============ */

// Observe when the section enters the viewport
function useInView(options = { threshold: 0.2, root: null, rootMargin: "0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Trigger once — unobserve after first intersection
        obs.unobserve(entry.target);
      }
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// Compact formatter (e.g. 2000000 -> 2M)
const compactFmt = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 0,
});

/* ============ Counter ============ */

function Counter({ to = 0, duration = 2000, prefix = "", suffix = "" }) {
  const [val, setVal] = useState(0);
  const startTs = useRef(null);

  useEffect(() => {
    let raf;
    const step = (ts) => {
      if (!startTs.current) startTs.current = ts;
      const progress = Math.min((ts - startTs.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setVal(Math.floor(eased * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return (
    <span>
      {prefix}
      {compactFmt.format(val)}
      {suffix}
    </span>
  );
}

/* ============ Section ============ */

export default function StatsSection() {
  const [ref, inView] = useInView();

  // Configure your stats here
  const STATS = [
    {
      id: "revenue",
      to: 2_000_000, // 2M
      prefix: "₹",
      suffix: "+",
      color: "text-[#219EBC]", // brand blue
      caption: "revenue generated in stores",
    },
    {
      id: "customers",
      to: 47, // 47
      prefix: "",
      suffix: " +",
      color: "text-[#93C01F]", // fresh green (nice contrast)
      caption: "happy customers",
    },
    {
      id: "buyers",
      to: 17_000, // 17K
      prefix: "",
      suffix: " +",
      color: "text-[#8B5CF6]", // violet
      caption: "buyers online",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Heading */}
      <h2 className="mb-0 text-center text-3xl sm:text-4xl font-semibold leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
          Designed and Developed
        </span>
      </h2>
      <p className="mt-3 text-center text-[15px] text-[#111827]/70">
        by Industry defining experts
      </p>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.id} className="flex flex-col items-center gap-2">
            <div className={`font-extrabold tracking-tight ${s.color} text-5xl sm:text-6xl`}>
              {inView ? (
                <Counter to={s.to} duration={4000} prefix={s.prefix} suffix={s.suffix} />
              ) : (
                <span>
                  {s.prefix}
                  {compactFmt.format(0)}
                  {s.suffix}
                </span>
              )}
            </div>
            <div className="text-sm text-[#111827]/80">{s.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
