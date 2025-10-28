import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const ORANGE = "#FB8500";
const BLUE = "#219EBC";

const PLANS = [
    {
        name: "Basic",
        price: "₹49,999",
        cta: "Get in touch",
        highlight: false,
        features: [
            { label: "Store Setup", ok: true },
            { label: "Premium Shop Experience", ok: true },
            { label: "Domain Setup", ok: true },
            { label: "Payment Gateway Set Up", ok: true },
            { label: "List up to 100 Products", ok: true },
            { label: "Support for 1 Month", ok: true },
            { label: "Live Chat", ok: false },
            { label: "SEO", ok: false },
            { label: "Advanced apps", ok: false },
            { label: "Advanced analytics", ok: false },
        ],
    },
    {
        name: "Pro",
        price: "₹74,999",
        cta: "Get in touch",
        highlight: true, // gradient card
        badge: "Most popular",
        features: [
            { label: "Store Setup", ok: true },
            { label: "Premium Shop Experience", ok: true },
            { label: "Domain Setup", ok: true },
            { label: "Payment Gateway Set Up", ok: true },
            { label: "List up to 250 Products", ok: true },
            { label: "Support for 3 Months", ok: true },
            { label: "Live Chat", ok: true },
            { label: "SEO", ok: true },
            { label: "Advanced apps", ok: false },
            { label: "Advanced analytics", ok: false },
        ],
    },
    {
        name: "Business",
        price: "₹99,999",
        cta: "Get in touch",
        highlight: false,
        features: [
            { label: "Store Setup", ok: true },
            { label: "Premium Shop Experience", ok: true },
            { label: "Domain Setup", ok: true },
            { label: "Payment Gateway Set Up", ok: true },
            { label: "List up to 500 Products", ok: true },
            { label: "Support for 6 Months", ok: true },
            { label: "Live Chat", ok: true },
            { label: "SEO", ok: true },
            { label: "Advanced apps", ok: true },
            { label: "Advanced analytics", ok: true },
        ],
    },
];

export default function Pricing() {
    return (
        <section className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#F5F3EF]">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="mb-0 text-center text-3xl sm:text-4xl font-semibold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB8500] to-[#219EBC]">
                        Pricing
                    </span>
                </h2>
                <p className="mt-3 text-center text-[15px] text-[#111827]/70">
                    Invest in a store built right, designed to drive lasting results.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {PLANS.map((plan, idx) => (
                    <div
                        key={plan.name}
                        className={[
                            "relative rounded-2xl overflow-hidden",
                            "border border-black/10 shadow-sm",
                            plan.highlight ? "p-[1px]" : "",
                        ].join(" ")}
                        style={
                            plan.highlight
                                ? {
                                    background: `linear-gradient(135deg, ${ORANGE}, ${BLUE})`,
                                }
                                : undefined
                        }
                    >
                        {/* Badge for highlight */}
                        {plan.highlight && plan.badge && (
                            <div className="absolute right-3 top-3 z-10">
                                <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-[#0B1324] shadow-sm">
                                    {plan.badge}
                                </span>
                            </div>
                        )}

                        {/* Card body */}
                        <div
                            className={[
                                "h-full rounded-2xl",
                                plan.highlight ? "bg-gradient-to-br from-white/90 to-white/70" : "bg-white",
                                "p-5 sm:p-6",
                            ].join(" ")}
                        >
                            <div className="text-sm text-[#0B1324]/70">{plan.name}</div>

                            <div className="mt-1 text-3xl font-extrabold text-[#0B1324]">
                                {plan.price}
                            </div>

                            <button
                                className={[
                                    "mt-4 w-full rounded-md px-4 py-2 text-sm font-semibold",
                                    plan.highlight ? "bg-white text-[#0B1324]" : "bg-black text-white",
                                ].join(" ")}
                            >
                                {plan.cta}
                            </button>

                            <ul className="mt-5 space-y-3">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#0B1324]">
                                        {f.ok ? (
                                            <FaCheck className="mt-[2px]" size={14} />
                                        ) : (
                                            <FaTimes className="mt-[2px] opacity-60" size={14} />
                                        )}
                                        <span className={f.ok ? "" : "opacity-70"}>{f.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
