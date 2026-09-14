/*
import Image from "next/image";

const projects = [
  {
    name: "Project 1",
    partner: "Regional Food Bank Network",
    body: "A volunteer scheduling platform that replaced a shared spreadsheet, so coordinators can fill shifts in minutes instead of chasing texts.",
    image: "/projects/atlas.jpg",
  },
  {
    name: "Project 2",
    partner: "Youth Outreach Nonprofit",
    body: "A case management tool that lets outreach workers log visits from the field and hand off cases without losing context.",
    image: "/projects/beacon.jpg",
  },
  {
    name: "Project 3",
    partner: "Small Charity Coalition",
    body: "A donor and grant tracking dashboard built for organizations too small to justify a paid CRM.",
    image: "/projects/compass.jpg",
  },
];
*/

export default function ProjectsGrid() {
  return (
    <section className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/*
        <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
          Built for partners, not for portfolios.
        </h2>
        */}

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
            Coming soon.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink">
            McMaster Blueprint is just starting out, so our project selection
            will be finalized closer to the end of 2026. If you&apos;re
            interested in joining a project team, we&apos;d love to hear from
            you.
          </p>
          <a
            href="/join"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-3 font-heading font-semibold text-white transition hover:bg-primary/90"
          >
            Join the team
          </a>
        </div>

        {/* <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 font-heading">
                <h3 className="text-xl font-bold text-primary">
                  {project.partner}
                </h3>
                <span className="mt-1 text-sm text-neutral-500">
                  {project.name}
                </span>
                <p className="mt-3 flex-1 leading-relaxed text-ink">
                  {project.body}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
