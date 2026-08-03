const paths = [
  {
    label: "Nonprofits",
    body: "Tell us what's slowing your organization down. If software is the right answer, we'll scope it with you at no cost.",
  },
  {
    label: "Sponsors",
    body: "Sponsors cover the things a student club can't: hosting, design tools, and food for the events that keep the team together.",
  },
  {
    label: "Everyone else",
    body: "Students, press, other chapters — if you have a question about Blueprint, this is the address to use.",
  },
];

export default function ContactOptions() {
  return (
    <section className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {paths.map((path) => (
            <div
              key={path.label}
              className="rounded-2xl border border-neutral-200 p-7"
            >
              <h3 className="font-heading text-xl font-bold text-primary">
                {path.label}
              </h3>
              <p className="mt-3 leading-relaxed text-ink">{path.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-primary p-10 text-white sm:p-14">
          <a
            href="mailto:mcmasterblueprint@gmail.com"
            className="inline-block font-heading text-2xl font-bold sm:text-3xl"
          >
            mcmasterblueprint@gmail.com
          </a>
          <p className="mt-4 max-w-md leading-relaxed text-white/85">
            We read everything that comes in and reply within a few days.
            Looking to join a project team instead? Applications live on the{" "}
            <a href="/join" className="underline underline-offset-2">
              join page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
