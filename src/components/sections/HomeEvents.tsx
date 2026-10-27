const events = [
  {
    day: "Wednesday",
    date: "Oct 7, 2026",
    title: "Info session",
    body: "A meet and greet with the VPs. We ran a short presentation on what Blueprint is, our plans and upcoming projects, and how to join. Everyone who came got access to an exclusive application form to fast-track the process.",
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

        <ul className="mt-14 border-b-2 border-primary">
          {events.map((event) => (
            <li
              key={event.title + event.date}
              className="grid gap-6 border-t-2 border-primary py-10 sm:grid-cols-[1fr_2fr] sm:gap-12"
            >
              <p className="font-heading text-3xl font-medium leading-tight text-primary">
                {event.day}
                <br />
                {event.date}
              </p>
              <div>
                <h3 className="font-heading text-3xl font-bold leading-tight text-primary">
                  {event.title}
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">
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
