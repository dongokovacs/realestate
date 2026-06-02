"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTourBooking } from "./TourBookingProvider";
import { useFocusTrap } from "@/lib/useFocusTrap";

const navLinks = [
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openTourModal } = useTourBooking();
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(menuRef, menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="relative flex items-center justify-between max-w-7xl mx-auto px-6 md:px-8 py-3 rounded-full transition-all duration-700"
          style={{
            background: scrolled ? "rgba(10,22,40,0.92)" : "rgba(10,22,40,0.2)",
            backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
            boxShadow: scrolled
              ? "0 1px 0 rgba(245,240,235,0.06), 0 20px 60px rgba(0,0,0,0.4)"
              : "0 1px 0 rgba(245,240,235,0.04)",
            border: "1px solid rgba(245,240,235,0.06)",
          }}
        >
          {/* Logo */}
          <Link href="/" aria-label="HAVEN főoldal">
            <span
              className="text-2xl tracking-[0.2em] text-off-white font-black leading-none transition-colors duration-300 hover:text-brown-light"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              HAVEN.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Fő navigáció">
            <ul className="hidden md:flex items-center gap-8 list-none" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline text-[11px] uppercase tracking-[0.18em] text-off-white/70 hover:text-off-white transition-colors duration-300 font-bold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); openTourModal(); }}
              className="group relative flex items-center gap-2 bg-brown hover:bg-brown-light text-off-white text-[11px] uppercase tracking-[0.15em] font-black px-5 py-2.5 rounded-full transition-all duration-500"
              style={{ transition: "background 0.4s cubic-bezier(0.16,1,0.3,1)" }}
              aria-haspopup="dialog"
            >
              Book a Tour
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                  <path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true"
              className="block w-6 h-[1.5px] bg-off-white transition-all duration-400 origin-center"
              style={{ transform: menuOpen ? "rotate(45deg) translate(0, 4.5px)" : "none", transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)" }}
            />
            <span aria-hidden="true"
              className="block w-4 h-[1.5px] bg-off-white/60 ml-auto transition-all duration-400"
              style={{ opacity: menuOpen ? 0 : 1, transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)" }}
            />
            <span aria-hidden="true"
              className="block w-6 h-[1.5px] bg-off-white transition-all duration-400 origin-center"
              style={{ transform: menuOpen ? "rotate(-45deg) translate(0, -4.5px)" : "none", transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)" }}
            />
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigációs menü"
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ background: "rgba(10,22,40,0.97)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
          >
            <nav aria-label="Mobil navigáció">
              <ul className="flex flex-col gap-6 list-none" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.5, delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-5xl font-black text-off-white/80 hover:text-off-white uppercase tracking-[-0.03em] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); setMenuOpen(false); openTourModal(); }}
                    className="mt-4 inline-block bg-brown text-off-white text-[11px] uppercase tracking-[0.15em] font-black px-6 py-3 rounded-full"
                    aria-haspopup="dialog"
                  >
                    Book a Tour
                  </a>
                </motion.li>
              </ul>
            </nav>

            <motion.div
              className="absolute bottom-12 left-8 right-8 flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              aria-hidden="true"
            >
              <span className="text-off-white/30 text-xs tracking-widest uppercase">© 2024 Haven</span>
              <span className="text-brown-light text-xs tracking-widest uppercase">Luxury Real Estate</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
