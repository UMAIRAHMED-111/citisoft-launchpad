import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/lib/case-studies-data";
import Reveal from "@/components/landing/Reveal";

const CaseStudies = () => {
  const [lead, ...rest] = caseStudies;
  const secondary = rest.slice(0, 2);
  const tertiary = rest.slice(2);

  return (
    <section id="case-studies" className="bg-cream py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <h2 className="text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.02] tracking-[-0.015em] text-foreground">
            Work at <span className="accent-word">operating</span> scale
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Selected engagements across hospitality, restaurants, insurance, and
            finance. Client names withheld under NDA — described by sector and scale.
          </p>
        </Reveal>

        {lead && (
          <Reveal className="mt-12 lg:mt-14">
            <Link
              to={`/case-studies/${lead.slug}`}
              className="group grid overflow-hidden rounded-2xl soft-card bg-white shadow-[0_16px_48px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_24px_64px_rgba(15,23,42,0.08)] lg:grid-cols-12"
            >
              <div className="relative min-h-[14rem] overflow-hidden lg:col-span-7 lg:min-h-[22rem]">
                <img
                  src={lead.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-10">
                <p className="text-[13px] font-medium text-primary">
                  {lead.sector}
                </p>
                <h3 className="mt-3 text-[1.6rem] leading-tight text-foreground sm:text-[2rem]">
                  {lead.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {lead.summary}
                </p>
                <div className="mt-6 grid grid-cols-1 gap-3 border-t border-border pt-5 xs:grid-cols-3">
                  {lead.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-display text-[1.75rem] leading-none tabular-nums text-deep">
                        {metric.value}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-deep">
                  Read case study
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {secondary.map((study, index) => (
            <Reveal key={study.slug} delay={index * 80}>
              <Link
                to={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl soft-card bg-white transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="relative min-h-[200px] overflow-hidden">
                  <img
                    src={study.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-5 text-[13px] font-medium text-cream-soft">
                    {study.sector}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-[1.6rem] leading-tight text-foreground">
                    {study.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {study.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-deep">
                    Read case study
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:[&>*:first-child]:col-span-2">
          {tertiary.map((study, index) => (
            <Reveal key={study.slug} delay={index * 60}>
              <Link
                to={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col rounded-2xl soft-card bg-white p-6 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
              >
                <p className="text-[13px] font-medium text-primary">
                  {study.sector}
                </p>
                <h3 className="mt-3 text-[1.6rem] leading-tight text-foreground">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {study.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-deep">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
