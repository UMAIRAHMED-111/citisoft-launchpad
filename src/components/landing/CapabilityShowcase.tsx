import { useState, type ComponentType } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { AgentCard, AuditCard, WorkshopCard } from "@/components/landing/GlassCards";
import { cn } from "@/lib/utils";

type Capability = {
  number: string;
  tab: string;
  title: string;
  body: string;
  points: string[];
  image: string;
  Card: ComponentType<{ className?: string }>;
};

const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1400&auto=format&fit=crop&q=80`;

const capabilities: Capability[] = [
  {
    number: "01",
    tab: "Opportunity Audit",
    title: "Know exactly where systems should run.",
    body: "A full audit of where your operation is today and a clear, prioritized plan for what to build next — no guesswork, no hype.",
    points: ["Tool & workflow audit", "Peer benchmark", "90-day roadmap"],
    image: photo("1477959858617-67f85cf4f1df"),
    Card: AuditCard,
  },
  {
    number: "02",
    tab: "Team Enablement",
    title: "Your team, fluent in the systems you run.",
    body: "Hands-on sessions built around your real workflows — so automation and AI become part of how your team works every day.",
    points: ["Custom sessions", "Agents & prompts", "Playbooks you keep"],
    image: photo("1486406146926-c627a92ad1ab"),
    Card: WorkshopCard,
  },
  {
    number: "03",
    tab: "Custom Development",
    title: "Software built around how you work.",
    body: "AI agents, automations, and internal tools designed for your stack — built to slot into the systems you already run at real volume.",
    points: ["Agents & automations", "Plugs into your stack", "Built for scale"],
    image: photo("1444723121867-7a241cacace9"),
    Card: AgentCard,
  },
];

const PanelImage = ({ src }: { src: string }) => (
  <>
    <img
      src={src}
      alt=""
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div
      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
      aria-hidden="true"
    />
  </>
);

const DesktopPanels = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="hidden h-[600px] gap-3 lg:flex">
      {capabilities.map((cap, i) => {
        const open = active === i;
        const Card = cap.Card;
        return (
          <div
            key={cap.tab}
            role="button"
            tabIndex={0}
            aria-expanded={open}
            aria-label={cap.tab}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(i);
              }
            }}
            className={cn(
              "relative min-w-0 cursor-pointer overflow-hidden rounded-2xl outline-none transition-[flex-grow] duration-700 ease-out focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              open ? "flex-[3.4]" : "flex-[1]"
            )}
          >
            <PanelImage src={cap.image} />

            <div className="absolute inset-x-0 top-0 flex items-center justify-end p-6">
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-cream-soft transition-transform duration-500",
                  open && "rotate-45 bg-white/10"
                )}
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            <div
              className={cn(
                "absolute bottom-0 left-0 p-6 transition-opacity duration-300",
                open ? "pointer-events-none opacity-0" : "opacity-100 delay-200"
              )}
            >
              <p className="font-display text-[1.75rem] leading-tight text-cream-soft">
                {cap.tab}
              </p>
            </div>

            <div
              className={cn(
                "absolute inset-0 flex flex-col justify-between p-8 pt-20 transition-opacity duration-500",
                open ? "opacity-100 delay-200" : "pointer-events-none opacity-0"
              )}
            >
              <div className="flex justify-end">
                <Card className="w-[340px] max-w-none" />
              </div>
              <div className="w-[min(34rem,100%)]">
                <p className="text-sm font-medium text-[hsl(var(--citisoft-light))]">
                  {cap.tab}
                </p>
                <h3 className="mt-3 text-[2.6rem] leading-[1.05] text-cream-soft">
                  {cap.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-cream-soft/80">
                  {cap.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cap.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[13px] text-cream-soft backdrop-blur"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const MobileCards = () => (
  <div className="space-y-5 lg:hidden">
    {capabilities.map((cap) => {
      const Card = cap.Card;
      return (
        <Reveal key={cap.tab}>
          <article className="soft-card overflow-hidden rounded-2xl bg-white">
            <div className="relative flex min-h-[280px] items-center justify-center p-5 sm:min-h-[340px]">
              <PanelImage src={cap.image} />
              <Card className="relative" />
            </div>
            <div className="p-5 sm:p-7">
              <p className="text-sm font-medium text-primary">
                {cap.tab}
              </p>
              <h3 className="mt-3 text-[clamp(1.85rem,6vw,2.4rem)] leading-[1.08] text-foreground">
                {cap.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {cap.body}
              </p>
              <ul className="mt-5 space-y-2.5">
                {cap.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary" strokeWidth={2.5} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      );
    })}
  </div>
);

const CapabilityShowcase = () => {
  return (
    <section id="capabilities-live" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <h2 className="text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.02] tracking-[-0.015em] text-foreground">
              How we <span className="accent-word">transform</span> your
              operations
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Most companies know software and AI can help somewhere, but few know
            where to start, what to build, or how to keep it running. We pair
            strategy, custom software, and hands-on enablement to close that gap.
          </p>
        </Reveal>

        <Reveal className="mt-12 lg:mt-14">
          <DesktopPanels />
          <MobileCards />
        </Reveal>
      </div>
    </section>
  );
};

export default CapabilityShowcase;
