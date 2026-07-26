import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center text-white">
      <video
        src="/landing/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-primary/80 to-primary-light/80" />
      <Image
        src="/logos/logo_negative.png"
        alt="McMaster Blueprint"
        width={96}
        height={96}
        className="relative z-10 mb-8"
        priority
      />
      <h1 className="relative z-10 max-w-3xl font-heading text-5xl font-bold leading-tight sm:text-6xl">
        Tech for social good, built at{" "}
        <span className="inline-block rounded-lg bg-maroon px-4 py-1">
          McMaster
        </span>
      </h1>
      <p className="relative z-10 mt-6 max-w-xl font-heading text-xl text-white/90">
        We&apos;re a student-run team building free software for nonprofits in
        our community.
      </p>
      <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#"
          className="rounded-full bg-white px-8 py-3 font-heading font-semibold text-primary transition hover:bg-white/90"
        >
          Apply Now
        </a>
        <a
          href="#about"
          className="rounded-full border border-white/40 px-8 py-3 font-heading font-semibold text-white transition hover:bg-white/10"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
