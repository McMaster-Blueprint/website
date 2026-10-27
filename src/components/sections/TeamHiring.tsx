export default function TeamHiring() {
  return (
    <section className="px-6 pb-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-primary px-8 py-14 text-white sm:px-14">
        <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.1] sm:text-4xl">
          We&apos;re hiring a VP Operations, a VP Internal, and developers!
        </h2>
        <p className="mt-4 max-w-lg leading-relaxed text-white/85">
          Project team applications for developers, designers and project
          managers open at the start of each term. No prior nonprofit
          experience needed.
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
  );
}
