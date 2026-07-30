const slots = ["[SPONSOR LOGO]", "[SPONSOR LOGO]", "[SPONSOR LOGO]"];

export default function AboutSponsors() {
  return (
    <section
      id="sponsors"
      className="bg-neutral-50 px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-maroon">
            Our sponsors
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
            Thank you.
          </h2>
        </div>

        <div>
          <p className="max-w-xl text-lg leading-relaxed text-ink">
            Sponsors cover the things a student club can&apos;t: hosting, design
            tools, and food for the events that keep a volunteer team together.
            If your company wants to back student engineers doing community work,
            we&apos;d like to talk.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {slots.map((slot, i) => (
              <div
                key={i}
                className="flex min-h-28 items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 bg-white p-4"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                  {slot}
                </span>
              </div>
            ))}
          </div>

          <a
            href="mailto: mcmasterblueprint@gmail.com"
            className="mt-10 inline-block rounded-full bg-primary px-8 py-3 font-heading font-semibold text-white transition hover:bg-primary/90"
          >
            Become a sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
