"use client";

import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import { properties } from "@/lib/properties";

export default function FeaturedProperties() {
  const featured = properties.slice(0, 6);

  return (
    <section id="properties" className="relative bg-navy py-28 md:py-36">
      {/* Subtle section background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(26,58,107,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-brown" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-brown font-black">
                Featured Listings
              </span>
            </motion.div>

            <motion.h2
              className="heading-display text-off-white"
              style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              EXCEPTIONAL
              <br />
              <span className="text-blue-electric">PROPERTIES</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#"
              className="group flex items-center gap-2 border border-off-white/15 text-off-white/60 hover:text-off-white hover:border-off-white/30 font-black text-[10px] uppercase tracking-[0.18em] px-6 py-3 rounded-full transition-all duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              View All Listings
              <span className="w-5 h-5 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featured.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center">
            <p className="text-off-white/40 text-sm mb-4 font-bold">
              Showing 6 of {properties.length} curated properties
            </p>
            <div className="flex items-center justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 ${i === 0 ? "w-6 h-1.5 bg-blue-electric" : "w-1.5 h-1.5 bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
