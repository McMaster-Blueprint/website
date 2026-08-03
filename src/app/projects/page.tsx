import type { Metadata } from "next";
import ProjectsHero from "@/components/sections/ProjectsHero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import AboutCTA from "@/components/sections/AboutCTA";

export const metadata: Metadata = {
  title: "Projects | McMaster Blueprint",
  description:
    "See what McMaster Blueprint has built for nonprofit partners in Hamilton, free of charge.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ProjectsHero />
      <ProjectsGrid />
      <AboutCTA />
    </div>
  );
}
