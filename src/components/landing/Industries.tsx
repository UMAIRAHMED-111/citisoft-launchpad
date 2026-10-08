import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { industries } from "@/lib/industries-data";
import Reveal from "@/components/landing/Reveal";

const Industries = () => {
  return (
    <section id="industries" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <h2 className="text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.02] tracking-[-0.015em] text-foreground">
              Industry depth that <span className="accent-word">shapes</span> delivery
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            We work where domain judgment meets systems — hospitality,
            restaurants, insurance, finance ops, and industrial workflows.
          </p>
        </Reveal>

        <ul className="mt-12 border-t border-foreground/15 lg:mt-14">
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} as="li" delay={index * 50} className="border-b border-foreground/15">
              <Link
                to={
                  industry.caseStudySlug
                    ? `/case-studies/${industry.caseStudySlug}`
                    : "/#case-studies"
                }
                className="group grid grid-cols-[1fr_auto] items-start gap-x-4 gap-y-2 py-6 transition-colors sm:py-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_auto] lg:items-center lg:gap-x-10"
              >
                <h3 className="text-[clamp(1.6rem,3vw,2.25rem)] leading-tight text-foreground transition-colors group-hover:text-primary">
                  {industry.name}
                </h3>
                <p className="col-span-2 row-start-2 text-[15px] leading-relaxed text-muted-foreground lg:col-span-1 lg:col-start-2 lg:row-start-1">
                  {industry.description}
                </p>
                <span className="col-start-2 row-start-1 flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-cream-soft lg:col-start-3">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Industries;
