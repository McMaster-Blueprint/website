import type { Metadata } from "next";
import TeamHero from "@/components/sections/TeamHero";
import TeamGrid from "@/components/sections/TeamGrid";
import TeamPortfolios from "@/components/sections/TeamPortfolios";

export const metadata: Metadata = {
  title: "Team | McMaster Blueprint",
  description:
    "Meet the McMaster Blueprint executive team — nine students across projects, technology, design and external.",
};

export default function TeamPage() {
  return (
    <div className="flex flex-1 flex-col">
      <TeamHero />
      <TeamGrid />
      <TeamPortfolios />
    </div>
  );
}