const steps = [
  {
    step: "01",
    title: "Scope it honestly",
    body: "We sit down with the organization and work out where software actually helps. If the answer is that it doesn't, we say so. Whatever we agree on gets written down before anyone opens an editor.",
    icon: (
      <>
        <circle cx="10" cy="10" r="6" />
        <circle cx="24" cy="24" r="6" />
        <path d="M14 14l6 6" />
      </>
    ),
  },
  {
    step: "02",
    title: "Build in the open",
    body: "Developers, designers and a product manager work through the term with the partner in the loop. They see progress every two weeks, which means they can change their minds while it's still cheap.",
    icon: (
      <>
        <rect x="4" y="4" width="26" height="26" rx="3" />
        <path d="M4 13h26M13 13v17" />
      </>
    ),
  },
  {
    step: "03",
    title: "Hand over the keys",
    body: "The partner gets the repository, the accounts, the documentation and a walkthrough. We stay reachable, but nothing we build should need us around to keep running.",
    icon: (
      <>
        <path d="M4 17h19" />
        <path d="M17 10l7 7-7 7" />
        <path d="M29 5v24" />
      </>
    ),
  },
];

export default function AboutProcess() {
  return (
    <section id="process" className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-maroon">
          How a term runs
        </p>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
          Scope, build, hand over.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
          Every project moves through the same three stages. It&apos;s the part
          that keeps pro-bono work from quietly turning into abandoned work.
        </p>

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((item) => (
            <li
              key={item.step}
              className="group rounded-2xl border border-neutral-200 p-8 transition hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-semibold text-primary">
                  {item.step}
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 34 34"
                  className="size-9 stroke-primary-light transition-colors group-hover:stroke-primary"
                  fill="none"
                  strokeWidth="1.5"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-ink">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
