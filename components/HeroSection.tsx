"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const stats = [
  { value: "1,200+", label: "Properties" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "14 Yrs", label: "Of Excellence" },
];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section
      ref={containerRef}
      aria-label="Főoldal bemutató"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-navy"
    >
      {/* Background Grid Lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(245,240,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,235,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Diagonal Split — right side image (decorative) */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[55%] md:w-[45%] h-full"
        style={{ y: imageY }}
      >
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(90deg, #0A1628 0%, rgba(10,22,40,0.5) 40%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "rgba(26,58,107,0.35)",
            mixBlendMode: "multiply",
          }}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85"
            alt="Luxury clifftop residence with ocean views"
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="(max-width: 768px) 55vw, 45vw"
          />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 pt-32 pb-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[700px]"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-brown/30 bg-brown/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.22em] text-brown-light font-black">
              <span className="w-1 h-1 rounded-full bg-brown-light animate-pulse" aria-hidden="true" />
              Luxury Real Estate Since 2010
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className="heading-display mb-8">
            <span
              className="block text-off-white"
              style={{ fontSize: "clamp(3.5rem,9.5vw,8.5rem)" }}
            >
              FIND YOUR
            </span>
            <span
              className="block"
              style={{ fontSize: "clamp(3.5rem,9.5vw,8.5rem)", color: "var(--color-brown)" }}
            >
              PERFECT
            </span>
            <span
              className="block text-off-white"
              style={{ fontSize: "clamp(3.5rem,9.5vw,8.5rem)" }}
            >
              SPACE.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-off-white/60 text-base md:text-lg font-bold max-w-md mb-12 leading-relaxed"
          >
            Curated luxury properties in the world&apos;s most coveted addresses. Extraordinary homes for extraordinary lives.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
            <a
              href="#properties"
              className="group flex items-center gap-3 bg-blue-electric text-white font-black text-[11px] uppercase tracking-[0.15em] px-7 py-4 rounded-full transition-all duration-500 hover:bg-blue-light hover:shadow-glow-blue active:scale-[0.98]"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Explore Properties
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>

            <a
              href="#about"
              className="group flex items-center gap-3 border border-off-white/20 text-off-white font-black text-[11px] uppercase tracking-[0.15em] px-7 py-4 rounded-full transition-all duration-500 hover:border-off-white/50 hover:bg-white/5 active:scale-[0.98]"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              <span className="w-6 h-6 rounded-full border border-off-white/20 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <polygon points="3.5,2 8,5 3.5,8" />
                </svg>
              </span>
              Watch Film
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator — decorative */}
        <motion.div
          aria-hidden="true"
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="relative w-[1px] h-14 bg-off-white/10 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-brown-light"
              animate={{ y: ["0%", "100%"], height: ["0%", "100%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-off-white/40 font-black">Scroll</span>
        </motion.div>
      </div>

      {/* Stats Strip */}
      <motion.div
        className="relative z-20 border-t border-off-white/[0.06]"
        style={{ background: "rgba(10,22,40,0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <dl className="flex items-stretch divide-x divide-off-white/[0.06]">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex-1 py-5 md:py-6 px-4 md:px-8 first:pl-0 last:pr-0"
              >
                <dd
                  className="text-2xl md:text-3xl font-black text-blue-electric leading-none"
                  style={{ fontFamily: "var(--font-poppins)", letterSpacing: "-0.03em" }}
                >
                  {stat.value}
                </dd>
                <dt className="mt-1 text-[10px] uppercase tracking-[0.15em] text-off-white/40 font-bold">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
