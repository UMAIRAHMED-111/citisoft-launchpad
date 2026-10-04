import Reveal from "@/components/landing/Reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map the operating reality — stakeholders, constraints, systems, and the decisions that create value.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture, process, and delivery plans that fit how your teams work — not a template playbook.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We ship production systems with clear ownership, measurable milestones, and no theater demos.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Handover, enablement, and iteration so capability compounds inside your organization.",
  },
];

const HowWeDeliver = () => {
  return (
    <section id="delivery" className="bg-background py-16 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
            How we deliver
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
            Advisory rigor with engineering accountability — built for systems
            that have to run every day.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90} as="li">
              <div className="bg-card p-6 sm:p-10">
                <span className="font-display text-4xl font-semibold tracking-tight text-primary/25 sm:text-6xl">
                  {step.number}
                </span>
                <h3 className="font-display mt-4 text-xl font-semibold tracking-tight text-foreground sm:mt-5 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowWeDeliver;
