// import React from "react";
// import { motion } from "framer-motion";
// import { LuMail, LuPhone, LuSend, LuMapPin } from "react-icons/lu";

// export default function ContactUs() {
//   const CYAN = "#219EBC";
//   const ORANGE = "#FB8500";

//   // ===== Animations =====
//   const leftCol = {
//     hidden: { x: -30, opacity: 0 },
//     show: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.55,
//         ease: "easeOut",
//         when: "beforeChildren",
//         staggerChildren: 0.12,
//       },
//     },
//   };
//   const leftItem = {
//     hidden: { y: 12, opacity: 0 },
//     show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
//   };
//   const rightCard = {
//     hidden: { x: 30, opacity: 0 },
//     show: { x: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
//   };

//   // simple submit handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: handle form submission (API call / validation)
//     console.log("contact form submitted");
//   };

//   return (
//     <main className="w-full flex items-center justify-center relative overflow-hidden">
//       <div className="w-full max-w-[1600px] flex items-center justify-center relative">
//         <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 relative z-10">
//           {/* Heading */}
//           <div className="w-full flex flex-col items-center justify-center">
//             <motion.div
//               initial={{ opacity: 0, y: "50%" }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="text-center mb-4 sm:mb-6"
//             >
//               <h2 className="mb-0 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
//                   Get Connect&apos;s
//                 </span>
//               </h2>
//             </motion.div>
//           </div>

//           <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
//             {/* LEFT: Details */}
//             <motion.div
//               variants={leftCol}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "0px 0px -50px 0px" }}
//               className="flex flex-col gap-4 sm:gap-6"
//             >
//               <motion.h3
//                 variants={leftItem}
//                 className="text-xl sm:text-2xl lg:text-[28px] font-semibold leading-snug text-black"
//               >
//                 Get Started with BeBeyond
//               </motion.h3>

//               <motion.p
//                 variants={leftItem}
//                 className="text-[#111827]/70 -mt-2 sm:-mt-3 text-sm sm:text-base"
//               >
//                 Let’s turn your vision into a high-performing digital experience.
//               </motion.p>

//               {/* Address */}
//               <motion.div
//                 variants={leftItem}
//                 whileHover={{ y: -2, transition: { duration: 0.2 } }}
//                 className="flex items-start gap-3 bg-[#F3F3F3] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 border border-[#E5E7EB]"
//               >
//                 <span
//                   className="inline-flex h-9 w-9 items-center justify-center rounded-lg shrink-0"
//                   style={{ background: `${CYAN}15`, color: CYAN }}
//                 >
//                   <LuMapPin size={18} />
//                 </span>
//                 <div className="text-sm sm:text-base text-[#111827] flex-1 leading-relaxed">
//                   Chamber 6, 4th Floor, Sangam Place <br />
//                   (Opposite K K Sales), Civil Lines, <br />
//                   Prayagraj, Uttar Pradesh – 211001
//                 </div>
//                 <a
//                   href="https://maps.app.goo.gl/wdp75hHVMYMdVipt7"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="shrink-0 self-center"
//                 >
//                   <button
//                     className="relative z-0 inline-flex items-center justify-center px-3 sm:px-4 py-1 text-white text-sm sm:text-[16px] font-semibold bg-[#219EBC] rounded-md overflow-hidden
//                     before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#FB8500] before:transition-transform before:duration-700
//                     hover:before:translate-x-0 hover:before:translate-y-0 active:scale-90 active:transition-all active:duration-300"
//                   >
//                     View Map
//                   </button>
//                 </a>
//               </motion.div>

//               {/* Email */}
//               <motion.div
//                 variants={leftItem}
//                 whileHover={{ y: -2, transition: { duration: 0.2 } }}
//                 className="flex items-center gap-3 bg-[#F3F3F3] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 border border-[#E5E7EB]"
//               >
//                 <span
//                   className="inline-flex h-9 w-9 items-center justify-center rounded-lg shrink-0"
//                   style={{ background: `${CYAN}15`, color: CYAN }}
//                 >
//                   <LuMail size={18} />
//                 </span>
//                 <span className="text-sm sm:text-base text-[#111827] flex-1 truncate">
//                   info@bebeyond.digital
//                 </span>
//                 <a href="mailto:info@bebeyond.digital" className="shrink-0">
//                   <button
//                     className="relative z-0 inline-flex items-center justify-center px-3 sm:px-4 py-1 text-white text-sm sm:text-[16px] font-semibold bg-[#219EBC] rounded-md overflow-hidden
//                     before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#FB8500] before:transition-transform before:duration-700
//                     hover:before:translate-x-0 hover:before:translate-y-0 active:scale-90 active:transition-all active:duration-300"
//                   >
//                     Email Us
//                   </button>
//                 </a>
//               </motion.div>

//               {/* Phone */}
//               <motion.div
//                 variants={leftItem}
//                 whileHover={{ y: -2, transition: { duration: 0.2 } }}
//                 className="flex items-center gap-3 bg-[#F3F3F3] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 border border-[#E5E7EB]"
//               >
//                 <span
//                   className="inline-flex h-9 w-9 items-center justify-center rounded-lg shrink-0"
//                   style={{ background: `${ORANGE}18`, color: ORANGE }}
//                 >
//                   <LuPhone size={18} />
//                 </span>
//                 <span className="text-sm sm:text-base text-[#111827] flex-1 truncate">
//                   +91-9026861110
//                 </span>
//                 <a href="tel:+919026861110" className="shrink-0">
//                   <button
//                     className="relative z-0 inline-flex items-center justify-center px-3 sm:px-4 py-1 text-white text-sm sm:text-[16px] font-semibold bg-[#219EBC] rounded-md overflow-hidden
//                     before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#FB8500] before:transition-transform before:duration-700
//                     hover:before:translate-x-0 hover:before:translate-y-0 active:scale-90 active:transition-all active:duration-300"
//                   >
//                     Call Us
//                   </button>
//                 </a>
//               </motion.div>
//             </motion.div>

//             {/* RIGHT: Form */}
//             <motion.div
//               variants={rightCard}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "0px 0px -60px 0px" }}
//               className="bg-white rounded-xl sm:rounded-2xl overflow-hidden"
//               id="contact-form"
//               style={{
//                 border: "4px solid transparent",
//                 backgroundImage: `linear-gradient(white, white), linear-gradient(180deg, #219ebc, #fb8500)`,
//                 backgroundOrigin: "border-box",
//                 backgroundClip: "content-box, border-box",
//               }}
//             >
//               <div className="p-4 sm:p-6 lg:p-7">
//                 <h4 className="text-[18px] sm:text-[20px] lg:text-[21px] font-semibold mb-3 sm:mb-4 text-[#219ebc]">
//                   Send us your Query
//                 </h4>

//                 {/* form tag added with submit handler */}
//                 <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
//                   <div>
//                     <label className="block text-sm font-medium text-[#111827]">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Enter your name"
//                       className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none text-black focus:border-[#CBD5E1] placeholder:text-[#6B7280]"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-[#111827]">
//                       Contact No.
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Enter your phone number"
//                       className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none text-black focus:border-[#CBD5E1] placeholder:text-[#6B7280]"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-[#111827]">
//                       E-Mail
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none text-black focus:border-[#CBD5E1] placeholder:text-[#6B7280]"
//                     />
//                   </div>

//                   {/* Replaced 'Need Help With' select with Message textarea */}
//                   <div>
//                     <label className="block text-sm font-medium text-[#111827]">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       rows={5}
//                       placeholder="Write your message or project details..."
//                       className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none text-black focus:border-[#CBD5E1] placeholder:text-[#6B7280] resize-none"
//                     />
//                   </div>

//                   <motion.button
//                     type="submit"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="relative z-0 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 text-white text-sm sm:text-[16px] font-semibold bg-[#219EBC] rounded-md overflow-hidden
//                     before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#FB8500] before:transition-transform before:duration-700
//                     hover:before:translate-x-0 hover:before:translate-y-0"
//                   >
//                     <LuSend size={18} />
//                     Send Your Message
//                   </motion.button>
//                 </form>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



// src/components/ContactUs.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuMail, LuPhone, LuSend, LuMapPin } from "react-icons/lu";

export default function ContactUs() {
  const CYAN = "#219EBC";
  const ORANGE = "#FB8500";

  // ===== Animations =====
  const leftCol = {
    hidden: { x: -30, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.55,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };
  const leftItem = {
    hidden: { y: 12, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const rightCard = {
    hidden: { x: 30, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
  };

  // ===== State =====
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  // ===== Submit Handler (Google Apps Script Web App) =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const form = e.currentTarget;
    const payload = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      source: window.location.pathname || "website",
      // secret: import.meta.env.VITE_CONTACT_SECRET, // (optional) if you add a secret check in Apps Script
    };

    // honeypot (hidden field). If filled => likely bot
    if (form.company?.value) return;

    // basic validation
    if (!payload.name || !payload.phone || !payload.email) {
      setStatus({ ok: false, msg: "Please fill name, phone and email." });
      return;
    }

    try {
      setSubmitting(true);
      await fetch(import.meta.env.VITE_SHEET_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors", // simplest cross-origin for Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus({ ok: true, msg: "Thanks! We’ll get back to you shortly." });
      form.reset();
    } catch (err) {
      setStatus({ ok: false, msg: "Submission failed. Try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="w-full flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-[1600px] flex items-center justify-center relative">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 relative z-10">
          {/* Heading */}
          <div className="w-full flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-4 sm:mb-6"
            >
              <h2 className="mb-0 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
                  Get Connect&apos;s
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* LEFT: Details */}
            <motion.div
              variants={leftCol}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="flex flex-col gap-4 sm:gap-6"
            >
              <motion.h3
                variants={leftItem}
                className="text-xl sm:text-2xl lg:text-[28px] font-semibold leading-snug text-black"
              >
                Get Started with BeBeyond
              </motion.h3>

              <motion.p
                variants={leftItem}
                className="text-[#111827]/70 -mt-2 sm:-mt-3 text-sm sm:text-base"
              >
                Let’s turn your vision into a high-performing digital experience.
              </motion.p>

              {/* Address */}
              <motion.div
                variants={leftItem}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 bg-[#F3F3F3] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 border border-[#E5E7EB]"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg shrink-0"
                  style={{ background: `${CYAN}15`, color: CYAN }}
                >
                  <LuMapPin size={18} />
                </span>
                <div className="text-sm sm:text-base text-[#111827] flex-1 leading-relaxed">
                  Chamber 6, 4th Floor, Sangam Place <br />
                  (Opposite K K Sales), Civil Lines, <br />
                  Prayagraj, Uttar Pradesh – 211001
                </div>
                <a
                  href="https://maps.app.goo.gl/wdp75hHVMYMdVipt7"
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 self-center"
                >
                  <button
                    className="relative z-0 inline-flex items-center justify-center px-3 sm:px-4 py-1 text-white text-sm sm:text-[16px] font-semibold bg-[#219EBC] rounded-md overflow-hidden
                    before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#FB8500] before:transition-transform before:duration-700
                    hover:before:translate-x-0 hover:before:translate-y-0 active:scale-90 active:transition-all active:duration-300"
                  >
                    View Map
                  </button>
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={leftItem}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 bg-[#F3F3F3] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 border border-[#E5E7EB]"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg shrink-0"
                  style={{ background: `${CYAN}15`, color: CYAN }}
                >
                  <LuMail size={18} />
                </span>
                <span className="text-sm sm:text-base text-[#111827] flex-1 truncate">
                  info@bebeyond.digital
                </span>
                <a href="mailto:info@bebeyond.digital" className="shrink-0">
                  <button
                    className="relative z-0 inline-flex items-center justify-center px-3 sm:px-4 py-1 text-white text-sm sm:text-[16px] font-semibold bg-[#219EBC] rounded-md overflow-hidden
                    before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#FB8500] before:transition-transform before:duration-700
                    hover:before:translate-x-0 hover:before:translate-y-0 active:scale-90 active:transition-all active:duration-300"
                  >
                    Email Us
                  </button>
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={leftItem}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 bg-[#F3F3F3] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 border border-[#E5E7EB]"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg shrink-0"
                  style={{ background: `${ORANGE}18`, color: ORANGE }}
                >
                  <LuPhone size={18} />
                </span>
                <span className="text-sm sm:text-base text-[#111827] flex-1 truncate">
                  +91-9026861110
                </span>
                <a href="tel:+919026861110" className="shrink-0">
                  <button
                    className="relative z-0 inline-flex items-center justify-center px-3 sm:px-4 py-1 text-white text-sm sm:text-[16px] font-semibold bg-[#219EBC] rounded-md overflow-hidden
                    before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#FB8500] before:transition-transform before:duration-700
                    hover:before:translate-x-0 hover:before:translate-y-0 active:scale-90 active:transition-all active:duration-300"
                  >
                    Call Us
                  </button>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div
              variants={rightCard}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden"
              id="contact-form"
              style={{
                border: "4px solid transparent",
                backgroundImage: `linear-gradient(white, white), linear-gradient(180deg, #219ebc, #fb8500)`,
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              <div className="p-4 sm:p-6 lg:p-7">
                <h4 className="text-[18px] sm:text-[20px] lg:text-[21px] font-semibold mb-3 sm:mb-4 text-[#219ebc]">
                  Send us your Query
                </h4>

                <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                  {/* Honeypot (hidden) */}
                  <input
                    type="text"
                    name="company"
                    autoComplete="off"
                    tabIndex="-1"
                    className="hidden"
                  />

                  <div>
                    <label className="block text-sm font-medium text-[#111827]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none text-black focus:border-[#CBD5E1] placeholder:text-[#6B7280]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827]">
                      Contact No.
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none text-black focus:border-[#CBD5E1] placeholder:text-[#6B7280]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827]">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none text-black focus:border-[#CBD5E1] placeholder:text-[#6B7280]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Write your message or project details..."
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none text-black focus:border-[#CBD5E1] placeholder:text-[#6B7280] resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: submitting ? 1 : 1.02 }}
                    whileTap={{ scale: submitting ? 1 : 0.95 }}
                    className={`relative z-0 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 text-white text-sm sm:text-[16px] font-semibold rounded-md overflow-hidden
                      ${submitting ? "bg-[#7fbfd3] cursor-not-allowed" : "bg-[#219EBC]"}
                      before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#FB8500] before:transition-transform before:duration-700
                      hover:before:translate-x-0 hover:before:translate-y-0`}
                  >
                    <LuSend size={18} />
                    {submitting ? "Sending..." : "Send Your Message"}
                  </motion.button>

                  {status && (
                    <p className={`text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>
                      {status.msg}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
