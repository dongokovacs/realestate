"use client";

import { useRef, useState, useTransition } from "react";
import { subscribeNewsletter } from "@/app/actions";

export default function NewsletterForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await subscribeNewsletter(formData);
      if (result.success) {
        setStatus("success");
        setMessage("You're in! Expect curated listings in your inbox soon.");
        formRef.current?.reset();
      } else {
        setStatus("error");
        setMessage(result.error ?? "Something went wrong.");
      }
    });
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 w-full md:w-auto">
        <div className="flex-1 md:flex-initial">
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            disabled={isPending || status === "success"}
            className="w-full md:w-64 bg-white/[0.04] border border-white/[0.08] text-off-white placeholder-off-white/25 text-sm font-bold px-5 py-3 rounded-full outline-none focus:border-blue-electric/50 transition-colors duration-300 disabled:opacity-50"
            aria-label="Email address for newsletter"
          />
        </div>
        <button
          type="submit"
          disabled={isPending || status === "success"}
          className="flex-shrink-0 bg-blue-electric hover:bg-blue-light text-white font-black text-[10px] uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          aria-label="Subscribe to newsletter"
        >
          {isPending ? "..." : status === "success" ? "Subscribed ✓" : "Subscribe"}
        </button>
      </div>
      {message && (
        <p
          className={`mt-2 text-xs font-bold ${status === "success" ? "text-green-400" : "text-red-400"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
