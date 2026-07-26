"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Apply", href: "#apply" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6"
      style={{ paddingTop: "calc(1.5rem + env(safe-area-inset-top))" }}
    >
      <Image
        src="/logos/banner_negative.png"
        alt="McMaster Blueprint"
        width={175}
        height={40}
        className="h-11 w-auto"
        priority
      />

      <nav ref={navRef}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
        >
          <span
            className={`h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>

        <div
          className={`fixed inset-y-0 right-0 z-40 flex w-full max-w-sm flex-col overflow-hidden bg-primary/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="flex flex-col px-6 pb-6"
            style={{
              paddingTop: "calc(5.5rem + env(safe-area-inset-top))",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${index * 40 + 60}ms` : "0ms",
                }}
                className={`group flex items-center justify-between border-b border-white/10 py-5 font-heading text-xl font-semibold text-white transition-all duration-300 last:border-b-0 hover:text-primary-light ${
                  open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
                }`}
              >
                {link.label}
                <span className="text-primary-light transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
