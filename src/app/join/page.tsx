import type { Metadata } from "next";
import JoinHero from "@/components/sections/JoinHero";
import JoinRoles from "@/components/sections/JoinRoles";
import JoinProcess from "@/components/sections/JoinProcess";
import JoinFaq from "@/components/sections/JoinFaq";

export const metadata: Metadata = {
  title: "Join | McMaster Blueprint",
  description:
    "Apply to McMaster Blueprint — join a project team as a developer, designer or product manager. No prior nonprofit experience needed.",
};

export default function JoinPage() {
  return (
    <div className="flex flex-1 flex-col">
      <JoinHero />
      <JoinRoles />
      <JoinProcess />
      <JoinFaq />
    </div>
  );
}