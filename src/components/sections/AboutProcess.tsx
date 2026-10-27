const steps = [
  {
    title: "Scope it honestly",
    body: "We meet with the organization to understand their needs and agree on what we'll build.",
    icon: (
      <>
        <circle cx="10" cy="10" r="6" />
        <circle cx="24" cy="24" r="6" />
        <path d="M14 14l6 6" />
      </>
    ),
  },
  {
    title: "Build in the open",
    body: "Our team builds through the term and shares progress with the partner every two weeks.",
    icon: (
      <>
        <rect x="4" y="4" width="26" height="26" rx="3" />
        <path d="M4 13h26M13 13v17" />
      </>
    ),
  },
  {
    title: "Hand it off",
    body: "The partner gets the code, accounts and documentation, plus a walkthrough. We're always happy to help after.",
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
        <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
          How a project progresses.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
          Every project follows the same three steps, so our partners always
          know what to expect.
        </p>

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((item) => (
            <li
              key={item.title}
              className="group rounded-2xl border border-neutral-200 p-8 transition hover:border-primary/40 hover:shadow-md"
            >
              <svg
                aria-hidden
                viewBox="0 0 34 34"
                className="size-9 stroke-primary-light transition-colors group-hover:stroke-primary"
                fill="none"
                strokeWidth="1.5"
              >
                {item.icon}
              </svg>
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
