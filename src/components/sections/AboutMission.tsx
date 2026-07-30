export default function AboutMission() {
  return (
    <section id="mission" className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-maroon">
            Our mission
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
            Making technology
            <br className="hidden sm:block" /> useful to people
            <br className="hidden sm:block" /> doing good work.
          </h2>
        </div>

        <div>
          <p className="font-heading text-xl font-medium leading-snug text-ink sm:text-2xl">
            Blueprint exists to make technology accessible and useful to the
            people who build communities and look after public welfare.
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
            <p>
              Nonprofits run on thin margins. A booking system, a volunteer
              database, a website that works properly on a phone &mdash; the
              tools that would free up hours every week are usually the first
              things cut from the budget. Meanwhile there&apos;s a campus full of
              students who can build exactly that, and who are looking for real
              work to do.
            </p>
            <p>
              McMaster Blueprint puts those two things in the same room. We take
              on partners in Hamilton and the surrounding region, scope the work
              honestly, and build it over a term with designers, developers and a
              product manager. There&apos;s no invoice at the end and no strings
              on the code &mdash; the partner owns what we make.
            </p>
          </div>

          <div className="mt-10 rounded-lg border-l-4 border-maroon bg-neutral-50 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              Our roots
            </p>
            <p className="mt-3 text-lg leading-relaxed text-ink">
              Blueprint started at UC Berkeley and has grown into chapters across
              North America. McMaster joined the network in 2026 and follows the same five values every chapter shares.
            </p>
            <a
              href="https://calblueprint.org/chapters"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-heading font-semibold text-primary transition hover:gap-3"
            >
              See all Blueprint chapters <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
