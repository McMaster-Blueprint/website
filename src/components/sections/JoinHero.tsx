import { applicationsOpen } from "./apply-config";

export default function JoinHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary to-primary-light px-6 pb-24 pt-36 text-white sm:px-12 sm:pt-40 lg:px-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.30) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.30) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: "112px 112px, 112px 112px, 16px 16px, 16px 16px",
          maskImage:
            "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 85%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <h1
          className="rise-in max-w-3xl font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          Build for{" "}
          <span className="inline-block rounded-lg bg-maroon px-4 py-1">
            good
          </span>
        </h1>

        <p
          className="rise-in mt-7 max-w-xl font-heading text-lg leading-relaxed text-white/90 sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          {applicationsOpen
            ? "We're a student team that builds free software for nonprofits in Hamilton. Find a role below and apply -- you don't have to be in tech to join."
            : "We're a student team that builds free software for nonprofits in Hamilton. Applications aren't open right now, but here's what we do in the meantime."}
        </p>

        <div
          className="rise-in mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#roles"
            className="rounded-full bg-white px-8 py-3 font-heading font-semibold text-primary transition hover:bg-white/90"
          >
            {applicationsOpen ? "See open roles" : "When we're hiring"}
          </a>
          <a
            href="/about"
            className="rounded-full border border-white/40 px-8 py-3 font-heading font-semibold text-white transition hover:bg-white/10"
          >
            What we do
          </a>
        </div>
      </div>
    </section>
  );
}
