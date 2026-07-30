export default function AboutCTA() {
  return (
    <section className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-primary p-10 text-white">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-light">
            For students
          </p>
          <h3 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
            Join the next team.
          </h3>
          <p className="mt-3 max-w-sm leading-relaxed text-white/85">
            Applications open at the start of each term for developers, designers
            and product managers. No prior nonprofit experience needed.
          </p>
          <a
            href="/join"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-heading font-semibold text-primary transition hover:bg-white/90"
          >
            See open roles
          </a>
        </div>

        <div className="rounded-2xl bg-maroon p-10 text-white">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
            For nonprofits
          </p>
          <h3 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
            Bring us a problem.
          </h3>
          <p className="mt-3 max-w-sm leading-relaxed text-white/85">
            Tell us what&apos;s slowing your organization down. If software is
            the right answer, we&apos;ll scope it with you at no cost.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-heading font-semibold text-maroon transition hover:bg-white/90"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
