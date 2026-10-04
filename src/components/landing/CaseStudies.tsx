import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/lib/case-studies-data";
import Reveal from "@/components/landing/Reveal";
import VideoBackdrop from "@/components/landing/VideoBackdrop";
import aerialVideo from "@/assets/mixkit-aerial-panorama-over-the-buildings-of-a-big-city-41541-hd-ready.mp4";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const CaseStudies = () => {
  const [lead, ...rest] = caseStudies;
  const secondary = rest.slice(0, 2);
  const tertiary = rest.slice(2);
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const showLeadVideo = isMobile === false && !reduced;

  return (
    <section id="case-studies" className="bg-card py-16 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
            Work at operating scale
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
            Selected engagements across hospitality, restaurants, insurance, and
            finance. Client names withheld under NDA — described by sector and scale.
          </p>
        </Reveal>

        {lead && (
          <Reveal className="mt-14 lg:mt-16">
            <Link
              to={`/case-studies/${lead.slug}`}
              className="group relative grid min-h-[28rem] overflow-hidden border border-border bg-[hsl(var(--dark-bg))] lg:min-h-[32rem] lg:grid-cols-12"
            >
              <div className="relative min-h-[16rem] overflow-hidden lg:col-span-7 lg:min-h-full">
                <img
                  src={lead.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                {showLeadVideo && (
                  <VideoBackdrop
                    src={aerialVideo}
                    poster={lead.image}
                    treatment="closing"
                    className="opacity-80 transition-opacity duration-700 group-hover:opacity-100"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--dark-bg))]/40 to-transparent lg:from-transparent" />
              </div>
              <div className="relative z-10 flex flex-col justify-end p-5 text-white xs:p-6 sm:p-10 lg:col-span-5 lg:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--citisoft-light))] sm:text-xs">
                  {lead.sector}
                </p>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-tight xs:text-2xl sm:mt-4 sm:text-3xl lg:text-[2rem] lg:leading-tight">
                  {lead.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/65 sm:mt-4 sm:text-base">
                  {lead.summary}
                </p>
                <div className="mt-6 grid grid-cols-1 gap-3 border-t border-white/15 pt-5 xs:grid-cols-3 xs:gap-4 sm:mt-8 sm:pt-6">
                  {lead.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-baseline justify-between gap-3 xs:block xs:items-stretch"
                    >
                      <p className="font-display text-lg font-semibold tabular-nums sm:text-2xl">
                        {metric.value}
                      </p>
                      <p className="text-[11px] leading-snug text-white/50 sm:mt-1 sm:text-xs">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                  Read case study
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {secondary.map((study, index) => (
            <Reveal key={study.slug} delay={index * 90}>
              <Link
                to={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-border bg-background transition-shadow duration-300 hover:shadow-[0_20px_60px_hsl(220_28%_12%/0.1)]"
              >
                <div className="relative min-h-[220px] overflow-hidden">
                  <img
                    src={study.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark-bg))]/75 to-transparent" />
                  <p className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.12em] text-white/85">
                    {study.sector}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {study.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                    {study.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read case study
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tertiary.map((study, index) => (
            <Reveal key={study.slug} delay={index * 70}>
              <Link
                to={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col border border-border bg-background p-7 transition-shadow duration-300 hover:shadow-[0_12px_40px_hsl(220_28%_12%/0.08)] sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  {study.sector}
                </p>
                <h3 className="font-display mt-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted-foreground">
                  {study.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  {study.metrics.slice(0, 2).map((metric) => (
                    <span key={metric.label}>
                      <span className="font-semibold text-foreground">{metric.value}</span>{" "}
                      {metric.label}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
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
