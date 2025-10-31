import React from "react";
// import heroImg from "./hero-page.webp";
import { FiShoppingBag, FiTrendingUp , FiSearch } from "react-icons/fi";
import { PiSparkleThin } from "react-icons/pi";


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

                    {/* <div className="relative">
                        <div className="mx-auto w-full max-w-[540px]">
                            <img
                                src="/hero-page.png"
                                alt="Hero Mock"
                                className="rounded-lg w-full h-auto object-cover"
                            />
                        </div>

                        <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full blur-2xl opacity-50 bg-[#219EBC]" />
                        <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full blur-2xl opacity-50 bg-[#FB8500]" />
                    </div> */}

                    <div className="relative">
                        <div className="mx-auto w-full max-w-[540px]">
                            <img
                                src="/hero-page.webp"
                                alt="Hero Mock"
                                className="rounded-lg w-full h-auto object-cover"
                            />
                        </div>

                        {/* Top-left icon */}
                        <div className="absolute top-0 left-0 text-[#FB8500] text-5xl opacity-80 animate-bounce">
                            <FiSearch />
                        </div>

                        {/* Top-right icon */}
                        <div className="absolute top-0 right-0 text-[#219EBC] text-5xl opacity-80 animate-bounce">
                            <FiTrendingUp />
                        </div>

                        {/* Bottom-left icon */}
                        <div className="absolute bottom--1 left-3 text-[#219EBC] text-6xl opacity-80 animate-spin-slow">
                            <FiShoppingBag />
                        </div>

                        {/* Bottom-right icon */}
                        <div className="absolute bottom--1 right-3 text-[#FB8500] text-5xl opacity-80 animate-ping">
                            <PiSparkleThin />
                        </div>

                        {/* Glow effects */}
                        <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full blur-2xl opacity-50 bg-[#219EBC]" />
                        <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full blur-2xl opacity-50 bg-[#FB8500]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

