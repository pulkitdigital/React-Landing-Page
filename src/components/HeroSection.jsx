import React from "react";

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
                        <div className="mx-auto w-full max-w-[520px] rounded-xl border border-black/5 bg-white/90 p-3 shadow-xl backdrop-blur">
                            <img
                                src="/hero-mock.png"
                                alt="Hero Mock"
                                className="rounded-lg w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating color accents */}
                        <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full blur-2xl opacity-50 bg-[#219EBC]" />
                        <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full blur-2xl opacity-50 bg-[#FB8500]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
