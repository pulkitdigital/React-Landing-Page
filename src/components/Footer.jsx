import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const NAVY = "#1c1c34";

const Footer = () => (
  <footer className="w-full bg-[#1c1c34] py-10 px-3 sm:px-6 lg:px-8 relative flex items-start md:items-center">
    <div className="max-w-[1200px] mx-auto w-full relative">
      {/* Decorative Map Images */}
      <img
        src="/map-pattern-light.png"
        alt="Map Pattern"
        className="absolute top-0 left-0 w-full max-w-lg opacity-40 pointer-events-none select-none h-[180px] md:h-[250px]"
        loading="eager"
        style={{ zIndex: 0 }}
      />
      {/* Main content */}
      <div className="relative z-[1] flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-10 mt-6 md:mt-10 w-full">
        {/* ABOUT */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <h4 className="text-white text-lg font-semibold mb-1 text-[21px] sm:text-[25px]">About Be Beyond</h4>
          <p className="text-[#c0c5ce] text-[15px]">
            Be Beyond Digital Solutions: Partner with us to unlock your digital potential and achieve sustainable business growth. Go Beyond. Contact us.
          </p>
          <div className="flex items-center gap-4 mt-2 text-white justify-center md:justify-start">
            <a href="https://www.facebook.com/profile.php" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/bebeyonddigitalsolutions/" target="_blank" rel="noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919918671867" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/company/be-beyond-digital-solutions" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        {/* COMPANY */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <h4 className="text-white text-lg font-semibold mb-1 text-[21px] sm:text-[25px]">Company</h4>
          <ul className="flex flex-col gap-2 text-[#c0c5ce] text-[15px]">
            <li>
              <a href="/services" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">Blog</a>
            </li>
            <li>
              <a href="/about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        {/* CONTACT */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <h4 className="text-white text-lg font-semibold mb-1 text-[21px] sm:text-[25px]">Contact</h4>
          <ul className="flex flex-col gap-2 text-[#c0c5ce] text-[15px]">
            <li>
              <a
                href="https://maps.app.goo.gl/Ho1RHwKr1gCLWqFx7"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Chamber 6, 4th Floor, Sangam Place (Opposite K K Sales),<br className="hidden md:block" />
                Civil Lines, Prayagraj, Uttar Pradesh - 211001
              </a>
            </li>
            <li>
              <a href="mailto:info@bebeyond.digital" className="hover:underline">
                info@bebeyond.digital
              </a>
            </li>
            <li>
              <a href="tel:+919918671867" className="hover:underline block">
                +91 99 1867 1867
              </a>
              <a href="tel:+919026861110" className="hover:underline block">
                +91 90 2686 1110
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* COPYRIGHT */}
      <div className="relative z-[2] text-[#c0c5ce] text-center text-[13px] sm:text-[14px] mt-8 sm:mt-12 md:mt-14">
        © 2025 BeBeyond, All Rights Reserved. Design By BeBeyond
      </div>
    </div>
  </footer>
);

export default Footer;
