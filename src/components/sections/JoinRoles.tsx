import Reveal from "@/components/ui/Reveal";
import { applicationsOpen, closedMessage, roles } from "./apply-config";

export default function JoinRoles() {
  const openRoles = roles.filter((role) => role.open);

  // Page closed, or nothing actually open -> single "check back" message.
  if (!applicationsOpen || openRoles.length === 0) {
    return (
      <section id="roles" className="px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-10 text-center sm:p-16">
              <p className="mx-auto max-w-md font-heading text-2xl font-bold leading-snug text-primary sm:text-3xl">
                {closedMessage}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="roles" className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
            We&apos;re hiring.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openRoles.map((role, i) => (
            <Reveal key={role.name} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-neutral-200 p-7">
                <h3 className="font-heading text-xl font-bold text-primary">
                  {role.name}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink">
                  {role.blurb}
                </p>
                <a
                  href={role.form}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full bg-primary px-6 py-3 font-heading text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Apply <span aria-hidden>&rarr;</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
