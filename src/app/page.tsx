import HomeHero from "@/components/sections/HomeHero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeProjects from "@/components/sections/HomeProjects";
import HomeInterest from "@/components/sections/HomeInterest";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HomeHero />

      <HomeAbout />

      <HomeProjects />

      <HomeInterest />
    </div>
  );
}
