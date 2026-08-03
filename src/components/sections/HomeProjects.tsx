import Image from "next/image";

const projects = [
  {
    name: "Project 1",
    partner: "Regional Food Bank Network",
    image: "/projects/atlas.jpg",
  },
  {
    name: "Project 2",
    partner: "Youth Outreach Nonprofit",
    image: "/projects/beacon.jpg",
  },
  {
    name: "Project 3",
    partner: "Small Charity Coalition",
    image: "/projects/compass.jpg",
  },
];

export default function HomeProjects() {
  const [big, ...small] = projects;

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

        <div className="mt-14 grid grid-cols-1 auto-rows-[16rem] gap-4 sm:h-[32rem] sm:auto-rows-auto sm:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl">
            <Image
              src={big.image}
              alt={big.name}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 font-heading">
              <span className="text-sm text-white/75">{big.partner}</span>
              <h3 className="text-2xl font-bold">{big.name}</h3>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            {small.map((project) => (
              <div
                key={project.name}
                className="group relative overflow-hidden rounded-2xl"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 640px) 25vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 font-heading">
                  <span className="text-xs text-white/75">
                    {project.partner}
                  </span>
                  <h3 className="text-lg font-bold">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
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
