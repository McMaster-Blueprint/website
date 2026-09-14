import Image from "next/image";
import GithubIcon from "@/components/icons/github-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import InstagramIcon from "@/components/icons/instagram-icon";
import MailIcon from "@/components/icons/mail-icon";
import LocationIcon from "@/components/icons/location-icon";

const navigateLinks = [
  { label: "About", href: "/about" },
  // { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const getInvolvedLinks = [
  { label: "Apply to join", href: "/join" },
  { label: "Bring us a problem", href: "/contact" },
  { label: "Become a sponsor", href: "/contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/McMaster-Blueprint", Icon: GithubIcon },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/mcmaster-blueprint",
    Icon: LinkedinIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mcmasterblueprint",
    Icon: InstagramIcon,
  },
];

export default function Footer() {
  return (
    <footer className="rounded-t-[2.5rem] bg-primary px-6 pb-10 pt-16 text-white sm:px-12 lg:px-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-white/10">
          <Image
            src="/logos/square_negative.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </div>

        <h2 className="mt-6 font-heading text-4xl font-bold leading-[1.1] sm:text-5xl">
          Let&apos;s build!!!
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white/85">
          Free software for nonprofits, and real experiences for students.
          <br/>
          You are welcome to reach out any time :)
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-heading font-semibold text-primary transition hover:bg-white/90"
        >
          Get in touch <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-white/15 pt-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-lg font-bold">Contact</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-center gap-3">
                <MailIcon className="size-6 flex-none text-white" />
                <a
                  href="mailto:mcmasterblueprint@gmail.com"
                  className="font-heading text-sm leading-relaxed text-white/75 transition hover:text-white"
                >
                  mcmasterblueprint@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LocationIcon className="size-6 flex-none text-white" />
                <span className="font-heading text-sm leading-relaxed text-white/75">
                  Hamilton, Ontario
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {navigateLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-heading text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold">Get involved</h3>
            <ul className="mt-5 space-y-3">
              {getInvolvedLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-heading text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold">Follow us</h3>
            <ul className="mt-5 space-y-4">
              {socialLinks.map(({ name, href, Icon }) => (
                <li key={name} className="flex items-center gap-3">
                  <Icon className="size-6 flex-none text-white" />
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-sm text-white/75 transition hover:text-white"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row">
          <p className="font-heading text-sm text-white/70">
            &copy; {new Date().getFullYear()} McMaster Blueprint. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
