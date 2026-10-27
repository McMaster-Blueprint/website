import HomeHero from "@/components/sections/HomeHero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeProjects from "@/components/sections/HomeProjects";
import HomeEvents from "@/components/sections/HomeEvents";
import HomeInterest from "@/components/sections/HomeInterest";
import AboutSponsors from "@/components/sections/AboutSponsors";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HomeHero />

      <HomeAbout />

      {/*
      <HomeProjects />
      */}

      <HomeEvents />

      <HomeInterest />

      <AboutSponsors />
    </div>
  );
}
