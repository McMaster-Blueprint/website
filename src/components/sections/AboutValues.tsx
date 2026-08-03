const values = [
  {
    mark: "A",
    span: "lg:col-span-2",
    title: "Mission first",
    body: "The partner's outcome outranks our preferences. Success is what changes for them after we leave, not how interesting the stack was.",
  },
  {
    mark: "B",
    span: "lg:col-span-2",
    title: "Cherish each other",
    body: "We care about the people on the team as much as the causes. The friendships here outlast the projects, and that's the point.",
  },
  {
    mark: "C",
    span: "lg:col-span-2",
    title: "Always innovate",
    body: "Nothing is sacred, including our own process. If there's a better way to run a term or ship a feature, we'd rather find it than defend the old one.",
  },
  {
    mark: "D",
    span: "lg:col-span-3",
    title: "Perpetual growth",
    body: "Everyone teaches and everyone learns. You'll be handed work slightly beyond you, along with the people who will help you finish it.",
  },
  {
    mark: "E",
    span: "lg:col-span-3",
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
          The five.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
          Written first by Cal Blueprint and carried by every chapter since. They
          show up in real decisions, not just on this page.
        </p>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {values.map((value) => (
            <li
              key={value.mark}
              className={`rounded-2xl border border-white/25 bg-white/5 p-7 backdrop-blur-sm transition hover:border-white/50 hover:bg-white/10 ${value.span}`}
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-maroon font-mono text-sm font-semibold text-white">
                {value.mark}
              </span>
              <h3 className="mt-6 font-heading text-xl font-bold">
                {value.title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/85">{value.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
