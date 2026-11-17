import Hero from "@/components/ui/Hero";
import { APPLICATION_FORM, applicationsOpen } from "./apply-config";

export default function JoinHero() {
  return (
    <Hero
      animated
      heading="Build for"
      highlight="good"
      body={
        applicationsOpen
          ? "We're a student team that builds free software for nonprofits in Hamilton. Applications are open now -- you don't have to be in tech to join."
          : "We're a student team that builds free software for nonprofits in Hamilton. Applications aren't open right now, but here's what we do in the meantime."
      }
      ctas={[
        {
          href: applicationsOpen ? APPLICATION_FORM : "#roles",
          label: applicationsOpen ? "Apply" : "When we're hiring",
        },
        { href: "/about", label: "What we do", variant: "outline" },
      ]}
    />
  );
}
