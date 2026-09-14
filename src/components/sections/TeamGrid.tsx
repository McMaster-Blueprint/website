import Image from "next/image";
import LinkedinIcon from "@/components/icons/linkedin-icon";

/**
 * ---------------------------------------------------------------------------
 * HOW THIS PAGE SCALES
 *   Members are grouped. Today it's just the executive team. When project
 *   teams form, add another entry to `groups` with its own members array --
 *   the layout repeats per group. Keep empty groups OUT until they have people
 *   in them, so the live page never shows a bare "coming soon" section.
 *
 * TO ADD A PHOTO
 *   1. Drop a square image in /public/team/  (e.g. /public/team/aneek-mukherjee.jpg)
 *   2. Set photo: "/team/aneek-mukherjee.jpg" on that member
 *   Anyone left photo: null renders an initials tile, so the grid never breaks.
 *   Do NOT point photo at the club logo -- it stretches to a square and looks
 *   broken; use null until you have a real headshot.
 *
 * Emails from the signup form are deliberately NOT rendered -- several are
 * personal addresses. Route contact through /contact instead.
 * ---------------------------------------------------------------------------
 */

type Member = {
  name: string;
  role: string;
  program: string | null;
  year: string | null;
  linkedin: string | null;
  photo: string | null;
};

type Group = {
  id: string;
  label: string;
  members: Member[];
  /** Renders dashed "open role" cards after the members. */
  openRoles?: string[];
};

const groups: Group[] = [
  {
    id: "exec",
    label: "Executive team",
    members: [
      {
        name: "Oscar Zhao",
        role: "Co-President",
        program: "Software Engineering",
        year: "Second Year",
        linkedin: "https://www.linkedin.com/in/zhaooscar/",
        photo: null,
      },
      {
        name: "Parth Narkhede",
        role: "Co-President",
        program: "Math & Stats",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/parth-narkhede-b2a684260/",
        photo: null,
      },
      {
        name: "Aneek Mukherjee",
        role: "VP Projects",
        program: "Computer Science",
        year: "Second Year",
        linkedin: "https://www.linkedin.com/in/aneek-mukherjee-/",
        photo: "/team/aneek-mukherjee.jpg",
      },
      {
        name: "Ian Yeh",
        role: "VP Technology",
        program: "Software Engineering",
        year: "Second Year",
        linkedin: "https://www.linkedin.com/in/-ianyeh/",
        photo: "/team/ian-yeh.jpg",
      },
      {
        name: "Osman Raza",
        role: "VP Technology",
        program: "Computer Science",
        year: "Second Year",
        linkedin: "https://www.linkedin.com/in/osmanraza/",
        photo: "/team/osman-raza.jpg",
      },
      {
        name: "Cate Lin",
        role: "VP Design",
        program: "Honours Biology & PNB",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/cate-l-088768367",
        photo: "/team/cate-lin.jpg",
      },
      {
        name: "Mikael Gomez",
        role: "VP Design",
        program: "Computer Science",
        year: "Second Year",
        linkedin: "https://www.linkedin.com/in/mikael-a-gomez",
        photo: "/team/mikael-gomez.jpg",
      },
      {
        name: "Jun Nur Mustaqeen",
        role: "VP External",
        program: "Computer Engineering",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/jun-nur-mustaqeem/",
        photo: null,
      },
      {
        name: "Ritisha Perumalla",
        role: "VP External",
        program: "Software Engineering",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/ritisha-perumalla",
        photo: "/team/ritisha-perumalla.jpg",
      },
    ],
    openRoles: ["VP Operations", "VP Internal"],
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function MemberCard({ member }: { member: Member }) {
  return (
    <li className="group rounded-xl border border-neutral-200 p-3 transition hover:border-primary/40 hover:shadow-sm">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-primary/5">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 150px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border border-dashed border-primary/25">
            <span
              aria-hidden
              className="font-heading text-xl font-bold text-primary/35"
            >
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-2.5 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate font-heading text-sm font-bold leading-tight text-primary">
            {member.name}
          </h3>
          <p className="mt-0.5 text-xs leading-tight text-neutral-500">
            {member.role}
          </p>
        </div>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="mt-0.5 inline-flex size-6 flex-none items-center justify-center rounded-md text-neutral-400 transition hover:bg-primary hover:text-white"
          >
            <LinkedinIcon className="size-3.5" />
          </a>
        )}
      </div>
    </li>
  );
}

function OpenSeatCard({ role }: { role: string }) {
  return (
    <li className="flex flex-col rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-3">
      <div className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-neutral-300">
        <span
          aria-hidden
          className="font-heading text-xl font-bold text-neutral-300"
        >
          ?
        </span>
      </div>
      <h3 className="mt-2.5 font-heading text-sm font-bold leading-tight text-neutral-400">
        {role}
      </h3>
      <p className="mt-0.5 text-xs leading-tight text-neutral-400">
        Currently Recruiting
      </p>
    </li>
  );
}

export default function TeamGrid() {
  return (
    <section id="team" className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl space-y-16">
        {groups.map((group) => {
          const openRoles = group.openRoles ?? [];

          return (
            <div key={group.id}>
              <div className="flex items-baseline justify-between gap-4 border-b border-neutral-200 pb-4">
                <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  {group.label}
                </h2>
                {group.members.length > 0 && (
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-400">
                    {group.members.length}{" "}
                    {group.members.length === 1 ? "member" : "members"}
                  </span>
                )}
              </div>

              <ul className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                {group.members.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
                {openRoles.map((role) => (
                  <OpenSeatCard key={role} role={role} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
