import Link from "next/link";
import ExternalLinkIcon from "@/components/icons/external-link-icon";
import { projects, projectsYear } from "./projects-data";

export default function HomeProjects() {
  return (
    <section
      id="projects"
      className="bp-grid bg-blueprint px-6 py-24 text-white sm:px-12 lg:px-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary-light">
            {projectsYear}
          </p>
          <h2 className="mt-2 font-hand text-6xl leading-none sm:text-7xl">
            our projects
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/85">
            {`${projects.length} nonprofits, ${projects.length} teams. Here\u2019s who we\u2019re building for this year.`}
          </p>

          <Link
            href="/projects"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 font-heading font-semibold text-blueprint outline-none transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blueprint motion-reduce:hover:translate-y-0"
          >
            View all projects
            <span
              aria-hidden
              className="inline-flex size-9 items-center justify-center rounded-full bg-primary/10 transition duration-300 ease-out group-hover:bg-primary group-hover:text-white"
            >
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                &rarr;
              </span>
            </span>
          </Link>
        </div>

        <ul className="border-t border-white/20">
          {projects.map((project) => (
            <li key={project.partner} className="border-b border-white/20">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 py-6 outline-none transition-colors duration-200 hover:bg-white/5 focus-visible:bg-white/5 focus-visible:ring-2 focus-visible:ring-primary-light sm:px-4"
              >
                <span>
                  <span className="block font-heading text-xl font-semibold transition-colors duration-200 group-hover:text-primary-light sm:text-2xl">
                    {project.partner}
                  </span>
                  <span className="mt-1 block leading-relaxed text-white/85">
                    {project.builds.map((build) => build.name).join(" + ")}
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
                <span className="inline-flex size-11 flex-none items-center justify-center rounded-full bg-white/10 transition duration-200 group-hover:bg-white group-hover:text-blueprint">
                  <ExternalLinkIcon className="size-5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
