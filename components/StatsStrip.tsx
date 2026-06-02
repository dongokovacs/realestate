"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 1200, suffix: "+", label: "Properties Sold", prefix: "" },
  { value: 2.4, suffix: "B", label: "Total Sales Volume", prefix: "$" },
  { value: 98, suffix: "%", label: "Client Satisfaction", prefix: "" },
  { value: 14, suffix: "", label: "Years of Excellence", prefix: "" },
];

function Counter({ value, prefix, suffix, started }: { value: number; prefix: string; suffix: string; started: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(value, increment * step);
      setDisplay(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, value]);

  const formatted =
    value < 10 && suffix !== "%"
      ? display.toFixed(1)
      : Math.round(display).toLocaleString();

  return (
    <span>
      {prefix}{formatted}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-navy py-28 md:py-36 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,114,232,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Horizontal lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-electric/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-electric/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-brown font-black mb-4">
            <div className="w-5 h-px bg-brown" />
            By The Numbers
            <div className="w-5 h-px bg-brown" />
          </span>
          <h2
            className="heading-display text-off-white mt-3"
            style={{ fontSize: "clamp(2rem,5vw,4.5rem)" }}
          >
            A LEGACY OF
            <br />
            <span className="text-blue-electric">EXCELLENCE</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Double bezel card */}
              <div
                className="p-[1.5px] rounded-[1.5rem]"
                style={{ background: "linear-gradient(135deg, rgba(59,114,232,0.2) 0%, rgba(139,94,60,0.15) 100%)" }}
              >
                <div
                  className="rounded-[calc(1.5rem-1.5px)] p-6 md:p-8 text-center"
                  style={{ background: "rgba(13,30,56,0.8)", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)" }}
                >
                  <dd
                    className="font-black text-blue-electric mb-2"
                    aria-label={`${stat.prefix}${stat.value}${stat.suffix}`}
                    style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(2.5rem,5vw,5rem)", lineHeight: 1, letterSpacing: "-0.04em" }}
                  >
                    <span aria-hidden="true">
                      <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} started={inView} />
                    </span>
                  </dd>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-off-white/50 font-black">
                    {stat.label}
                  </dt>
                </div>
              </div>
            </motion.div>
          ))}
        </dl>

        {/* Mission Statement */}
        <motion.div
          className="mt-20 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-off-white/50 text-lg md:text-xl font-bold leading-relaxed">
            Haven was founded on the belief that finding an extraordinary home should be an extraordinary experience.
            We combine deep market expertise with genuine personal care to guide our clients from discovery to keys in hand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
