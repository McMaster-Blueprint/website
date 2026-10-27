const values = [
  {
    mark: "01",
    title: "Mission first",
    body: "The partner's outcome outranks our preferences. Success is what changes for them after we leave, not how interesting the stack was.",
  },
  {
    mark: "02",
    title: "Cherish each other",
    body: "We care about the people on the team as much as the causes. The friendships here outlast the projects, and that's the point.",
  },
  {
    mark: "03",
    title: "Always innovate",
    body: "Nothing is sacred, including our own process. If there's a better way to run a term or ship a feature, we'd rather find it than defend the old one.",
  },
  {
    mark: "04",
    title: "Perpetual growth",
    body: "Everyone teaches and everyone learns. You'll be handed work slightly beyond you, along with the people who will help you finish it.",
  },
  {
    mark: "05",
    title: "Be humble",
    body: "Pro bono never means half-finished, and doing good work doesn't make us special. Anyone can do this, and we hope more people do.",
  },
];

export default function AboutValues() {
  return (
    <section
      id="values"
      className="relative overflow-hidden bg-primary px-6 py-24 text-white sm:px-12 lg:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.20) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.20) 1px, transparent 1px)`,
          backgroundSize: "16px 16px, 16px 16px",
          maskImage:
            "radial-gradient(100% 80% at 100% 0%, black 10%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.15] sm:text-4xl">
          We follow Blueprint&apos;s five values.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
          Written first by Cal Blueprint and carried by every chapter since. They
          show up in real decisions, not just on this page.
        </p>

        <ol className="mt-14 border-b border-white/30">
          {values.map((value) => (
            <li
              key={value.mark}
              className="group grid gap-3 border-t border-white/30 py-8 sm:grid-cols-[5rem_1fr_1.6fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-sm font-semibold text-white/60 transition group-hover:text-white">
                {value.mark}
              </span>
              <h3 className="font-heading text-2xl font-bold sm:text-3xl">
                {value.title}
              </h3>
              <p className="text-lg leading-relaxed text-white/85">
                {value.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
