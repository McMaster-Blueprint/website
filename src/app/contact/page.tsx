import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactOptions from "@/components/sections/ContactOptions";

export const metadata: Metadata = {
  title: "Contact | McMaster Blueprint",
  description:
    "Get in touch with McMaster Blueprint — for nonprofit partners, sponsors, or anyone with a question about the club.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ContactHero />
      <ContactOptions />
    </div>
  );
}
