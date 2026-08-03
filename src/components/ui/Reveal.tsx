"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades + rises its children in once, when they scroll into view.
 * Restrained: 12px travel, 600ms. Respects reduced-motion and never
 * hides content if IntersectionObserver is unavailable.
 *
 * IMPORTANT: the first render (server + client) is always the hidden state,
 * so server and client HTML match -- no hydration mismatch. Revealing, and
 * the reduced-motion / no-IO shortcuts, all happen in an effect after mount.
 *
 * `delay` (ms) lets a row of items stagger slightly.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      // Defer out of the effect body (rAF) so we don't setState synchronously
      // on mount; for these users it still appears immediately.
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(12px)",
        transition:
          "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}