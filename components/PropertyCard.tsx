"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Property } from "@/lib/properties";

const tagStyles: Record<string, string> = {
  NEW: "bg-blue-electric/20 text-blue-electric border-blue-electric/30",
  EXCLUSIVE: "bg-brown/20 text-brown-light border-brown/30",
  FEATURED: "bg-off-white/10 text-off-white border-off-white/20",
  SOLD: "bg-red-900/20 text-red-300 border-red-700/30",
};

interface PropertyCardProps {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      {/* Outer shell — double bezel */}
      <div
        className="p-[2px] rounded-[1.75rem] transition-all duration-700"
        style={{
          background: "rgba(245,240,235,0.04)",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <motion.div
          className="relative rounded-[calc(1.75rem-2px)] overflow-hidden cursor-pointer"
          style={{
            background: "#0D1E38",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Image */}
          <div className="relative h-60 overflow-hidden">
            <Image
              src={property.image}
              alt={`${property.title} — ${property.location}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-108"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            />
            {/* Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
              style={{
                background: "linear-gradient(to top, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.2) 50%, transparent 100%)",
              }}
            />

            {/* Tag */}
            <div className="absolute top-4 left-4">
              <span
                className={`inline-block border text-[9px] uppercase tracking-[0.18em] font-black px-3 py-1 rounded-full ${tagStyles[property.tag]}`}
              >
                {property.tag}
              </span>
            </div>

            {/* Hover blue border glow */}
            <div
              className="absolute inset-0 rounded-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: "inset 0 0 0 1.5px rgba(59,114,232,0.5)",
              }}
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h3
              className="text-off-white font-black text-lg mb-1 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-poppins)", letterSpacing: "-0.02em" }}
            >
              {property.title}
            </h3>
            <div className="flex items-center gap-1.5 mb-4">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0">
                <path d="M5 1C3.34 1 2 2.34 2 4C2 6.5 5 9 5 9C5 9 8 6.5 8 4C8 2.34 6.66 1 5 1ZM5 5.25C4.31 5.25 3.75 4.69 3.75 4C3.75 3.31 4.31 2.75 5 2.75C5.69 2.75 6.25 3.31 6.25 4C6.25 4.69 5.69 5.25 5 5.25Z" fill="#C49A72"/>
              </svg>
              <span className="text-brown-light text-xs font-bold">{property.location}</span>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <div className="text-[9px] uppercase tracking-[0.15em] text-off-white/30 mb-0.5 font-bold">Asking Price</div>
                <div
                  className="text-blue-electric font-black text-xl leading-none"
                  style={{ fontFamily: "var(--font-poppins)", letterSpacing: "-0.03em" }}
                >
                  {property.price}
                </div>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-off-white/40 font-bold">
                <span>{property.beds} Beds</span>
                <span className="w-1 h-1 rounded-full bg-off-white/20" />
                <span>{property.baths} Baths</span>
                <span className="w-1 h-1 rounded-full bg-off-white/20" />
                <span>{property.sqft.toLocaleString()} ft²</span>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-between">
              <button
                className="group/btn flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-off-white/50 hover:text-off-white font-black transition-colors duration-300"
                aria-label={`View details for ${property.title}`}
              >
                View Details
                <span className="w-5 h-5 rounded-full border border-white/10 group-hover/btn:border-blue-electric/50 flex items-center justify-center transition-all duration-300">
                  <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                    <path d="M1 6L6 1M6 1H2.5M6 1V4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <button
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] hover:bg-brown/20 hover:border-brown/30 flex items-center justify-center transition-all duration-300"
                aria-label={`Save ${property.title}`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 10.5L1 5.5C0.5 5 0.5 4 1 3.5L2 2.5C2.5 2 3.5 2 4 2.5L6 4.5L8 2.5C8.5 2 9.5 2 10 2.5L11 3.5C11.5 4 11.5 5 11 5.5L6 10.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
