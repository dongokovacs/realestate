"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";

const locations = ["Any Location", "Los Angeles", "New York", "Miami", "Aspen", "Seattle"];
const propertyTypes = ["Any Type", "Villa", "Penthouse", "Estate", "Townhouse", "Condo"];
const priceRanges = ["Any Price", "$1M – $5M", "$5M – $10M", "$10M – $20M", "$20M+"];

export default function SearchBar() {
  const [location, setLocation] = useState("Any Location");
  const [type, setType] = useState("Any Type");
  const [price, setPrice] = useState("Any Price");
  const locationId = useId();
  const typeId = useId();
  const priceId = useId();

  const selectClass = "w-full bg-transparent text-off-white text-sm font-bold outline-none cursor-pointer appearance-none";
  const labelClass = "block text-[9px] uppercase tracking-[0.18em] text-brown-light/80 mb-1 font-black";
  const wrapClass = "rounded-xl px-4 py-3 bg-white/[0.03] border border-white/[0.06] hover:border-blue-electric/40 transition-all duration-300";

  return (
    <motion.div
      className="relative z-30 max-w-5xl mx-auto -mt-8 px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="p-[3px] rounded-[1.5rem]"
        style={{ background: "linear-gradient(135deg, rgba(59,114,232,0.3) 0%, rgba(139,94,60,0.2) 100%)" }}
      >
        <div
          className="rounded-[calc(1.5rem-3px)] p-4 md:p-2"
          style={{ background: "rgba(10,22,40,0.96)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "inset 0 1px 1px rgba(245,240,235,0.06), 0 24px 80px rgba(0,0,0,0.6)" }}
        >
          <form
            role="search"
            aria-label="Ingatlan keresés"
            className="flex flex-col md:flex-row gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Location */}
            <div className="flex-1">
              <div className={wrapClass}>
                <label htmlFor={locationId} className={labelClass}>Helyszín</label>
                <select id={locationId} name="location" value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass}>
                  {locations.map((l) => <option key={l} value={l} className="bg-navy text-off-white">{l}</option>)}
                </select>
              </div>
            </div>

            <div className="hidden md:block w-px self-stretch bg-white/[0.06] my-2" aria-hidden="true" />

            {/* Property Type */}
            <div className="flex-1">
              <div className={wrapClass}>
                <label htmlFor={typeId} className={labelClass}>Ingatlan típusa</label>
                <select id={typeId} name="type" value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
                  {propertyTypes.map((t) => <option key={t} value={t} className="bg-navy text-off-white">{t}</option>)}
                </select>
              </div>
            </div>

            <div className="hidden md:block w-px self-stretch bg-white/[0.06] my-2" aria-hidden="true" />

            {/* Price Range */}
            <div className="flex-1">
              <div className={wrapClass}>
                <label htmlFor={priceId} className={labelClass}>Árkategória</label>
                <select id={priceId} name="price" value={price} onChange={(e) => setPrice(e.target.value)} className={selectClass}>
                  {priceRanges.map((p) => <option key={p} value={p} className="bg-navy text-off-white">{p}</option>)}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-blue-electric hover:bg-blue-light text-white font-black text-[11px] uppercase tracking-[0.18em] px-8 py-4 rounded-xl transition-all duration-500 active:scale-[0.98] hover:shadow-glow-blue whitespace-nowrap"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Keresés
              <span aria-hidden="true" className="w-6 h-6 rounded-lg bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="4.5" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6.5 6.5L8.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
