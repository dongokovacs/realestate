"use client";

import { useRef, useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitTourBooking } from "@/app/actions";

interface TourBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TourBookingModal({ isOpen, onClose }: TourBookingModalProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await submitTourBooking(formData);
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(result.error ?? "Something went wrong.");
      }
    });
  }

  function handleClose() {
    setStatus("idle");
    setErrorMsg("");
    formRef.current?.reset();
    onClose();
  }

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.08] text-off-white placeholder-off-white/25 text-sm font-bold px-4 py-3 rounded-xl outline-none focus:border-blue-electric/50 transition-colors duration-300";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-navy/80"
            style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full max-w-lg p-[1.5px] rounded-[2rem]"
              style={{
                background: "linear-gradient(135deg, rgba(59,114,232,0.3) 0%, rgba(139,94,60,0.2) 100%)",
              }}
            >
              <div
                className="rounded-[calc(2rem-1.5px)] p-8"
                style={{
                  background: "#0A1628",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.7)",
                }}
              >
                {/* Close */}
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-off-white/50 hover:text-off-white transition-all duration-300"
                  aria-label="Close modal"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {status === "success" ? (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M4 11L9 16L18 6" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="heading-display text-off-white text-2xl mb-2">Tour Requested!</h3>
                    <p className="text-off-white/50 text-sm font-bold mb-6">
                      A Haven advisor will reach out within 24 hours to confirm your appointment.
                    </p>
                    <button
                      onClick={handleClose}
                      className="bg-blue-electric text-white font-black text-[11px] uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all duration-400 hover:bg-blue-light"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-brown font-black">Schedule a Visit</span>
                      <h3 className="heading-display text-off-white mt-1" style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}>
                        BOOK A TOUR
                      </h3>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          name="full_name"
                          type="text"
                          placeholder="Full Name *"
                          required
                          disabled={isPending}
                          className={inputClass}
                          aria-label="Full name"
                        />
                        <input
                          name="email"
                          type="email"
                          placeholder="Email *"
                          required
                          disabled={isPending}
                          className={inputClass}
                          aria-label="Email address"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          name="phone"
                          type="tel"
                          placeholder="Phone"
                          disabled={isPending}
                          className={inputClass}
                          aria-label="Phone number"
                        />
                        <input
                          name="preferred_date"
                          type="date"
                          disabled={isPending}
                          className={inputClass}
                          style={{ colorScheme: "dark" }}
                          aria-label="Preferred date"
                        />
                      </div>
                      <input
                        name="property_interest"
                        type="text"
                        placeholder="Property of Interest (optional)"
                        disabled={isPending}
                        className={inputClass}
                        aria-label="Property of interest"
                      />
                      <textarea
                        name="message"
                        placeholder="Any specific requirements or questions?"
                        rows={3}
                        disabled={isPending}
                        className={`${inputClass} resize-none`}
                        aria-label="Message"
                      />

                      {status === "error" && (
                        <p className="text-red-400 text-xs font-bold">{errorMsg}</p>
                      )}

                      <button
                        type="submit"
                        disabled={isPending}
                        className="group flex items-center justify-center gap-2 bg-blue-electric hover:bg-blue-light text-white font-black text-[11px] uppercase tracking-[0.15em] px-6 py-4 rounded-xl transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                      >
                        {isPending ? "Submitting…" : "Request Tour"}
                        {!isPending && (
                          <span className="w-6 h-6 rounded-lg bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                              <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
