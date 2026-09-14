// Only file to edit to open/close hiring.
// applicationsOpen=false -> "not hiring" page, no roles shown.
// applicationsOpen=true -> roles with open=true show with their form link.

export const applicationsOpen = true;

/** Shown on the closed state so people know when to come back. */
export const closedMessage =
  "We're not hiring right now. Check back in September for the next round.";

export type Role = {
  name: string;
  blurb: string;
  open: boolean;
  form: string; // Google Form URL. Only used when open.
};

export const roles: Role[] = [
  {
    name: "Developer",
    blurb:
      "You'll work across the stack on a real codebase with a small team, shipping software a nonprofit will actually use.",
    open: true,
    form: "[DEVELOPER_FORM_URL]",
  },
  {
    name: "Product Manager",
    blurb:
      "Keep the project moving. Scope the work with the partner, run the team's process, and make the calls that keep a term on track.",
    open: false,
    form: "[PM_FORM_URL]",
  },
  {
    name: "VP Projects",
    blurb:
      "Lead the projects and drive their success. Manage and advise the project leads, and run the project selection process each term.",
    open: false,
    form: "[VP_PROJECTS_FORM_URL]",
  },
  {
    name: "VP Technology",
    blurb:
      "Own Blueprint's technical resources. Manage the tools shared across project teams, maintain the website, and help teams through technical issues.",
    open: false,
    form: "[VP_TECHNOLOGY_FORM_URL]",
  },
  {
    name: "VP Design",
    blurb:
      "Lead Blueprint's design culture and oversee each project's designer. Advise designers and spearhead design education across the club.",
    open: false,
    form: "[VP_DESIGN_FORM_URL]",
  },
  {
    name: "VP External",
    blurb:
      "Cultivate Blueprint's brand and external image. Run social media and corporate relations, and manage any events open to the public.",
    open: false,
    form: "[VP_EXTERNAL_FORM_URL]",
  },
  {
    name: "VP Internal",
    blurb:
      "Cultivate Blueprint's culture and values. Run internal social and professional activities, including the semesterly member retreat.",
    open: false,
    form: "[VP_INTERNAL_FORM_URL]",
  },
  {
    name: "VP Operations",
    blurb:
      "Manage internal logistics: finances, room bookings, attendance, and the day-to-day that keeps the chapter running.",
    open: true,
    form: "[VP_OPERATIONS_FORM_URL]",
  },
]
