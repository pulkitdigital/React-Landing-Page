import React from "react";
import logo from "../assets/be_beyond_logo.png";
import { PiPhoneCall } from "react-icons/pi";

export default function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="https://bebeyond.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2"
          >
            <img
              src={logo}
              alt="Be Beyond Digital Solutions"
              className="h-8 sm:h-12 w-auto transition-all duration-300"
            />
          </a>

          {/* Call Details */}
          <a
            href="tel:+919026861110"
            className="flex items-center gap-1 sm:gap-2 text-[13px] sm:text-[16px] font-medium public-sans"
          >
            {/* Icon */}
            <PiPhoneCall className="h-5 w-5 sm:h-7 sm:w-7 text-[#FB8500]" />

            {/* Text */}
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[#1BA3B3] text-[11px] sm:text-sm font-semibold">
                Let's Chat
              </span>
              <span className="text-[#0B1324] font-semibold text-[13px] sm:text-base">
                +91&nbsp;90&nbsp;2686&nbsp;1110
                
              </span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
