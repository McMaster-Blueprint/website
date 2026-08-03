export default function TeamHero() {
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
        <h1 className="max-w-3xl font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
          Meet the{" "}
          <span className="inline-block rounded-lg bg-maroon px-4 py-1">
            team
          </span>
        </h1>

        <p className="mt-7 max-w-xl font-heading text-lg leading-relaxed text-white/90 sm:text-xl">
          Blueprint runs on students. An executive team keeps the chapter
          moving, and a project team forms around each nonprofit partner we take
          on. New people join every term.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/join"
            className="rounded-full bg-white px-8 py-3 font-heading font-semibold text-primary transition hover:bg-white/90"
          >
            Join the team
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