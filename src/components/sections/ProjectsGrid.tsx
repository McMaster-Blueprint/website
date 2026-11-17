import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ExternalLinkIcon from "@/components/icons/external-link-icon";
import { findPartnerLogo, partnerInitials } from "./partner-logo";
import { projects, projectsYear } from "./projects-data";

// Each sheet sits at a slightly different angle, like paper dropped on a desk.
const tilts = [
  "lg:-rotate-[1.2deg]",
  "lg:rotate-[0.8deg]",
  "lg:-rotate-[0.6deg]",
  "lg:rotate-[1.1deg]",
  "lg:-rotate-[0.9deg]",
  "lg:rotate-[0.7deg]",
];

const sheet =
  "group relative isolate flex h-full flex-col transition duration-300 ease-out hover:-translate-y-1.5 hover:rotate-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

// The second sheet of paper peeking out from behind each card.
const backSheet =
  "absolute inset-0 -z-10 rotate-[2.5deg] rounded-md bg-white/80 shadow-md transition duration-300 ease-out group-hover:rotate-[4deg] motion-reduce:transition-none";

const paper =
  "bp-paper flex h-full flex-col rounded-md p-7 shadow-xl shadow-blueprint/25 sm:p-8";

function SheetHeader({ label }: { label: string }) {
  return (
    <div className="flex items-baseline justify-between border-b-2 border-primary/25 pb-3">
      <span aria-hidden className="font-heading text-lg font-bold">
        <span className="text-maroon">mac</span>
        <span className="text-primary">blueprint</span>
      </span>
      <span className="font-mono text-sm font-medium text-blueprint-light">
        {label}
      </span>
    </div>
  );
}

export default function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="bp-grid relative overflow-hidden bg-primary px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm font-medium uppercase tracking-[0.3em] text-white/85">
            {projectsYear} / {projects.length} partners
          </p>
          <h2 className="mt-2 font-hand text-6xl leading-none text-white sm:text-7xl">
            this year&apos;s projects
          </h2>
          <p className="mt-5 max-w-xl font-heading text-xl font-medium leading-relaxed text-white">
            Built for partners, not for portfolios. Each nonprofit gets
            software made around how they actually work, free of charge.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const headingId = `project-${project.slug}`;
            const logo = findPartnerLogo(project.slug);

            return (
              <li key={project.slug}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <article
                    aria-labelledby={headingId}
                    className={`${sheet} ${tilts[i % tilts.length]}`}
                  >
                    <span aria-hidden className={backSheet} />

                    <div
                      className={`${paper} has-[a:focus-visible]:ring-4 has-[a:focus-visible]:ring-white`}
                    >
                      <SheetHeader label={String(i + 1).padStart(2, "0")} />

                      <div className="mt-6 flex items-center gap-4">
                        <div className="relative flex size-20 flex-none items-center justify-center overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5">
                          {logo ? (
                            <Image
                              src={logo}
                              alt=""
                              fill
                              sizes="80px"
                              unoptimized={logo.endsWith(".svg")}
                              className="object-contain p-1.5"
                            />
                          ) : (
                            <span
                              aria-hidden
                              className="font-heading text-xl font-bold text-primary"
                            >
                              {partnerInitials(project.partner)}
                            </span>
                          )}
                        </div>
                        <h3
                          id={headingId}
                          className="font-hand text-4xl leading-[0.95] text-primary"
                        >
                          {project.partner}
                        </h3>
                      </div>

                      <p className="mt-4 font-mono text-sm font-medium text-blueprint-light">
                        {project.focus} / {project.location}
                      </p>

                      <h4 className="mt-6 font-heading text-xl font-bold text-primary">
                        About:
                      </h4>
                      <p className="mt-1.5 leading-relaxed text-ink">
                        {project.about}
                      </p>

                      <h4 className="mt-6 font-heading text-xl font-bold text-primary">
                        What we&apos;re building:
                      </h4>
                      <ul className="mt-1.5 flex-1 space-y-3">
                        {project.builds.map((build) => (
                          <li key={build.name} className="leading-relaxed text-ink">
                            <span className="font-semibold text-blueprint">
                              {build.name}.
                            </span>{" "}
                            {build.body}
                          </li>
                        ))}
                      </ul>

                      {/*
                        One link per sheet. The ::after overlay stretches it
                        over the whole sheet, so the full card is clickable
                        without nesting or duplicating links.
                      */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex min-h-11 items-center gap-2 self-start font-heading font-semibold text-blueprint outline-none transition-colors duration-200 after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
                      >
                        <span className="sr-only">
                          Visit {project.partner} at{" "}
                        </span>
                        <span aria-hidden>Visit</span>
                        <span className="underline decoration-primary-light decoration-2 underline-offset-4 transition-colors duration-200 group-hover:decoration-primary">
                          {project.domain}
                        </span>
                        <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 transition duration-200 group-hover:bg-primary group-hover:text-white">
                          <ExternalLinkIcon className="size-4" />
                        </span>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}

          {/* Last sheet: an open slot for the next partner. */}
          <li>
            <Reveal delay={(projects.length % 3) * 80} className="h-full">
              <div className={`${sheet} ${tilts[projects.length % tilts.length]}`}>
                <span aria-hidden className={backSheet} />

                <div
                  className={`${paper} has-[a:focus-visible]:ring-4 has-[a:focus-visible]:ring-white`}
                >
                  <SheetHeader label="Next" />

                  <div className="flex flex-1 flex-col justify-center py-10">
                    <h3 className="font-hand text-5xl leading-[0.95] text-primary">
                      your nonprofit here?
                    </h3>
                    <p className="mt-5 leading-relaxed text-ink">
                      If your organization has a problem that software could
                      fix, we&apos;d like to hear about it.
                    </p>
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex min-h-11 items-center gap-2 self-start font-heading font-semibold text-blueprint outline-none transition-colors duration-200 after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
                  >
                    <span className="underline decoration-primary-light decoration-2 underline-offset-4 transition-colors duration-200 group-hover:decoration-primary">
                      Bring us a problem
                    </span>
                    <span
                      aria-hidden
                      className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 transition duration-200 group-hover:translate-x-0.5 group-hover:bg-primary group-hover:text-white"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  );
}
