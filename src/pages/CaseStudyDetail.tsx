import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import {
  getCaseStudyBySlug,
  caseStudies,
} from "@/lib/case-studies-data";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!study) {
    return <Navigate to="/#case-studies" replace />;
  }

  const related = caseStudies
    .filter((c) => c.slug !== study.slug && c.industrySlug === study.industrySlug)
    .concat(caseStudies.filter((c) => c.slug !== study.slug && c.industrySlug !== study.industrySlug))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      <section className="relative overflow-hidden bg-[hsl(var(--dark-bg))] pb-16 pt-24 xs:pb-20 xs:pt-28 sm:pb-24 lg:pb-28 lg:pt-32">
        <div className="absolute inset-0">
          <img
            src={study.image}
            alt=""
            className="h-full w-full scale-105 object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--dark-bg))]/70 via-[hsl(var(--dark-bg))]/85 to-[hsl(var(--dark-bg))]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <Link
            to="/#case-studies"
            className={`mb-8 inline-flex items-center gap-2 text-xs font-medium text-white/70 transition-all duration-500 hover:text-white sm:mb-10 sm:text-sm ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to case studies
          </Link>

          <div className="max-w-3xl">
            <p
              className={`mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 transition-all duration-500 sm:mb-5 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {study.sector} · {study.region}
            </p>
            <h1
              className={`font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white transition-all duration-700 xs:text-4xl sm:text-5xl lg:text-6xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {study.title}
            </h1>
            <p
              className={`mt-6 max-w-2xl text-base font-light leading-relaxed text-white/75 transition-all duration-700 sm:text-lg ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {study.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="mb-10 text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              <span className="font-semibold text-foreground">Client context. </span>
              {study.clientSummary}
            </p>

            <div className="mb-12 border-b border-border pb-12">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Challenge
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {study.challenge}
              </p>
            </div>

            <div className="mb-12 border-b border-border pb-12">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Approach
              </h2>
              <ul className="mt-6 space-y-4">
                {study.approach.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-relaxed text-muted-foreground sm:text-lg"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {study.sections.map((section) => (
              <div key={section.heading} className="mb-12">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="mb-12 border-t border-border pt-12">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Outcome
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {study.outcome}
              </p>
            </div>

            <div className="mb-14">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                Stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-sm bg-[hsl(var(--dark-bg))] p-8 text-center sm:p-10">
              <h3 className="font-display mb-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Discuss a similar engagement
              </h3>
              <p className="mx-auto mb-8 max-w-md font-light text-white/60">
                Tell us about the operation you need to run every day — we&apos;ll
                outline a practical path forward.
              </p>
              <Button asChild size="lg" className="rounded-sm bg-white px-8 font-semibold text-[hsl(var(--dark-bg))] hover:bg-white/90">
                <Link to="/#contact">Talk to our team</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-card py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <h2 className="font-display mb-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              More case studies
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/case-studies/${item.slug}`}
                  className="group flex flex-col border border-border bg-background p-6 transition-shadow hover:shadow-[0_12px_40px_hsl(220_28%_12%/0.07)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {item.sector}
                  </p>
                  <h3 className="font-display mt-3 text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default CaseStudyDetail;
