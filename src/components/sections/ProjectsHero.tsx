import Hero from "@/components/ui/Hero";

export default function ProjectsHero() {
  return (
    <Hero
      heading="Our"
      highlight="work"
      body="Every term, a project team takes on one nonprofit partner and ships something they'll actually use. Here's what that's looked like so far."
      ctas={[
        { href: "/contact", label: "Bring us a problem" },
        { href: "/join", label: "Join a team", variant: "outline" },
      ]}
    />
  );
}
