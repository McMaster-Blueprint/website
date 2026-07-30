import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import AboutMission from "@/components/sections/AboutMission";
import AboutImpact from "@/components/sections/AboutImpact";
import AboutProcess from "@/components/sections/AboutProcess";
import AboutValues from "@/components/sections/AboutValues";
import AboutLife from "@/components/sections/AboutLife";
import AboutSponsors from "@/components/sections/AboutSponsors";
import AboutCTA from "@/components/sections/AboutCTA";

export const metadata: Metadata = {
  title: "About | McMaster Blueprint",
  description:
    "McMaster Blueprint is a student team that builds software for nonprofits in Hamilton, free of charge. Tech for social good.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <AboutHero />
      <AboutMission />
      <AboutImpact />
      <AboutProcess />
      <AboutValues />
      <AboutLife />
      <AboutSponsors />
      <AboutCTA />
    </div>
  );
}