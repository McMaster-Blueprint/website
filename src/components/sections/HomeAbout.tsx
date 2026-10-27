import Image from "next/image";

export default function HomeAbout() {
  return (
    <section id="about" className="px-6 pt-48 pb-24 sm:px-12 lg:px-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="font-heading text-4xl font-bold leading-[1.15] text-primary sm:text-5xl">
          Here&apos;s what we think.
        </h2>
        <div>
          <p className="text-2xl leading-relaxed text-ink">
            We believe good software shouldn&apos;t be out of reach for the
            organizations doing the most good. Every year, a student team
            builds it for free.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            McMaster Blueprint is part of a multinational network founded in
            2013 at UC Berkeley, and the fifth chapter in Canada. We build web
            and mobile apps for nonprofits in Hamilton and beyond.
          </p>
          <a
            href="/about"
            className="group mt-6 inline-flex items-center gap-2 font-heading font-semibold text-primary"
          >
            <span className="bg-linear-to-r from-primary to-primary bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 ease-out group-hover:bg-[length:100%_2px]">
              Read more about us
            </span>
            <span
              aria-hidden
              className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 transition duration-300 ease-out group-hover:translate-x-1 group-hover:bg-primary group-hover:text-white"
            >
              &rarr;
            </span>
          </a>
        </div>
      </div>
      <div className="relative mx-auto mt-16 aspect-[4/3] max-w-6xl overflow-hidden rounded-2xl sm:aspect-[16/9]">
        <Image
          src="/landing/meeting-crowd.jpg"
          alt="Blueprint members at a general meeting"
          fill
          sizes="(min-width: 1024px) 72rem, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
