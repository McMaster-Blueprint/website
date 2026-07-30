import Image from "next/image";

/**
 * Drop real photos into /public/about/ and fill in `src` + `alt`.
 * Any entry left with src: null renders a labelled placeholder slot.
 */
type Photo = {
  src: string | null;
  alt: string;
  hint: string;
  className: string;
};

const photos: Photo[] = [
  {
    src: null,
    alt: "",
    hint: "Demo night — wide shot, whole team",
    className: "col-span-2 sm:row-span-2 min-h-72",
  },
  { src: null, alt: "", hint: "Clubsfest booth", className: "min-h-40" },
  { src: null, alt: "", hint: "Team dinner", className: "min-h-40" },
  { src: null, alt: "", hint: "Project kickoff", className: "min-h-40" },
  { src: null, alt: "", hint: "Partner walkthrough", className: "min-h-40" },
];

export default function AboutLife() {
  return (
    <section id="life" className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-maroon">
          Life at Blueprint
        </p>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
          Not all of it is standups.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
          Team dinners, end-of-term demos, and a socials budget we take
          seriously. You&apos;re joining a group of people, not a ticket queue.
        </p>

        <div className="mt-14 grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.map((photo) => (
            <figure
              key={photo.hint}
              className={`relative overflow-hidden rounded-2xl ${photo.className}`}
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-neutral-300 bg-neutral-50 p-4 text-center">
                  <span className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-neutral-400">
                    [PHOTO]
                    <br />
                    {photo.hint}
                  </span>
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
