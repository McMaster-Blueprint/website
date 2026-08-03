export default function HomeInterest() {
  return (
    <section
      id="interest"
      className="bg-blueprint px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Interested in working with us?
        </h2>

        <div className="mt-14 grid grid-cols-1 divide-y divide-dashed divide-white/20 border-t border-dashed border-white/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <div id="apply" className="pb-10 pt-8 sm:pr-10 sm:pb-0">
            <h3 className="font-heading text-xl font-bold text-white">
              Apply
            </h3>
            <p className="mt-2 text-base leading-relaxed text-white/70">
              We recruit new designers, engineers, and project leads at the
              start of every semester.
            </p>
            <a
              href="/join"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-2.5 font-heading text-sm font-semibold text-blueprint transition hover:bg-white/90"
            >
              Apply now <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div id="contact" className="pt-8 sm:pl-10">
            <h3 className="font-heading text-xl font-bold text-white">
              Contact
            </h3>
            <p className="mt-2 text-base leading-relaxed text-white/70">
              Nonprofits, sponsors, and curious students are all welcome to
              reach out.
            </p>
            <a
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/40 px-6 py-2.5 font-heading text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get in touch <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
