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
    <section id="projects" className="bg-primary px-6 py-24 text-white sm:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Our projects
        </h2>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-white/85">
          A running log of what our teams have shipped for community
          partners.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl bg-white p-8 text-primary transition hover:shadow-md"
            >
              <h3 className="font-heading text-2xl font-bold">
                {project.name}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-primary/80">
                {project.body}
              </p>
            </div>
          ))}
        </div>

        <a
          href="/projects"
          className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 font-heading text-sm font-semibold text-primary transition hover:bg-white/90"
        >
          View all projects <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
