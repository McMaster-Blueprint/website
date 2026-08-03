const projects = [
  {
    name: "Project Atlas",
    partner: "Regional food bank network",
    status: "Live",
    body: "A volunteer scheduling platform that replaced a shared spreadsheet, so coordinators can fill shifts in minutes instead of chasing texts.",
  },
  {
    name: "Project Beacon",
    partner: "Youth outreach nonprofit",
    status: "Live",
    body: "A case management tool that lets outreach workers log visits from the field and hand off cases without losing context.",
  },
  {
    name: "Project Compass",
    partner: "Small charity coalition",
    status: "In progress",
    body: "A donor and grant tracking dashboard built for organizations too small to justify a paid CRM.",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
          Built for partners, not for portfolios.
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex h-full flex-col rounded-2xl border border-neutral-200 p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                  {project.partner}
                </span>
                <span
                  className={`flex-none rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${
                    project.status === "Live"
                      ? "bg-primary/10 text-primary"
                      : "bg-amber/10 text-amber"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-primary">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink">
                {project.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
