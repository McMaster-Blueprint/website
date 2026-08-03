import Hero from "@/components/ui/Hero";

export default function TeamHero() {
  return (
    <Hero
      heading="Meet the"
      highlight="team"
      body="Blueprint runs on students. An executive team keeps the chapter moving, and a project team forms around each nonprofit partner we take on. New people join every term."
      ctas={[
        { href: "/join", label: "Join the team" },
        { href: "/about", label: "What we do", variant: "outline" },
      ]}
    />
  );
}
