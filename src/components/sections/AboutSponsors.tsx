export default function AboutSponsors() {
  return (
    <section
      id="sponsors"
      className="bg-neutral-50 px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
            Become a sponsor.
          </h2>
        </div>

        <div>
          <p className="max-w-xl text-lg leading-relaxed text-ink">
            We&apos;re a new chapter and don&apos;t have any sponsors yet.
            Funding would go toward hosting for the apps we hand over, design
            tools, and food for the meetings that keep a volunteer team going.
            If your company wants to be the first to back student engineers
            doing community work, we&apos;d like to talk.
          </p>

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
