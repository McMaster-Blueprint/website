type Portfolio = {
  name: string;
  body: string;
  hiring?: boolean;
};

const portfolios: Portfolio[] = [
  {
    name: "Projects",
    body: "Leads the projects and drives project success. Manages and advises the project leads, and runs the project selection process each term.",
  },
  {
    name: "Technology",
    body: "Owns Blueprint's technical resources. Manages the tools shared across project teams, maintains the website, and helps teams through any technical issues.",
  },
  {
    name: "Design",
    body: "Leads Blueprint's design culture and oversees each project's designer. Advises designers and spearheads design education across the club.",
  },
  {
    name: "External",
    body: "Cultivates Blueprint's brand and external image. Runs social media and corporate relations, and manages any events open to the public.",
  },
  {
    name: "Internal",
    body: "Cultivates Blueprint's culture and values. Runs internal social and professional activities, including the semesterly member retreat.",
    hiring: true,
  },
  {
    name: "Operations",
    body: "Manages internal logistics: finances, room bookings, attendance, and the day-to-day that keeps the chapter running.",
    hiring: true,
  },
];

export default function TeamPortfolios() {
  return (
    <>
      <section className="bg-neutral-50 px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-maroon">
            How the exec splits up
          </p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
            Six portfolios.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
            The co-presidents sit across all six rather than owning one, holding
            the chapter itself and the relationship with the wider Blueprint
            network.
          </p>

          <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolios.map((portfolio) => (
              <div
                key={portfolio.name}
                className="rounded-2xl border border-neutral-200 bg-white p-7"
              >
                <dt className="flex flex-wrap items-center gap-2 font-heading text-xl font-bold text-primary">
                  {portfolio.name}
                  {portfolio.hiring && (
                    <span className="rounded-full bg-maroon/10 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-maroon">
                      Hiring this fall
                    </span>
                  )}
                </dt>
                <dd className="mt-3 leading-relaxed text-ink">
                  {portfolio.body}
                </dd>
              </div>
            ))}
          </dl>

          {/* Developers sit below the exec, on the project teams the VPs run. */}
          <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-7 sm:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="flex flex-wrap items-center gap-2 font-heading text-xl font-bold text-primary">
                  Developers
                  <span className="rounded-full bg-maroon/10 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-maroon">
                    Applications open each term
                  </span>
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink">
                  Where most of the club is. Developers make up the project
                  teams that build the software for our nonprofit partners,
                  working under the Projects, Technology and Design VPs. New
                  developers join every term.
                </p>
              </div>
              <a
                href="/join"
                className="inline-flex flex-none items-center gap-1.5 rounded-full bg-primary px-6 py-3 font-heading font-semibold text-white transition hover:bg-primary/90"
              >
                Apply <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-primary px-8 py-14 text-white sm:px-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-light">
            Want in?
          </p>
          <h2 className="mt-4 max-w-xl font-heading text-3xl font-bold leading-[1.1] sm:text-4xl">
            We&apos;re hiring developers, project managers and more.
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-white/85">
            Project team applications open at the start of each term. Exec
            applications open in the spring. No prior nonprofit experience needed.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/join"
              className="rounded-full bg-white px-8 py-3 font-heading font-semibold text-primary transition hover:bg-white/90"
            >
              See open roles
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white/40 px-8 py-3 font-heading font-semibold text-white transition hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}