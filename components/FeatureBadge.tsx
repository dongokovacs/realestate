"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5L7 1Z" stroke="#3ECF8E" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Supabase Live Database",
    desc: "3 tábla, RLS policy, anon INSERT — valós idejű adatmentés",
    accent: "#3ECF8E",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M7 1V13M1 4L13 10M13 4L1 10" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.4"/>
      </svg>
    ),
    label: "Vercel-ready Deploy",
    desc: ".env.production commitolva, next build tiszta — egy kattintás a deploy",
    accent: "#ffffff",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="1" width="12" height="12" rx="2" stroke="#3B72E8" strokeWidth="1.2"/>
        <path d="M4 7L6 9L10 5" stroke="#3B72E8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Next.js 14 App Router",
    desc: "Server Actions, SSR, next/image, next/font — production-grade setup",
    accent: "#3B72E8",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="#C49A72" strokeWidth="1.2"/>
        <path d="M7 4V7.5L9 9" stroke="#C49A72" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Framer Motion animációk",
    desc: "Parallax, stagger, spring physics, AnimatePresence modal átmenetek",
    accent: "#C49A72",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 11L5 8L7 10L10 6L12 8" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="1" y="1" width="12" height="12" rx="1.5" stroke="#a78bfa" strokeWidth="1.2"/>
      </svg>
    ),
    label: "TypeScript — 0 hiba",
    desc: "Szigorú típusok minden komponensben, props-okon és action return-ökön",
    accent: "#a78bfa",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1 3.5H13M1 7H13M1 10.5H7" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Reszponzív design",
    desc: "Mobile-first Tailwind, min-h-[100dvh], iOS Safari biztonságos layout",
    accent: "#38bdf8",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1C3.686 1 1 3.686 1 7s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" stroke="#f472b6" strokeWidth="1.2"/>
        <path d="M4.5 7.5C4.5 6.119 5.619 5 7 5s2.5 1.119 2.5 2.5" stroke="#f472b6" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="7" cy="9" r="0.75" fill="#f472b6"/>
      </svg>
    ),
    label: "Akadálymentes (a11y)",
    desc: "ARIA label-ek, heading hierarchia, keyboard navigáció, focus-ring",
    accent: "#f472b6",
  },
];

export default function FeatureBadge() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-80"
          >
            {/* Double-bezel card */}
            <div
              className="p-[1.5px] rounded-[1.5rem]"
              style={{
                background: "linear-gradient(135deg, rgba(59,114,232,0.35) 0%, rgba(139,94,60,0.2) 100%)",
              }}
            >
              <div
                className="rounded-[calc(1.5rem-1.5px)] overflow-hidden"
                style={{
                  background: "rgba(10,22,40,0.97)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.07), 0 24px 80px rgba(0,0,0,0.7)",
                }}
              >
                {/* Header */}
                <div className="px-5 pt-5 pb-3 border-b border-white/[0.06]">
                  <div className="text-[9px] uppercase tracking-[0.22em] text-brown font-black mb-1">
                    Tech Stack & Features
                  </div>
                  <div
                    className="font-black text-off-white"
                    style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", letterSpacing: "-0.02em" }}
                  >
                    Mit tud ez az oldal?
                  </div>
                </div>

                {/* Feature list */}
                <ul className="px-4 py-3 flex flex-col gap-0.5 max-h-[420px] overflow-y-auto">
                  {features.map((f, i) => (
                    <motion.li
                      key={f.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3 px-2 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors duration-200 cursor-default"
                    >
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5"
                        style={{ background: `${f.accent}14`, border: `1px solid ${f.accent}30` }}
                      >
                        {f.icon}
                      </div>
                      <div>
                        <div className="text-off-white font-black text-[12px] leading-tight mb-0.5">
                          {f.label}
                        </div>
                        <div className="text-off-white/40 font-bold text-[11px] leading-relaxed">
                          {f.desc}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="px-5 py-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-off-white/25 text-[10px] font-bold">haven-realestate</span>
                  <a
                    href="https://github.com/dongokovacs/realestate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[10px] font-black text-blue-electric/70 hover:text-blue-electric transition-colors duration-200 uppercase tracking-[0.12em]"
                  >
                    GitHub
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing trigger button */}
      <div className="relative">
        {/* Pulse rings */}
        {!open && (
          <>
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: "rgba(59,114,232,0.25)", animationDuration: "1.8s" }}
            />
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: "rgba(59,114,232,0.12)", animationDuration: "1.8s", animationDelay: "0.4s" }}
            />
          </>
        )}

        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center gap-2 font-black text-[11px] uppercase tracking-[0.15em] text-white px-5 py-3 rounded-full"
          style={{
            background: open
              ? "linear-gradient(135deg, #1A3A6B, #2E5FBF)"
              : "linear-gradient(135deg, #2E5FBF, #3B72E8)",
            boxShadow: open
              ? "0 4px 24px rgba(59,114,232,0.3)"
              : "0 4px 32px rgba(59,114,232,0.45)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
          aria-label={open ? "Bezárás" : "Funkciók megtekintése"}
          aria-expanded={open}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </motion.span>
          {open ? "Bezárás" : "Features"}
        </motion.button>
      </div>
    </div>
  );
}
