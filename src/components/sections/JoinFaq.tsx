"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "Do I need experience?",
    a: "No. Plenty of members join having never shipped anything. We care more that you're keen to learn and reliable to a team than about what's already on your resume.",
  },
  {
    q: "Do I have to be in computer science?",
    a: "Not at all. We have members from biology, engineering and beyond. Designers and product managers especially come from all over -- if you want to build for social good, there's a place for you.",
  },
  {
    q: "How much time does it take?",
    a: "Expect a few hours a week on your project, plus the occasional team meeting and social. It's real commitment, but it's built to fit around a full course load.",
  },
  {
    q: "What year can apply?",
    a: "Any year. First-years are welcome on project teams -- it's one of the better ways to get hands-on experience early.",
  },
  {
    q: "What if applications are closed?",
    a: "Join the general interest list. Applications only open a couple of times a year, and the list is the fastest way to hear the moment the next cycle starts.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary"
        >
          <span className="font-heading text-lg font-bold text-primary">
            {q}
          </span>
          <span
            aria-hidden
            className={`grid size-8 flex-none place-items-center rounded-full border border-primary/25 text-primary transition-transform duration-300 ${
              open ? "rotate-45 bg-primary text-white" : ""
            }`}
          >
            <svg
              viewBox="0 0 14 14"
              className="size-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M7 1v12M1 7h12" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 leading-relaxed text-ink">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function JoinFaq() {
  return (
    <section className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <span className="rounded-full bg-maroon px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white">
            FAQ
          </span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

        <h2 className="mt-6 max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
          Frequently asked questions.
        </h2>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <FaqItem q={faq.q} a={faq.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
