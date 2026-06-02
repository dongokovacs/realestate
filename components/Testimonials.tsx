"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Haven didn't just find us a house — they found us a life. Our Montecito estate exceeded every expectation, and the process was seamless from first showing to final signature.",
    name: "Catherine & James Whitmore",
    role: "Estate Owners, Montecito",
    initials: "CW",
  },
  {
    quote: "The team's understanding of ultra-prime real estate is unmatched. They negotiated a price 8% below asking on a property we thought was beyond our reach. Extraordinary professionals.",
    name: "Alexander Reinholt",
    role: "Tech Executive, Manhattan",
    initials: "AR",
  },
  {
    quote: "After 14 years of searching across three continents, Haven found our family compound in Malibu in just six weeks. Their off-market network is remarkable.",
    name: "Sophia & Marcus Laurent",
    role: "Art Collectors, Malibu",
    initials: "SL",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const regionId = useId();
  const quoteId = useId();

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="relative bg-navy py-28 md:py-36 overflow-hidden"
      aria-label="Ügyfeleink véleménye"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(26,58,107,0.25) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Label & Controls */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            >
              <div className="w-8 h-px bg-brown" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-brown font-black">Client Stories</span>
            </motion.div>

            <motion.h2
              className="heading-display text-off-white mb-10"
              style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)" }}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              WHAT OUR<br />
              <span className="text-blue-electric">CLIENTS SAY</span>
            </motion.h2>

            {/* Pagination dots */}
            <div className="flex items-center gap-3 mb-8" role="tablist" aria-label="Vélemény kiválasztása">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-controls={regionId}
                  aria-label={`${i + 1}. vélemény — ${t.name}`}
                  onClick={() => setActive(i)}
                  className="transition-all duration-400"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  <div
                    className="rounded-full transition-all duration-400"
                    style={{
                      width: i === active ? "28px" : "8px",
                      height: "8px",
                      background: i === active ? "var(--color-blue-electric)" : "rgba(245,240,235,0.15)",
                      transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="group w-12 h-12 rounded-full border border-white/10 hover:border-blue-electric/50 flex items-center justify-center transition-all duration-400"
                aria-label="Előző vélemény"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-0.5">
                  <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={next}
                className="group w-12 h-12 rounded-full border border-white/10 hover:border-blue-electric/50 flex items-center justify-center transition-all duration-400"
                aria-label="Következő vélemény"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right — Testimonial Card */}
          <div className="relative">
            <div
              className="p-[1.5px] rounded-[2rem]"
              style={{ background: "linear-gradient(135deg, rgba(59,114,232,0.2) 0%, rgba(139,94,60,0.15) 100%)" }}
            >
              <div
                id={regionId}
                role="tabpanel"
                aria-live="polite"
                aria-atomic="true"
                aria-label={`Vélemény: ${testimonials[active].name}`}
                className="rounded-[calc(2rem-1.5px)] p-8 md:p-10"
                style={{ background: "rgba(13,30,56,0.7)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)" }}
              >
                <div
                  className="font-black text-blue-electric/20 leading-none mb-4"
                  style={{ fontFamily: "var(--font-poppins)", fontSize: "8rem", lineHeight: 0.7 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <figure>
                      <blockquote id={quoteId} className="text-off-white/80 text-lg md:text-xl font-bold leading-relaxed mb-8">
                        <p>{testimonials[active].quote}</p>
                      </blockquote>
                      <figcaption className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "linear-gradient(135deg, rgba(59,114,232,0.3), rgba(139,94,60,0.3))", border: "1px solid rgba(245,240,235,0.1)" }}
                          aria-hidden="true"
                        >
                          <span className="text-off-white/80 text-xs font-black tracking-wider">
                            {testimonials[active].initials}
                          </span>
                        </div>
                        <div>
                          <div className="text-off-white font-black text-sm">{testimonials[active].name}</div>
                          <div className="text-brown-light text-[11px] font-bold mt-0.5">{testimonials[active].role}</div>
                        </div>
                      </figcaption>
                    </figure>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full pointer-events-none" aria-hidden="true"
              style={{ background: "radial-gradient(circle, rgba(59,114,232,0.2) 0%, transparent 70%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
