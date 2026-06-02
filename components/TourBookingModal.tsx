"use client";

import { useRef, useState, useTransition, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitTourBooking } from "@/app/actions";
import { useFocusTrap } from "@/lib/useFocusTrap";

interface TourBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TourBookingModal({ isOpen, onClose }: TourBookingModalProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const errorId = useId();

  useFocusTrap(dialogRef, isOpen);

  // Close on Escape, restore focus on close
  const triggerRef = useRef<Element | null>(null);
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
    } else {
      (triggerRef.current as HTMLElement)?.focus?.();
    }
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

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
    "w-full bg-white/[0.04] border border-white/[0.08] text-off-white placeholder-off-white/25 text-sm font-bold px-4 py-3 rounded-xl outline-none transition-colors duration-300";
  const labelClass = "block text-[10px] uppercase tracking-[0.15em] text-off-white/50 font-black mb-1";

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
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="presentation">
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="relative w-full max-w-lg p-[1.5px] rounded-[2rem]"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: "linear-gradient(135deg, rgba(59,114,232,0.3) 0%, rgba(139,94,60,0.2) 100%)" }}
            >
              <div
                className="rounded-[calc(2rem-1.5px)] p-8"
                style={{ background: "#0A1628", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.7)" }}
              >
                {/* Close */}
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-off-white/50 hover:text-off-white transition-all duration-300"
                  aria-label="Dialógusablak bezárása"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {status === "success" ? (
                  <div className="text-center py-6" role="status" aria-live="polite">
                    <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                        <path d="M4 11L9 16L18 6" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 id={titleId} className="heading-display text-off-white text-2xl mb-2">Tour Requested!</h2>
                    <p className="text-off-white/50 text-sm font-bold mb-6">
                      A Haven advisor will reach out within 24 hours to confirm your appointment.
                    </p>
                    <button
                      onClick={handleClose}
                      className="bg-blue-electric text-white font-black text-[11px] uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all duration-400 hover:bg-blue-light"
                    >
                      Bezárás
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-brown font-black">Schedule a Visit</span>
                      <h2 id={titleId} className="heading-display text-off-white mt-1" style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}>
                        BOOK A TOUR
                      </h2>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} noValidate>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <label htmlFor="tour-name" className={labelClass}>Teljes név <span aria-hidden="true">*</span></label>
                          <input
                            id="tour-name"
                            name="full_name"
                            type="text"
                            placeholder="Pl. Kovács János"
                            required
                            aria-required="true"
                            disabled={isPending}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="tour-email" className={labelClass}>E-mail <span aria-hidden="true">*</span></label>
                          <input
                            id="tour-email"
                            name="email"
                            type="email"
                            placeholder="pelda@email.com"
                            required
                            aria-required="true"
                            disabled={isPending}
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <label htmlFor="tour-phone" className={labelClass}>Telefon</label>
                          <input
                            id="tour-phone"
                            name="phone"
                            type="tel"
                            placeholder="+36 30 123 4567"
                            disabled={isPending}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="tour-date" className={labelClass}>Kívánt időpont</label>
                          <input
                            id="tour-date"
                            name="preferred_date"
                            type="date"
                            disabled={isPending}
                            className={inputClass}
                            style={{ colorScheme: "dark" }}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="tour-property" className={labelClass}>Érdeklődési ingatlan</label>
                        <input
                          id="tour-property"
                          name="property_interest"
                          type="text"
                          placeholder="pl. The Clifftop Residence"
                          disabled={isPending}
                          className={inputClass}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="tour-message" className={labelClass}>Üzenet</label>
                        <textarea
                          id="tour-message"
                          name="message"
                          placeholder="Egyéb kérések, kérdések…"
                          rows={3}
                          disabled={isPending}
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {status === "error" && (
                        <p id={errorId} role="alert" className="text-red-400 text-xs font-bold mb-3">
                          {errorMsg}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isPending}
                        className="group w-full flex items-center justify-center gap-2 bg-blue-electric hover:bg-blue-light text-white font-black text-[11px] uppercase tracking-[0.15em] px-6 py-4 rounded-xl transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                        aria-busy={isPending}
                      >
                        {isPending ? "Küldés…" : "Túra kérése"}
                        {!isPending && (
                          <span aria-hidden="true" className="w-6 h-6 rounded-lg bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
