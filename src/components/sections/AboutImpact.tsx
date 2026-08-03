const stats = [
  { value: "[00]", label: "Students on the team" },
  { value: "[0]", label: "Nonprofit partners" },
  { value: "[0]", label: "Projects shipped" },
  { value: "$0", label: "Billed to a partner, ever" },
];

export default function AboutImpact() {
  return (
    <section id="impact" className="bg-neutral-50 px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
          What we&apos;ve built so far.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
          We measure ourselves by what a partner can do after we hand the work
          over, not by how much code we wrote getting there.
        </p>

        <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-neutral-200 bg-white p-7 transition hover:border-primary/40 hover:shadow-md"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-heading text-5xl font-bold leading-none text-primary">
                  {stat.value}
                </span>
                <span className="mt-4 block font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-neutral-500">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
