"use client";

import { useRef, useState, useTransition, useId } from "react";
import { subscribeNewsletter } from "@/app/actions";

export default function NewsletterForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const inputId = useId();
  const statusId = useId();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await subscribeNewsletter(formData);
      if (result.success) {
        setStatus("success");
        setMessage("Feliratkozás sikeres! Hamarosan megkapod az első levelünket.");
        formRef.current?.reset();
      } else {
        setStatus("error");
        setMessage(result.error ?? "Valami hiba történt.");
      }
    });
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="flex items-center gap-2 w-full md:w-auto">
        <div className="flex-1 md:flex-initial">
          <label htmlFor={inputId} className="sr-only">E-mail cím</label>
          <input
            id={inputId}
            type="email"
            name="email"
            placeholder="pelda@email.com"
            required
            aria-required="true"
            aria-describedby={statusId}
            aria-invalid={status === "error" ? "true" : undefined}
            disabled={isPending || status === "success"}
            className="w-full md:w-64 bg-white/[0.04] border border-white/[0.08] text-off-white placeholder-off-white/25 text-sm font-bold px-5 py-3 rounded-full outline-none transition-colors duration-300 disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={isPending || status === "success"}
          className="flex-shrink-0 bg-blue-electric hover:bg-blue-light text-white font-black text-[10px] uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          aria-busy={isPending}
        >
          {isPending ? "…" : status === "success" ? "Feliratkozva ✓" : "Feliratkozás"}
        </button>
      </div>

      {/* aria-live: képernyőolvasó felolvassa az állapotváltozást */}
      <p
        id={statusId}
        role={status === "error" ? "alert" : "status"}
        aria-live={status === "error" ? "assertive" : "polite"}
        className={`mt-2 text-xs font-bold min-h-[1rem] ${
          status === "success" ? "text-green-400" :
          status === "error"   ? "text-red-400"   : "sr-only"
        }`}
      >
        {message}
      </p>
    </form>
  );
}
