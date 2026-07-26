import GithubIcon from "@/components/icons/github-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import InstagramIcon from "@/components/icons/instagram-icon";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/McMaster-Blueprint",
    Icon: GithubIcon,
  },
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
    <footer className="border-t border-primary/25 bg-primary px-6 py-8 text-white sm:px-12 lg:px-24">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-lg font-heading">
          &copy; {new Date().getFullYear()} McMaster Blueprint
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-white transition-opacity hover:opacity-75"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
