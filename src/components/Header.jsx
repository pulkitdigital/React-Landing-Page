import React from "react";
import logo from "../assets/be_beyond_logo.png";
import { PiPhoneCall } from "react-icons/pi";

export default function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="https://bebeyond.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="Be Beyond Digital Solutions"
              className="h-14 w-auto" // increased logo size
            />
          </a>

          {/* Call Details */}
          <a
            href="tel:+919918671867"
            className="flex items-center gap-3 text-[16px] font-medium public-sans"
          >
            <PiPhoneCall className="h-8 w-8 text-[#FB8500]" /> {/* increased icon size */}
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[#1BA3B3] text-sm font-semibold">
                Let's Chat
              </span>
              <span className="text-[#0B1324] font-semibold">
                +91 99 1867 1867
              </span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
