import React from "react";
// import heroImg from "./hero-page.webp";
import { FaBullhorn, FaPaintBrush, FaCode, FaChartLine } from "react-icons/fa"; // icons from react-icons

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#219EBC]/15 via-white to-[#FB8500]/15" />

            <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* Left Section - Content */}
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#0B1324] public-sans">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#219EBC] to-[#FB8500]">
                                Build Beyond Ordinary
                            </span>{" "}
                            with Be Beyond Digital Solutions
                        </h1>

                        <p className="mt-4 text-lg text-[#4B5563] public-sans">
                            Transform your brand with high-converting websites, performance
                            marketing, and powerful creative campaigns — all in one place.
                        </p>

                        {/* Small badges */}
                        {/* <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#374151]">
                            <span className="inline-flex items-center gap-2 text-[15px]">
                                <span className="h-2 w-2 bg-[#219EBC]" />
                                Website & Branding
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <span className="h-2 w-2 bg-[#FB8500]" />
                                Performance Marketing
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <span className="h-2 w-2 bg-[#219EBC]" />
                                Creative Production
                            </span>
                        </div> */}
                    </div>

                    {/* Right Section - Visual */}
                    <div className="relative">
      {/* ===== Rings (behind) ===== */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        {/* Outer stretched ring */}
        <div className="absolute rounded-[50%] border border-[#FB8500]/10 w-[540px] h-[360px]" />
        {/* Inner stretched ring */}
        <div className="absolute rounded-[50%] border border-[#FB8500]/20 w-[640px] h-[420px]" />
      </div>

      {/* ===== ORBITING ICONS on rings ===== */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
        {/* --- Ellipse A (matches 540x360) --- */}
        <div
          className="orbit-ellipse"
          style={{
            width: 360,  // use HEIGHT as base (circle)
            height: 360,
            // scaleX = width/height = 540/360 = 1.5
            transform: "translate(-50%, -50%) scaleX(1.5)",
          }}
        >
          {/* icon #1 */}
          <div className="rotator rot-a">
            <div className="dot dot-a">
              <div className="icon-pill text-[#FB8500] bg-white/85 z-99">
                <FaBullhorn size={18} />
              </div>
            </div>
          </div>
          {/* icon #2 (180° offset) */}
          <div className="rotator rot-a" style={{ animationDelay: "-6s" }}>
            <div className="dot dot-a" style={{ animationDelay: "-6s" }}>
              <div className="icon-pill text-[#219EBC] bg-white/85 z-99">
                <FaChartLine size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* --- Ellipse B (matches 640x420) --- */}
        <div
          className="orbit-ellipse"
          style={{
            width: 420,
            height: 420,
            // scaleX = 640/420 ≈ 1.5238
            transform: "translate(-50%, -50%) scaleX(1.524)",
          }}
        >
          {/* icon #1 */}
          <div className="rotator rot-b rev">
            <div className="dot dot-b">
              <div className="icon-pill text-[#023047] bg-white/85 z-99">
                <FaCode size={18} />
              </div>
            </div>
          </div>
          {/* icon #2 (180° offset) */}
          <div className="rotator rot-b rev" style={{ animationDelay: "-5.5s" }}>
            <div className="dot dot-b" style={{ animationDelay: "-5.5s" }}>
              <div className="icon-pill text-[#8ECAE6] bg-white/85 z-99">
                <FaPaintBrush size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Main Image (on top) ===== */}
      <div className="relative mx-auto w-full max-w-[520px] z-0">
        <img
          src="/hero-page.png"
          alt="Hero Mock"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Optional soft glows */}
      <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full blur-2xl opacity-50 bg-[#219EBC]" />
      <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full blur-2xl opacity-50 bg-[#FB8500]" />

      {/* Animations & helpers */}
      <style jsx>{`
        /* base ellipse wrapper centered */
        .orbit-ellipse {
          position: absolute;
          top: 50%;
          left: 50%;
        }
        /* spinner path (container rotates) */
        .rotator {
          position: absolute;
          inset: 0;
          animation: spin 12s linear infinite;
        }
        .rev {
          animation-name: spinReverse;
        }
        /* the moving point on top of path */
        .dot {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          /* counter-rotation keeps icon upright */
          animation: counter 12s linear infinite;
        }
        .icon-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          box-shadow: 0 6px 18px rgba(2, 48, 71, 0.12);
          backdrop-filter: blur(6px);
        }

        /* keyframes */
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spinReverse {
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes counter {
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        /* different speeds for the two ellipses */
        .rot-a,
        .dot-a {
          animation-duration: 12s;
        }
        .rot-b,
        .dot-b {
          animation-duration: 11s;
        }

        /* accessibility */
        @media (prefers-reduced-motion: reduce) {
          .rotator,
          .dot {
            animation: none !important;
          }
        }
      `}</style>
    </div>







                </div>
            </div>
        </section>
    );
}



// import React from "react";

// export default function HeroSection() {
//     return (
//         <section className="relative overflow-hidden bg-white">
//             {/* Background gradient effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-[#219EBC]/15 via-white to-[#FB8500]/15" />

//             <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//                 <div className="grid items-center gap-10 lg:grid-cols-2">
//                     {/* Left Section - Text Content */}
//                     <div>
//                         <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#0B1324] public-sans">
//                             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#219EBC] to-[#FB8500]">
//                                 Build Beyond Ordinary
//                             </span>{" "}
//                             with Be Beyond Digital Solutions
//                         </h1>

//                         <p className="mt-4 text-lg text-[#4B5563] public-sans">
//                             Transform your brand with high-converting websites, performance
//                             marketing, and powerful creative campaigns — all in one place.
//                         </p>
//                     </div>

//                     {/* Right Section - Circles + Image */}
//                     <div className="relative flex justify-center items-center w-full max-w-[520px] mx-auto">
//                         {/* Background Circles (behind) */}
//                         <img
//                             src="/circles.webp" // your circles image
//                             alt="Decorative Circles"
//                             className="absolute inset-0 w-full h-full object-contain opacity-90 z-990 pointer-events-none w-[1000px] h-[10240px]"
//                         />

//                         {/* Hero Image (on top of circles) */}
//                         <img
//                             src="/hero-page.webp" // your main hero image
//                             alt="Hero Mock"
//                             className="relative rounded-lg w-[80%] h-auto object-cover z-10 drop-shadow-2xl"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
