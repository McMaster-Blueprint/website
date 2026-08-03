const projects = [
  {
    name: "Project Atlas",
    body: "A volunteer scheduling platform built for a regional food bank network.",
  },
  {
    name: "Project Beacon",
    body: "A case management tool for a youth outreach nonprofit.",
  },
  {
    name: "Project Compass",
    body: "A donor and grant tracking dashboard for small charities.",
  },
];

export default function HomeProjects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Our projects
        </h2>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink">
          A running log of what our teams have shipped for community
          partners.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="border-t-2 border-primary pt-5">
              <h3 className="font-heading text-xl font-bold text-primary">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {project.body}
              </p>
            </div>
          ))}
        </div>

        <a
          href="/projects"
          className="mt-10 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-primary transition hover:gap-2.5"
        >
          View all projects <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
