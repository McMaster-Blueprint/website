import Hero from "@/components/ui/Hero";

// Original linework drawing: University Hall as a drafted elevation
function UniversityHallIllustration() {
  return (
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
        <path d="M88 380V164h6v6h2v-6h6v6h2v-6h6V194" />
        <path d="M332 380V164h-6v6h-2v-6h-6v6h-2v-6h-6V194" />
        {/* tower */}
        <path d="M170 194V74h10v6h7.5v-6h10v6h7.5v-6h10v6h7.5v-6h10v6h7.5v-6h10V194" />
        <path d="M170 88h80" />
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
        <path d="M200 194v-22a10 10 0 0120 0v22" />
        {/* arched windows */}
        <path d="M108 356v-56a12 12 0 0124 0v56" />
        <path d="M153 356v-56a12 12 0 0124 0v56" />
        <path d="M243 356v-56a12 12 0 0124 0v56" />
        <path d="M288 356v-56a12 12 0 0124 0v56" />
        <path
          className="opacity-70"
          d="M120 288v68M165 288v68M255 288v68M300 288v68M108 322h24M153 322h24M243 322h24M288 322h24"
        />
        {/* sills */}
        <path d="M104 356h32M149 356h32M239 356h32M284 356h32" />
        {/* arched entrance */}
        <path d="M194 380v-80a16 16 0 0132 0v80" />
        <path
          d="M200 380v-78a10 10 0 0120 0v78z"
          className="fill-maroon"
          stroke="none"
        />
        {/* dimension line */}
        <g className="opacity-70" strokeWidth="1">
          <path d="M70 420v34M350 420v34M70 446h50M300 446h50" />
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
  );
}

export default function AboutHero() {
  return (
    <Hero
      heading="About"
      highlight="us"
      body="We're McMaster students who build software for nonprofits, free of charge. Every term a full product team takes on one local organization and ships something they'll actually use."
      ctas={[
        { href: "#mission", label: "Our mission" },
        { href: "#values", label: "Our values", variant: "outline" },
        { href: "#team", label: "The team", variant: "outline" },
      ]}
      illustration={<UniversityHallIllustration />}
    />
  );
}
