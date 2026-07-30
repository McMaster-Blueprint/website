"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Team", href: "/team" },
  { label: "Apply", href: "/#apply" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Solid background once the page scrolls, so the white logo and menu button
  // stay legible over light sections.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      setOpen(false);
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
    <>
      {/*
        NOTE: the slide-out panel below is deliberately a SIBLING of <header>,
        not a child. This header uses backdrop-blur, and any element with a
        filter / backdrop-filter becomes the containing block for its
        position: fixed descendants -- nesting the panel here would clip it to
        the header's box instead of the viewport.
      */}
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 transition-[background-color,padding,box-shadow] duration-300 ${
          scrolled ? "bg-primary/95 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
        style={{
          paddingTop: `calc(${scrolled ? "0.75rem" : "1.5rem"} + env(safe-area-inset-top))`,
          paddingBottom: scrolled ? "0.75rem" : "1.5rem",
        }}
      >
        <Link href="/" aria-label="McMaster Blueprint home">
          <Image
            src="/logos/banner_negative.png"
            alt="McMaster Blueprint"
            width={175}
            height={40}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <button
          ref={buttonRef}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="site-menu"
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
      </header>

      <nav
        id="site-menu"
        ref={panelRef}
        aria-label="Site menu"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-40 flex w-full max-w-sm flex-col overflow-y-auto bg-primary/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div
          className="flex flex-col px-6"
          style={{
            paddingTop: "calc(5.5rem + env(safe-area-inset-top))",
            paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))",
          }}
        >
          {links.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              tabIndex={open ? 0 : -1}
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
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}