export default function HomeAbout() {
  return (
    <section id="about" className="px-6 py-48 sm:px-12 lg:px-24">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="font-heading text-4xl font-bold leading-[1.15] text-primary sm:text-5xl">
          Here&apos;s what we think.
        </h2>
        <p className="text-2xl leading-relaxed text-ink">
          We believe good software shouldn&apos;t be out of reach for the
          organizations doing the most good. Every term, a student team
          builds it for free.
        </p>
      </div>
    </section>
  );
}
