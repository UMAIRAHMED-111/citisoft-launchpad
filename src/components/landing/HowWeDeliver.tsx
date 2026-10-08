import type { ComponentType } from "react";
import Reveal from "@/components/landing/Reveal";
import { DeployCard, DesignCard, DiscoverCard } from "@/components/landing/GlassCards";

const steps: {
  number: string;
  title: string;
  timing: string;
  description: string;
  Card: ComponentType<{ className?: string }>;
}[] = [
  {
    number: "01",
    title: "Discover",
    timing: "Weeks 1–2",
    description:
      "We interview your team, watch how work actually gets done, and find where software and AI save time or money.",
    Card: DiscoverCard,
  },
  {
    number: "02",
    title: "Design",
    timing: "Week 3",
    description:
      "We choose the right architecture, scope exactly what we're building, and agree on what done looks like before writing code.",
    Card: DesignCard,
  },
  {
    number: "03",
    title: "Deploy",
    timing: "Week 4 onward",
    description:
      "We ship into your existing systems, train your team, and monitor and tune it so it keeps holding up as needs change.",
    Card: DeployCard,
  },
];

const HowWeDeliver = () => {
  return (
    <section id="delivery" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <h2 className="text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.02] tracking-[-0.015em] text-foreground">
              From first call to <span className="accent-word">production</span>
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              A three-step process with a concrete output at every stage — so you
              always know what you&apos;re getting and when.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-cream-soft transition-colors hover:bg-deep"
            >
              Start with discovery
            </a>
          </div>
        </Reveal>

        <ol className="relative mt-14 grid gap-12 md:grid-cols-3 md:gap-6 lg:mt-16">
          <span
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-foreground/15 md:left-0 md:right-0 md:top-[7px] md:h-px md:w-full"
            aria-hidden="true"
          />
          {steps.map((step, i) => {
            const Card = step.Card;
            return (
              <Reveal key={step.number} as="li" delay={i * 90} className="relative flex flex-col pl-8 md:pl-0">
                <div className="absolute left-0 top-[1px] flex items-center md:static">
                  <span className="h-[15px] w-[15px] rounded-full border-[3px] border-background bg-primary ring-1 ring-primary/30" />
                </div>
                <p className="text-sm font-medium text-primary md:mt-5">
                  {step.timing}
                </p>
                <h3 className="mt-3 flex items-baseline gap-3 text-[2rem] leading-none text-foreground">
                  <span className="text-primary/60">{step.number}</span>
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:min-h-[6.5rem]">
                  {step.description}
                </p>
                <div className="relative mt-6 flex-1 overflow-hidden rounded-2xl bg-[#f6f3ee] p-4 sm:p-5">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[hsl(var(--citisoft-light)/0.25)] blur-3xl"
                    aria-hidden="true"
                  />
                  <p className="relative mb-3 text-[13px] font-medium text-muted-foreground">
                    What you get
                  </p>
                  <Card className="relative max-w-none sm:max-w-none" />
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default HowWeDeliver;
