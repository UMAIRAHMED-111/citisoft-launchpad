import { useEffect, useState } from "react";
import Reveal from "@/components/landing/Reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const quotes = [
  {
    company: "US Hotel Management",
    role: "Finance Operations",
    quote:
      "Finance moved from reviewing everything to reviewing only exceptions — with a full audit trail on every payment and card action.",
    result: "400+ properties · exceptions-only review",
  },
  {
    company: "Multi-brand Restaurant Group",
    role: "Operations",
    quote:
      "Citisoft built the systems that keep locations, suppliers, and HQ in sync — without ripping out what already worked.",
    result: "80+ locations · one source of truth",
  },
  {
    company: "Surety & Insurance Carrier",
    role: "Bond Operations",
    quote:
      "True delivery leadership for regulated ops — agents and automations that hold up under real volume and controls.",
    result: "10K+ transactions a day · fully auditable",
  },
];

const Testimonials = () => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = quotes[active];

  useEffect(() => {
    if (reduced) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % quotes.length), 8000);
    return () => window.clearTimeout(id);
  }, [active, reduced]);

  return (
    <section className="section-deep relative overflow-hidden bg-deep py-20 text-cream-soft sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(#fffaf5 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />
      <div className="container relative mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-20 lg:px-10">
        <Reveal>
          <h2 className="text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.015em]">
            What our clients <span className="accent-word">say</span>
          </h2>

          <ul className="mt-10 border-t border-white/10">
            {quotes.map((q, i) => (
              <li key={q.company} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="group flex w-full items-center gap-4 py-4 text-left"
                >
                  <span
                    className={cn(
                      "h-8 w-[2px] rounded-full transition-colors",
                      active === i ? "bg-[hsl(var(--citisoft-light))]" : "bg-white/10"
                    )}
                  />
                  <span>
                    <span
                      className={cn(
                        "block text-[15px] font-medium transition-colors",
                        active === i ? "text-cream-soft" : "text-cream-soft/50 group-hover:text-cream-soft/80"
                      )}
                    >
                      {q.company}
                    </span>
                    <span className="mt-0.5 block text-[13px] text-cream-soft/45">{q.role}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={90} className="flex flex-col justify-center">
          <figure key={active} className="step-panel">
            <span
              className="font-display block h-16 text-[7rem] leading-none text-[hsl(var(--citisoft-light))] sm:h-20 sm:text-[9rem]"
              aria-hidden="true"
            >
              “
            </span>
            <blockquote className="font-display text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.18] text-cream-soft">
              {current.quote}
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-sm text-cream-soft/70">
                {current.company} · {current.role}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] text-[#b8e2f8]">
                {current.result}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
