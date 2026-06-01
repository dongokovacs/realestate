"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 22V12L14 4L24 12V22C24 22.5523 23.5523 23 23 23H17V17H11V23H5C4.44772 23 4 22.5523 4 22Z" stroke="#8B5E3C" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 23V17H17V23" stroke="#8B5E3C" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Residential Sales",
    description:
      "From intimate city pied-à-terres to sprawling oceanfront estates, our residential specialists bring unparalleled market intelligence and white-glove service to every transaction.",
    features: ["Buyer Representation", "Seller Advisory", "Market Analysis", "Negotiation"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="22" height="18" rx="1.5" stroke="#8B5E3C" strokeWidth="1.5"/>
        <path d="M3 10H25" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 5V10" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19 5V10" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 15.5H12" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 19H12" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 15.5H20" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 19H20" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Commercial Leasing",
    description:
      "Strategic commercial leasing solutions for flagship retail, premium office space, and mixed-use developments. We align your business vision with the right address.",
    features: ["Office Space", "Retail Acquisition", "Lease Structuring", "Portfolio Strategy"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9.5" stroke="#8B5E3C" strokeWidth="1.5"/>
        <path d="M14 8.5V14L17.5 17.5" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.5 5.5L8 8" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22.5 5.5L20 8" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Property Management",
    description:
      "Comprehensive management solutions that protect and enhance asset value. From tenant relations to capital improvements, we handle every detail with precision.",
    features: ["Tenant Relations", "Maintenance Oversight", "Financial Reporting", "Value Optimization"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 md:py-36" style={{ background: "#F5F0EB" }}>
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brown/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-8 h-px bg-brown" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-brown font-black">
                What We Offer
              </span>
            </motion.div>

            <motion.h2
              className="heading-display text-navy"
              style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              OUR
              <br />
              <span style={{ color: "var(--color-blue-light)" }}>SERVICES</span>
            </motion.h2>
          </div>

          <motion.p
            className="max-w-xs text-navy/60 font-bold text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            A full spectrum of real estate services crafted to serve the most discerning clientele worldwide.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Double bezel on light bg */}
              <div
                className="p-[1.5px] rounded-[1.75rem] h-full group cursor-pointer"
                style={{
                  background: "rgba(139,94,60,0.1)",
                  transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <div
                  className="rounded-[calc(1.75rem-1.5px)] p-8 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-1"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0 4px 24px rgba(10,22,40,0.06), inset 0 1px 1px rgba(255,255,255,0.8)",
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  {/* Icon in double bezel */}
                  <div className="mb-6">
                    <div
                      className="p-[1px] rounded-[0.875rem] w-fit"
                      style={{ background: "rgba(139,94,60,0.15)" }}
                    >
                      <div
                        className="p-3.5 rounded-[calc(0.875rem-1px)]"
                        style={{ background: "rgba(139,94,60,0.06)" }}
                      >
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  <h3
                    className="text-navy font-black text-xl mb-3"
                    style={{ fontFamily: "var(--font-poppins)", letterSpacing: "-0.02em" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-navy/55 text-sm font-bold leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--color-brown)" }} />
                        <span className="text-[11px] uppercase tracking-[0.12em] text-navy/50 font-black">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-navy/[0.06]">
                    <button
                      className="group/btn flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-brown font-black hover:text-brown-light transition-colors duration-300"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                      <span className="w-5 h-5 rounded-full border border-brown/30 group-hover/btn:border-brown-light/50 flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-0.5">
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                          <path d="M1 6L6 1M6 1H2.5M6 1V4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
