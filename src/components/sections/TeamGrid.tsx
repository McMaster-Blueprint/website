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
        photo: "/team/oscar-zhao.jpg",
      },
      {
        name: "Parth Narkhede",
        role: "Co-President",
        program: "Math & Stats",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/parth-narkhede-b2a684260/",
        photo: "/team/parth-narkhede.jpg",
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
        name: "Ritisha Perumalla",
        role: "VP External",
        program: "Software Engineering",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/ritisha-perumalla",
        photo: "/team/ritisha-perumalla.jpg",
      },
    ],
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
    <li className="group">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-primary/5 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-primary/20">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span
              aria-hidden
              className="font-heading text-3xl font-bold text-primary/35"
            >
              {initials(member.name)}
            </span>
          </div>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="absolute bottom-2.5 right-2.5 inline-flex size-8 items-center justify-center rounded-full bg-white text-primary shadow-md transition hover:bg-primary hover:text-white focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <LinkedinIcon className="size-4" />
          </a>
        )}
      </div>

      <h3 className="mt-3 font-heading text-base font-semibold leading-tight text-ink">
        {member.name}
      </h3>
      <p className="mt-1 text-sm leading-tight text-neutral-500">
        {member.role}
      </p>
    </li>
  );
}

export default function TeamGrid() {
  return (
    <section id="team" className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl space-y-24">
        {groups.map((group) => (
            <div key={group.id}>
              <h2 className="font-heading text-5xl font-bold lowercase leading-none tracking-tight text-primary sm:text-7xl">
                {group.label}
              </h2>

              <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                {group.members.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </ul>
            </div>
        ))}
      </div>
    </section>
  );
}
