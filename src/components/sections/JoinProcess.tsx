import Reveal from "@/components/ui/Reveal";
const steps = [
  {
    step: "01",
    title: "Apply",
    body: "Fill out the form for your track. It's short -- who you are, what you want to do, and a way to reach you.",
  },
  {
    step: "02",
    title: "Chat",
    body: "If it's a fit, we'll invite you to a casual interview. It's a conversation, not a whiteboard grind.",
  },
  {
    step: "03",
    title: "Hear back",
    body: "We review within a couple of weeks of the deadline and let everyone know either way.",
  },
  {
    step: "04",
    title: "Kick off",
    body: "You're matched to a project team or portfolio, and the term starts with onboarding.",
  },
];

export default function JoinProcess() {
  return (
    <section className="bg-neutral-50 px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-primary sm:text-4xl">
          What to expect.
        </h2>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <li className="border-t-2 border-primary pt-5">
                <span className="font-mono text-sm font-semibold text-maroon">
                  {item.step}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
