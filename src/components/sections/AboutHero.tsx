export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary to-primary-light px-6 pb-24 pt-36 text-white sm:px-12 sm:pt-40 lg:px-24">
      {/* blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.30) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.30) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: "112px 112px, 112px 112px, 16px 16px, 16px 16px",
          maskImage:
            "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 85%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            About{" "}
            <span className="inline-block rounded-lg bg-maroon px-4 py-1">
              us
            </span>
          </h1>

          <p className="mt-7 max-w-xl font-heading text-lg leading-relaxed text-white/90 sm:text-xl">
            We&apos;re McMaster students who build software for nonprofits, free
            of charge. Every term a full product team takes on one local
            organization and ships something they&apos;ll actually use.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#values"
              className="rounded-full bg-white px-8 py-3 font-heading font-semibold text-primary transition hover:bg-white/90"
            >
              Our values
            </a>
            <a
              href="#process"
              className="rounded-full border border-white/40 px-8 py-3 font-heading font-semibold text-white transition hover:bg-white/10"
            >
              How a term runs
            </a>
          </div>
        </div>

        {/* Original linework drawing: University Hall as a drafted elevation */}
        <div aria-hidden className="mx-auto w-full max-w-sm lg:max-w-none">
          <svg
            viewBox="0 0 420 470"
            className="h-auto w-full [&_path]:stroke-white [&_circle]:stroke-white"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="square"
          >
            <g className="opacity-90">
              {/* ground + hatching */}
              <path d="M30 416H390" />
              <g className="opacity-50" strokeWidth="1">
                <path d="M46 416l-10 14M76 416l-10 14M106 416l-10 14M136 416l-10 14M166 416l-10 14M196 416l-10 14M226 416l-10 14M256 416l-10 14M286 416l-10 14M316 416l-10 14M346 416l-10 14M376 416l-10 14" />
              </g>
              {/* plinth + main block */}
              <path d="M70 416V380h280v36" />
              <path d="M100 380V202h220v178" />
              {/* cornice */}
              <path d="M96 202h228M96 194h228M96 194v8M324 194v8" />
              {/* corner turrets */}
              <path d="M88 380V176h22M332 380V176h-22M88 176h22M310 176h22" />
              <path d="M88 164h6v12M100 164h6v12M310 164h6v12M322 164h6v12" />
              {/* tower */}
              <path d="M170 202V88h80v114M170 88h80" />
              <path d="M170 74h12v14M187 74h12v14M204 74h12v14M221 74h12v14M238 74h12v14" />
              {/* finial + flag */}
              <path d="M210 74V50" />
              <path d="M210 52l24 7-24 7" className="stroke-maroon" />
              {/* rose window */}
              <circle cx="210" cy="138" r="17" />
              <path
                className="opacity-70"
                d="M193 138h34M210 121v34M198 126l24 24M222 126l-24 24"
              />
              {/* tower lancet */}
              <path d="M200 196v-24a10 10 0 0120 0v24" />
              {/* arched windows */}
              <path d="M108 356v-56a12 12 0 0124 0v56" />
              <path d="M153 356v-56a12 12 0 0124 0v56" />
              <path d="M243 356v-56a12 12 0 0124 0v56" />
              <path d="M288 356v-56a12 12 0 0124 0v56" />
              <path
                className="opacity-70"
                d="M120 300v56M165 300v56M255 300v56M300 300v56"
              />
              {/* arched entrance */}
              <path d="M194 380v-80a16 16 0 0132 0v80" />
              <rect
                x="204"
                y="336"
                width="12"
                height="44"
                className="fill-maroon"
                stroke="none"
              />
              {/* dimension line */}
              <g className="opacity-70" strokeWidth="1">
                <path d="M70 420v34M350 420v34M70 446h64M286 446h64" />
                <path
                  d="M70 446l9-3.5v7zM350 446l-9-3.5v7z"
                  className="fill-white"
                  stroke="none"
                />
              </g>
            </g>
            <text
              x="210"
              y="450"
              textAnchor="middle"
              className="fill-white font-mono opacity-80"
              style={{ fontSize: 10, letterSpacing: "0.16em" }}
            >
              MCMASTER &middot; EST. 1887
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
