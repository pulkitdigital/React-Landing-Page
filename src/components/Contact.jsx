import React from "react";
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

  return (
    <main className="w-full flex items-center justify-center relative overflow-hidden">
      <div className="clients-testimonials-1-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="clients-testimonials-1 w-88% flex flex-col items-center py-14 gap-5 relative z-10">
          {/* Heading */}
          <div className="top-div-of-clients-testimonials-1 w-full flex flex-col items-center justify-center gap-1">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h2-div-for-clients-testimonials-1 text-center mb-4"
            >
              <h2 className="mb-0 text-center text-3xl sm:text-4xl font-semibold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
                        Get Connect's
                    </span>
                </h2>
            </motion.div>
          </div>

          <div className="w-88% grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
            {/* LEFT: Details */}
            <motion.div
              variants={leftCol}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="flex flex-col gap-6"
            >
              <motion.h3
                variants={leftItem}
                className="text-h2 font-h2 leading-h2 1004px:text-h3 1004px:leading-h3 792px:text-h4 text-black text-[21px] mb-0"
              >
                Get Started with BeBeyond
              </motion.h3>

              <motion.p
                variants={leftItem}
                className="text-[#111827]/70 mt-[-20px]"
              >
                Let’s turn your vision into a high-performing digital experience.
              </motion.p>

              {/* Address */}
              <motion.div
                variants={leftItem}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 bg-[#F3F3F3] rounded-xl px-3 py-3 border border-[#E5E7EB]"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: `${CYAN}15`, color: CYAN }}
                >
                  <LuMapPin size={18} />
                </span>

                <div className="public_sans_body text-p2 font-p2 text-[#111827] flex-1 leading-relaxed">
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
                    className="relative z-0 flex items-center justify-center 
                                px-4 py-1 text-white text-[16px] font-semibold 
                                public-sans bg-[#219EBC] overflow-hidden 
                                before:absolute before:inset-0 before:-z-10 
                                before:translate-x-[150%] before:translate-y-[150%] 
                                before:scale-[2.5] before:rounded-[100%] 
                                before:bg-[#FB8500] before:transition-transform 
                                before:duration-700 hover:before:translate-x-0 
                                hover:before:translate-y-0 
                                active:scale-90 active:transition-all active:duration-300 
                                400px:px-4 400px:py-1"
                  >
                    View Map
                  </button>
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={leftItem}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 bg-[#F3F3F3] rounded-xl px-3 py-3 border border-[#E5E7EB]"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: `${CYAN}15`, color: CYAN }}
                >
                  <LuMail size={18} />
                </span>
                <span className="public_sans_body text-p2 font-p2 text-[#111827] flex-1 truncate">
                  info@bebeyond.digital
                </span>
                <a href="mailto:info@bebeyond.digital" className="shrink-0">
                  <button className="relative z-0 flex items-center justify-center 
                                px-4 py-1 text-white text-[16px] font-semibold 
                                public-sans bg-[#219EBC] overflow-hidden 
                                before:absolute before:inset-0 before:-z-10 
                                before:translate-x-[150%] before:translate-y-[150%] 
                                before:scale-[2.5] before:rounded-[100%] 
                                before:bg-[#FB8500] before:transition-transform 
                                before:duration-700 hover:before:translate-x-0 
                                hover:before:translate-y-0 
                                active:scale-90 active:transition-all active:duration-300 
                                400px:px-4 400px:py-1">
                    Email Us
                  </button>
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={leftItem}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 bg-[#F3F3F3] rounded-xl px-3 py-3 border border-[#E5E7EB]"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: `${ORANGE}18`, color: ORANGE }}
                >
                  <LuPhone size={18} />
                </span>
                <span className="public_sans_body text-p2 font-p2 text-[#111827] flex-1 truncate">
                  +91-9918671867
                </span>
                <a href="tel:+919918671867" className="shrink-0">
                  <button className="relative z-0 flex items-center justify-center 
                                px-4 py-1 text-white text-[16px] font-semibold 
                                public-sans bg-[#219EBC] overflow-hidden 
                                before:absolute before:inset-0 before:-z-10 
                                before:translate-x-[150%] before:translate-y-[150%] 
                                before:scale-[2.5] before:rounded-[100%] 
                                before:bg-[#FB8500] before:transition-transform 
                                before:duration-700 hover:before:translate-x-0 
                                hover:before:translate-y-0 
                                active:scale-90 active:transition-all active:duration-300 
                                400px:px-4 400px:py-1">
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
              className="bg-white rounded-[18px] overflow-hidden ml-8"
              style={{
                border: "4px solid transparent",
                backgroundImage: `linear-gradient(white, white), linear-gradient(180deg, #219ebc, #fb8500)`,
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              <div className="p-6">
                <h4 className="text-[21px] font-h5 mb-4 text-[#219ebc]">
                  Send us your Query
                </h4>

                <form className="space-y-4">
                  <div>
                    <label className="public_sans_body text-p3 font-p3 text-[#111827]">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none text-black focus:border-[#CBD5E1] placeholder:text-[#6B7280]"
                    />
                  </div>

                  <div>
                    <label className="public_sans_body text-p3 font-p3 text-[#111827]">
                      Contact No.
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none text-black focus:border-[#CBD5E1] placeholder:text-[#6B7280]"
                    />
                  </div>

                  <div>
                    <label className="public_sans_body text-p3 font-p3 text-[#111827]">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none text-black focus:border-[#CBD5E1] placeholder:text-[#6B7280]"
                    />
                  </div>

                  <div>
                    <label className="public_sans_body text-p3 font-p3 text-[#111827]">
                      Need Help With
                    </label>
                    <select
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none focus:border-[#CBD5E1] text-[#6B7280]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      <option value="website ">Website Design</option>
                      <option value="branding">Branding</option>
                      <option value="uiux">UI/UX</option>
                      <option value="content">Content & Strategy</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-0 flex items-center justify-center 
                                px-4 py-2 text-white text-[16px] font-semibold 
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
                    <LuSend size={18} />
                    Send Your Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
