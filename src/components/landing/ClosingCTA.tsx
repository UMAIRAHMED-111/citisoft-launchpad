import { Mail, MapPin } from "lucide-react";
import Contact from "@/components/landing/Contact";
import Reveal from "@/components/landing/Reveal";

const nextSteps = [
  { title: "30-minute intro call", body: "Tell us what's slowing the operation down." },
  { title: "Opportunity audit", body: "We map your tools, workflows, and quick wins." },
  { title: "First build plan", body: "A scoped, prioritized plan you can act on." },
];

const ClosingCTA = () => {
  return (
    <section id="contact" className="section-deep relative overflow-hidden bg-deep py-20 text-cream-soft sm:py-28">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-[hsl(var(--citisoft-light)/0.18)] blur-3xl"
        aria-hidden="true"
      />
      <div className="container relative mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10">
        <Reveal>
          <h2 className="text-[clamp(2.6rem,5.6vw,4.25rem)] leading-[1.02] tracking-[-0.015em]">
            Ready to see where your ops <span className="accent-word">should</span> run?
          </h2>

          <ol className="mt-10 space-y-5">
            {nextSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 text-[13px] font-medium shrink-0 items-center justify-center rounded-full border border-white/20 text-cream-soft/80">
                  {i + 1}
                </span>
                <span>
                  <span className="block text-[15px] font-medium">{step.title}</span>
                  <span className="mt-0.5 block text-sm text-cream-soft/60">{step.body}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-cream-soft/70 sm:flex-row sm:gap-8">
            <a href="mailto:info@citisoftsolutions.com" className="inline-flex items-center gap-2 hover:text-cream-soft">
              <Mail className="h-4 w-4" />
              info@citisoftsolutions.com
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Houston, Texas
            </span>
          </div>
        </Reveal>

        <Reveal delay={90} className="lg:pt-2">
          <Contact />
        </Reveal>
      </div>
    </section>
  );
};

export default ClosingCTA;
