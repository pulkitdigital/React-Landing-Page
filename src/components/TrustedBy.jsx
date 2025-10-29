// // src/components/TrustedBy.jsx
// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";

// const BASE = `${import.meta.env.BASE_URL}18%20Logos/`;

// const LOGOS = [
//   { name: "DataGOL", file: "DataGOL-Original.png", url: "https://example.com/datagol" },
//   { name: "FPP", file: "FPP - Original.png", url: "https://example.com/fpp" },
//   { name: "Indigenius matter", file: "Indigenius matter - Original.png", url: "https://example.com/indigenius" },
//   { name: "JW", file: "JW - Original.png", url: "https://example.com/jw" },
//   { name: "Kaypeedies", file: "Kaypeedies - Original.png", url: "https://example.com/kaypeedies" },
//   { name: "Kazaru", file: "Kazaru - Original.png", url: "https://example.com/kazaru" },
//   { name: "NAB", file: "NAB - Original.png", url: "https://example.com/nab" },
//   { name: "NAC", file: "NAC - Original.png", url: "https://example.com/nac" },
//   { name: "Sappy", file: "Sappy - Original.png", url: "https://example.com/sappy" },
//   { name: "Scanner Adda", file: "Scanner Adda - Original.png", url: "https://example.com/scanner-adda" },
//   { name: "Sreejit", file: "Sreejit - Original.png", url: "https://example.com/sreejit" },
//   { name: "SSCO", file: "SSCO - Original.png", url: "https://example.com/ssco" },
//   { name: "TBC", file: "TBC - Original.png", url: "https://example.com/tbc" },
//   { name: "The Celeste Chic & Co", file: "The Celeste Chic & Co - Original.png", url: "https://example.com/celeste" },
//   { name: "TtapioCafe", file: "TTapioCafe-Original.png", url: "https://example.com/ttapio" },
//   { name: "TWL", file: "TWL - Original.png", url: "https://example.com/twl" },
//   { name: "USLO", file: "USLO - Original.png", url: "https://example.com/uslo" },
//   { name: "Venus", file: "Venus - Original.png", url: "https://example.com/venus" },
//   { name: "Zebra Learn", file: "Zebra Learn - Original.png", url: "https://example.com/zebra-learn" },
// ];

// export default function TrustedBy() {
//   const controls = useAnimation();

//   const loopConfig = {
//     x: ["0%", "-50%"],              // because we render 2 copies
//     transition: { duration: 20, ease: "linear", repeat: Infinity },
//   };

//   useEffect(() => {
//     controls.start(loopConfig);
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <section className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-14 overflow-hidden">
//       {/* Heading */}
//       <h2 className="mb-10 text-center text-3xl sm:text-4xl font-semibold leading-tight">
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
//           Trusted by Top Brands
//         </span>
//       </h2>

//       {/* Infinite carousel (pause on hover) */}
//       <motion.div
//         className="flex gap-6"        /* slightly tighter spacing */
//         animate={controls}
//         onMouseEnter={() => controls.stop()}
//         onMouseLeave={() => controls.start(loopConfig)}  // resumes
//       >
//         {/* First set */}
//         <div className="flex gap-6 items-center">
//           {LOGOS.map((l) => (
//             <LogoItem key={l.name} logo={l} />
//           ))}
//         </div>
//         {/* Clone for seamless loop */}
//         <div className="flex gap-6 items-center">
//           {LOGOS.map((l) => (
//             <LogoItem key={`${l.name}-clone`} logo={l} />
//           ))}
//         </div>
//       </motion.div>

//       {/* Edge fades & separators (optional) */}
//       <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent" />
//       <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent" />
//       <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
//       <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
//     </section>
//   );
// }

// function LogoItem({ logo }) {
//   const src = `${BASE}${encodeURIComponent(logo.file)}`;
//   return (
//     <motion.a
//       href={logo.url || "#"}
//       target="_blank"
//       rel="noopener noreferrer"
//       title={logo.name}
//       className="flex items-center justify-center"
//       aria-label={`${logo.name} website`}
//       whileHover={{ scale: 1.06 }}
//       transition={{ type: "spring", stiffness: 400, damping: 18 }}
//     >
//       {/* increased size */}
//       <div className="h-20 md:h-24 w-40 md:w-48 flex items-center justify-center">
//         <img
//           src={src}
//           alt={logo.name}
//           className="max-h-full w-auto object-contain"
//           loading="lazy"
//         />
//       </div>
//     </motion.a>
//   );
// }

// src/components/TrustedBy.jsx
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./../App.css"; // CSS below

const BASE = `${import.meta.env.BASE_URL}18%20Logos/`;

const LOGOS = [
  { name: "DataGOL", file: "DataGOL-Original.png", url: "https://example.com/datagol" },
  { name: "FPP", file: "FPP - Original.png", url: "https://example.com/fpp" },
  { name: "Indigenius matter", file: "Indigenius matter - Original.png", url: "https://example.com/indigenius" },
  { name: "JW", file: "JW - Original.png", url: "https://example.com/jw" },
  { name: "Kaypeedies", file: "Kaypeedies - Original.png", url: "https://example.com/kaypeedies" },
  { name: "Kazaru", file: "Kazaru - Original.png", url: "https://example.com/kazaru" },
  { name: "NAB", file: "NAB - Original.png", url: "https://example.com/nab" },
  { name: "NAC", file: "NAC - Original.png", url: "https://example.com/nac" },
  { name: "Sappy", file: "Sappy - Original.png", url: "https://example.com/sappy" },
  { name: "Scanner Adda", file: "Scanner Adda - Original.png", url: "https://example.com/scanner-adda" },
  { name: "Sreejit", file: "Sreejit - Original.png", url: "https://example.com/sreejit" },
  { name: "SSCO", file: "SSCO - Original.png", url: "https://example.com/ssco" },
  { name: "TBC", file: "TBC - Original.png", url: "https://example.com/tbc" },
  { name: "The Celeste Chic & Co", file: "The Celeste Chic & Co - Original.png", url: "https://example.com/celeste" },
  { name: "TtapioCafe", file: "TTapioCafe-Original.png", url: "https://example.com/ttapio" },
  { name: "TWL", file: "TWL - Original.png", url: "https://example.com/twl" },
  { name: "USLO", file: "USLO - Original.png", url: "https://example.com/uslo" },
  { name: "Venus", file: "Venus - Original.png", url: "https://example.com/venus" },
  { name: "Zebra Learn", file: "Zebra Learn - Original.png", url: "https://example.com/zebra-learn" },
];

export default function TrustedBy() {
  const swiperRef = useRef(null);

  // Responsive state copied from the reference logic
  const [spaceBetween, setSpaceBetween] = useState(100);
  const [slidesPerView, setSlidesPerView] = useState(5);

  function handleSpaceBetween() {
    const w = window.innerWidth;
    if (w < 467) {
      setSlidesPerView(3);
      setSpaceBetween(50);
    } else if (w < 540) {
      setSlidesPerView(4);
      setSpaceBetween(50);
    } else if (w < 664) {
      setSlidesPerView(4);
      setSpaceBetween(75);
    } else if (w < 793) {
      setSlidesPerView(5);
      setSpaceBetween(50);
    } else if (w < 1005) {
      setSlidesPerView(5);
      setSpaceBetween(75);
    } else {
      setSlidesPerView(5);
      setSpaceBetween(100);
    }
  }

  useEffect(() => {
    handleSpaceBetween();
    window.addEventListener("resize", handleSpaceBetween);
    return () => window.removeEventListener("resize", handleSpaceBetween);
  }, []);

  const onMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };
  const onMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-14 overflow-hidden">
      {/* Heading */}
      <h2 className="mb-10 text-center text-3xl sm:text-4xl font-semibold leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
          Trusted by Top Brands
        </span>
      </h2>

      <div
        className="why-choose-1-brand-swiper bg-white w-full relative items-center justify-center"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="div-for-bg-white-of-why-choose-1-brand-swiper absolute w-screen h-full bg-white top-0" />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSwiper={(sw) => (swiperRef.current = sw)}
          className="!py-1"
        >
          {LOGOS.map((logo) => (
            <SwiperSlide key={logo.name}>
              <a
                className="block w-full"
                href={logo.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                title={logo.name}
                aria-label={`${logo.name} website`}
              >
                <div className="h-20 md:h-24 w-40 md:w-48 mx-auto flex items-center justify-center">
                  <img
                    src={`${BASE}${encodeURIComponent(logo.file)}`}
                    alt={logo.name}
                    loading="lazy"
                    className="max-h-full w-auto object-contain hover:scale-90 transition-transform duration-200 ease-in-out"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Edge fades & separators (kept from your original) */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}




