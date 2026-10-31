const events = [
  {
    day: "Wednesday",
    date: "Oct 7, 2026",
    title: "Info session",
    body: "We kicked off the year by meeting all of you! The VPs walked through what Blueprint is, what we're building this year, and how to join. Everyone who came got an exclusive fast-track application as a thank-you for showing up.",
  },
];

export default function HomeEvents() {
  return (
    <section id="events" className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
          Events
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
          We have lots of fun things planned for this year! Join us :)
        </p>

        <ul className="mt-14 space-y-6">
          {events.map((event) => (
            <li
              key={event.title + event.date}
              className="grid gap-6 rounded-2xl bg-primary/5 p-8 sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-10"
            >
              <p className="self-start justify-self-start rounded-2xl bg-primary px-6 py-4 text-center font-heading text-white">
                <span className="block text-sm text-white/85">{event.day}</span>
                <span className="block text-xl font-bold">{event.date}</span>
              </p>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  {event.title}
                </h3>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink">
                  {event.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
