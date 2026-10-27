import type { ReactNode } from "react";

type HeroCta = {
  href: string;
  label: string;
  variant?: "solid" | "outline";
};

type HeroProps = {
  heading: string;
  highlight: string;
  body: ReactNode;
  ctas?: HeroCta[];
  illustration?: ReactNode;
  animated?: boolean;
};

export default function Hero({
  heading,
  highlight,
  body,
  ctas = [],
  illustration,
  animated = false,
}: HeroProps) {
  const rise = animated ? "rise-in" : "";

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary to-primary-light px-6 pb-24 pt-36 text-white sm:px-12 sm:pt-40 lg:px-24">
      <div
        className={`relative mx-auto max-w-6xl ${
          illustration
            ? "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
            : ""
        }`}
      >
        <div>
          <h1
            className={`${rise} max-w-3xl font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl`}
          >
            {heading}{" "}
            <span className="inline-block rounded-lg bg-maroon px-4 py-1 leading-normal">
              {highlight}
            </span>
          </h1>

          <p
            className={`${rise} mt-7 max-w-xl font-heading text-lg leading-relaxed text-white/90 sm:text-xl`}
            style={animated ? { animationDelay: "160ms" } : undefined}
          >
            {body}
          </p>

          {ctas.length > 0 && (
            <div
              className={`${rise} mt-10 flex flex-wrap items-center gap-4`}
              style={animated ? { animationDelay: "240ms" } : undefined}
            >
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.variant === "outline"
                      ? "rounded-full border border-white/40 px-8 py-3 font-heading font-semibold text-white transition hover:bg-white/10"
                      : "rounded-full bg-white px-8 py-3 font-heading font-semibold text-primary transition hover:bg-white/90"
                  }
                >
                  {cta.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {illustration && (
          <div aria-hidden className="mx-auto w-full max-w-sm lg:max-w-none">
            {illustration}
          </div>
        )}
      </div>
    </section>
  );
}
