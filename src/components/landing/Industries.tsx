import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { industries } from "@/lib/industries-data";
import Reveal from "@/components/landing/Reveal";

const Industries = () => {
  return (
    <section id="industries" className="border-b border-border bg-background py-16 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
              Industry depth that shapes delivery
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
              We work where domain judgment meets systems — hospitality,
              restaurants, insurance, finance ops, and industrial workflows.
            </p>
          </div>
          <a
            href="#case-studies"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
          >
            Explore the work
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 sm:mt-16 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 70} as="article">
              <div className="flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-card sm:p-10">
                <span className="font-display text-xs font-semibold tracking-[0.16em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
                  {industry.name}
                </h3>
                <p className="mt-4 flex-1 text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                  {industry.description}
                </p>
                {industry.caseStudySlug ? (
                  <Link
                    to={`/case-studies/${industry.caseStudySlug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-[hsl(var(--citisoft-dark))]"
                  >
                    View case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <Link
                    to="/#case-studies"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-[hsl(var(--citisoft-dark))]"
                  >
                    See related work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
