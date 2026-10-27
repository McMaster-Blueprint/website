export default function AboutCTA() {
  return (
    <section id="team" className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-2xl bg-primary p-10 text-white sm:flex-row sm:items-center sm:p-14">
        <div>
          <h2 className="font-heading text-3xl font-bold leading-[1.15] sm:text-4xl">
            The team.
          </h2>
          <p className="mt-3 max-w-md text-lg leading-relaxed text-white/85">
            Meet the students running McMaster Blueprint this year.
          </p>
        </div>
        <a
          href="/team"
          className="group inline-flex flex-none items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 font-heading font-semibold text-primary shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
        >
          Meet the team
          <span
            aria-hidden
            className="inline-flex size-9 items-center justify-center rounded-full bg-primary/10 transition duration-300 ease-out group-hover:bg-primary group-hover:text-white"
          >
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
              &rarr;
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
