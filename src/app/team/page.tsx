import type { Metadata } from "next";
import TeamHero from "@/components/sections/TeamHero";
import TeamGrid from "@/components/sections/TeamGrid";
import TeamHiring from "@/components/sections/TeamHiring";

export const metadata: Metadata = {
  title: "Team | McMaster Blueprint",
  description:
    "Meet the McMaster Blueprint executive team.",
};

export default function TeamPage() {
  return (
    <div className="flex flex-1 flex-col">
      <TeamHero />
      <TeamGrid />
      <TeamHiring />
    </div>
  );
}