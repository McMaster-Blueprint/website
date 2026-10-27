import PhotoCarousel from "@/components/ui/PhotoCarousel";

const photos = [
  {
    src: "/about/meeting-room.jpg",
    alt: "Blueprint members listening to a presentation at a general meeting",
  },
  {
    src: "/about/meeting-presenter.jpg",
    alt: "A VP presenting at a Blueprint info session",
  },
  {
    src: "/landing/meeting-crowd.jpg",
    alt: "Students at a Blueprint info session",
  },
  {
    src: "/about/meeting-presenter-2.jpg",
    alt: "Students listening to a presentation at Blueprint",
  },
];

export default function AboutMission() {
  return (
    <section id="mission" className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
            Making technology
            <br className="hidden sm:block" /> useful to people
            <br className="hidden sm:block" /> doing good work.
          </h2>
        </div>

        <div>
          <p className="font-heading text-xl font-medium leading-snug text-ink sm:text-2xl">
            Blueprint exists to make technology accessible and useful to the
            people who build communities and look after public welfare.
          </p>

          <div className="mt-10 rounded-lg bg-neutral-50 p-6">
            <p className="text-lg leading-relaxed text-ink">
              Blueprint is a multinational organization founded in 2013 at the
              University of California, Berkeley. McMaster joined the network
              in 2026 as the fifth Canadian chapter, after Waterloo, Toronto,
              Carleton and Simon Fraser, and follows the same five values every
              chapter shares.
            </p>
            <a
              href="https://calblueprint.org/chapters"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-heading font-semibold text-primary transition hover:gap-3"
            >
              See all Blueprint chapters <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl">
        <PhotoCarousel photos={photos} />
      </div>
    </section>
  );
}
