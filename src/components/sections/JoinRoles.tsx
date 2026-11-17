import Reveal from "@/components/ui/Reveal";
import { APPLICATION_FORM, applicationsOpen, closedMessage } from "./apply-config";

export default function JoinRoles() {
  if (!applicationsOpen) {
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
          <div className="rounded-2xl bg-primary p-10 text-white sm:p-16">
            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.15] sm:text-4xl">
              We&apos;re hiring team leads, designers and developers.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/85">
              Work with a small team on real software a Hamilton nonprofit will
              actually use. No prior nonprofit experience needed.
            </p>
            <a
              href={APPLICATION_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-1.5 rounded-full bg-white px-8 py-3 font-heading font-semibold text-primary transition hover:bg-white/90"
            >
              Apply <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
