export default function HomeInterest() {
  return (
    <section
      id="interest"
      className="bg-white px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Interested in working with us?
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div id="apply" className="rounded-2xl bg-primary p-10 text-white">
            <h3 className="font-heading text-2xl font-bold sm:text-3xl">
              Apply
            </h3>
            <p className="mt-3 max-w-sm leading-relaxed text-white/85">
              We recruit new designers, engineers, and project leads at the
              start of every semester.
            </p>
            <a
              href="/join"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-heading font-semibold text-primary transition hover:bg-white/90"
            >
              Apply now
            </a>
          </div>

          <div id="contact" className="rounded-2xl bg-primary p-10 text-white">
            <h3 className="font-heading text-2xl font-bold sm:text-3xl">
              Contact
            </h3>
            <p className="mt-3 max-w-sm leading-relaxed text-white/85">
              Nonprofits, sponsors, and curious students are all welcome to
              reach out.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-heading font-semibold text-primary transition hover:bg-white/90"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
