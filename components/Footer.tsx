"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const columns = [
  {
    heading: "About",
    links: ["Our Story", "The Team", "Press", "Careers"],
  },
  {
    heading: "Properties",
    links: ["Residential", "Commercial", "Leasing", "New Listings"],
  },
  {
    heading: "Services",
    links: ["Buyer Advisory", "Seller Advisory", "Property Management", "Investment"],
  },
  {
    heading: "Contact",
    links: ["Book a Tour", "Office Locations", "hello@haven.com", "+1 (310) 555-0142"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-navy border-t border-white/[0.05] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(26,58,107,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Top content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12">
        {/* Large centered logo */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="font-black text-off-white/10 leading-none select-none"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(5rem,15vw,14rem)",
              letterSpacing: "-0.04em",
            }}
            aria-hidden="true"
          >
            HAVEN.
          </div>
          <div
            className="font-black text-off-white -mt-8 md:-mt-12 lg:-mt-16 relative z-10"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(2.5rem,6vw,5rem)",
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
            }}
          >
            HAVEN<span style={{ color: "var(--color-brown)" }}>.</span>
          </div>
          <p className="text-off-white/40 font-bold text-sm mt-3 tracking-widest uppercase text-[11px]">
            Curated Luxury Real Estate
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {columns.map((col, i) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[9px] uppercase tracking-[0.22em] text-brown font-black mb-5">
                {col.heading}
              </div>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="link-underline text-off-white/40 hover:text-off-white/80 text-sm font-bold transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="mb-16 p-[1.5px] rounded-[1.25rem]"
          style={{
            background: "linear-gradient(135deg, rgba(59,114,232,0.2) 0%, rgba(139,94,60,0.1) 100%)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="rounded-[calc(1.25rem-1.5px)] px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "rgba(13,30,56,0.6)", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.04)" }}
          >
            <div>
              <div className="text-off-white font-black text-lg mb-1">Stay Ahead of the Market</div>
              <div className="text-off-white/40 text-sm font-bold">Exclusive listings and market intelligence, delivered weekly.</div>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="flex-1 md:flex-initial">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full md:w-64 bg-white/[0.04] border border-white/[0.08] text-off-white placeholder-off-white/25 text-sm font-bold px-5 py-3 rounded-full outline-none focus:border-blue-electric/50 transition-colors duration-300"
                  aria-label="Email address for newsletter"
                />
              </div>
              <button
                className="flex-shrink-0 bg-blue-electric hover:bg-blue-light text-white font-black text-[10px] uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all duration-400"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.05]">
          <span className="text-off-white/25 text-[11px] font-bold">
            © 2024 Haven Real Estate. All rights reserved.
          </span>
          <span
            className="text-[11px] font-bold"
            style={{ color: "var(--color-brown)", fontStyle: "italic" }}
          >
            Designed with precision.
          </span>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-off-white/25 hover:text-off-white/50 text-[11px] font-bold transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
