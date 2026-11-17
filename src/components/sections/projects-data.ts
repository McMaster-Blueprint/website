/**
 * Single source of truth for this year's projects.
 * Used by ProjectsGrid (the /projects page) and HomeProjects (home page).
 *
 * To add a project: add an entry here. Both sections pick it up.
 * `url` must be the nonprofit's own website -- every project links back to it.
 */

export type ProjectBuild = {
  name: string;
  body: string;
};

export type Project = {
  /**
   * Used for the logo file name. Drop the partner's logo at
   * /public/partners/<slug>.png (or .svg, .webp, .jpg) and it shows up
   * automatically. Until the file exists, the card shows the initials.
   */
  slug: string;
  partner: string;
  /** The nonprofit's website. Opens in a new tab. */
  url: string;
  /** Short, human-readable version of `url` shown on the link. */
  domain: string;
  location: string;
  focus: string;
  about: string;
  /** What the team is building. Most projects have one; some have two. */
  builds: ProjectBuild[];
};

export const projectsYear = "2026–27";

export const projects: Project[] = [
  {
    slug: "food-for-life",
    partner: "Food for Life",
    url: "https://foodforlife.ca",
    domain: "foodforlife.ca",
    location: "Burlington",
    focus: "Food rescue",
    about:
      "Food for Life runs a business-to-business food rescue operation, sending fresh and frozen food to other food banks for distribution. It relies on volunteers and needs a better way to train them.",
    builds: [
      {
        name: "Volunteer training portal",
        body: "An online portal that hosts training videos and records which volunteers have completed which training.",
      },
    ],
  },
  {
    slug: "community-living-burlington",
    partner: "Community Living Burlington",
    url: "https://www.clburlington.ca",
    domain: "clburlington.ca",
    location: "Burlington",
    focus: "Developmental services",
    about:
      "Community Living Burlington helps people with developmental disabilities live to their full potential. It also runs a small food bank.",
    builds: [
      {
        name: "Food bank tracking system",
        body: "A system to track the food the food bank uses and where it goes, with reports on both.",
      },
    ],
  },
  {
    slug: "somali-hamilton",
    partner: "Somali Hamilton",
    url: "https://somalihamilton.ca",
    domain: "somalihamilton.ca",
    location: "Hamilton",
    focus: "Newcomer support",
    about:
      "Somali Hamilton supports Somali immigrants and newcomers as they settle into the community.",
    builds: [
      {
        name: "Client management software",
        body: "Software that records how the organization’s social workers engage with each client.",
      },
    ],
  },
  {
    slug: "organized-kaos",
    partner: "Organized Kaos",
    url: "https://www.organizedkaos.org",
    domain: "organizedkaos.org",
    location: "Brantford",
    focus: "Youth and trades",
    about:
      "Organized Kaos gives young people apprenticeships in life and the trades, building hope and purpose. It creates places where they can learn a trade from working tradespeople.",
    builds: [
      {
        name: "Apprenticeship tracker",
        body: "A system to track each young person’s work with tradespeople, so the organization can measure how its program is performing.",
      },
    ],
  },
  {
    slug: "cmha-halton",
    partner: "CMHA Halton",
    url: "https://halton.cmha.ca",
    domain: "halton.cmha.ca",
    location: "Halton Region",
    focus: "Mental health",
    about:
      "CMHA Halton is a mental health organization that manages referrals to a range of services.",
    builds: [
      {
        name: "Service wayfinding tool",
        body: "A tool for the website that helps people find the right service, possibly as an AI chat assistant.",
      },
      {
        name: "Referral tracking system",
        body: "A system to track referrals coming in from different services.",
      },
    ],
  },
];
