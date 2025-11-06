import React from "react";
// import heroImg from "./hero-page.webp";
// removed react-icons imports, using images from public folder instead

export default function HeroSection() {
    return (
        <>
            <style>{`
                @keyframes fadeUp {
                    0% { opacity: 0; transform: translateY(12px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes floatY {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0); }
                }
                @keyframes spinSlow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>

            <section
                className="relative overflow-hidden bg-white"
                style={{
                    opacity: 0,
                    animation: "fadeUp 700ms cubic-bezier(.22,.9,.35,1) forwards",
                }}
            >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#219EBC]/15 via-white to-[#FB8500]/15" />

                <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        {/* Left Section - Content */}
                        <div
                            style={{
                                opacity: 0,
                                animation:
                                    "fadeUp 700ms cubic-bezier(.22,.9,.35,1) forwards",
                                animationDelay: "160ms",
                            }}
                        >
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
                        </div>

                        <div
                            className="relative"
                            style={{
                                opacity: 0,
                                animation:
                                    "fadeUp 700ms cubic-bezier(.22,.9,.35,1) forwards",
                                animationDelay: "320ms",
                            }}
                        >
                            <div className="mx-auto w-full max-w-[540px]">
                                <img
                                    src="/hero-page.webp"
                                    alt="Hero Mock"
                                    className="rounded-lg w-full h-auto object-cover"
                                />
                            </div>

                            {/* Top-left image (email) */}
                            <div
                                className="absolute -top-5 -left-4"
                                style={{
                                    animation:
                                        "fadeUp 700ms cubic-bezier(.22,.9,.35,1) forwards 480ms, floatY 3.6s ease-in-out 900ms infinite",
                                    willChange: "transform, opacity",
                                }}
                            >
                                <img src="/email.webp" alt="email" className="w-16 h-16 object-contain" />
                            </div>

                            {/* Top-right image (graph/seo trending) */}
                            <div
                                className="absolute -top-6 -right-3"
                                style={{
                                    animation:
                                        "fadeUp 700ms cubic-bezier(.22,.9,.35,1) forwards 540ms, floatY 3.2s ease-in-out 1000ms infinite",
                                    willChange: "transform, opacity",
                                }}
                            >
                                <img src="/graph.webp" alt="graph" className="w-16 h-16 object-contain" />
                            </div>

                            {/* Bottom-left image (add to cart) */}
                            <div
                                className="absolute -bottom-10 left-3"
                                style={{
                                    animation:
                                        "fadeUp 700ms cubic-bezier(.22,.9,.35,1) forwards 540ms, floatY 3.2s ease-in-out 1000ms infinite",
                                    willChange: "transform, opacity",
                                }}
                            >
                                <img src="/addToCart.webp" alt="add to cart" className="w-16 h-16 object-contain" />
                            </div>

                            {/* Bottom-right image (seo / sparkle) */}
                            <div
                                className="absolute -bottom-12 -right-8"
                                style={{
                                    animation:
                                        "fadeUp 700ms cubic-bezier(.22,.9,.35,1) forwards 660ms, floatY 4s ease-in-out 1100ms infinite",
                                    willChange: "transform, opacity",
                                }}
                            >
                                <img src="/seo.webp" alt="seo" className="w-16 h-16 object-contain" />
                            </div>

                            {/* Glow effects */}
                            {/* <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full blur-2xl opacity-50 bg-[#219EBC]" />
                            <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full blur-2xl opacity-50 bg-[#FB8500]" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}