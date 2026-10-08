import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { insights } from "@/lib/insights-data";
import Reveal from "@/components/landing/Reveal";

const Insights = () => {
  const [featured, ...rest] = insights;
  const secondary = rest.slice(0, 4);

  return (
    <section id="insights" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <h2 className="text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.02] tracking-[-0.015em] text-foreground">
            Notes from the <span className="accent-word">field</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Perspectives on regulated operations, industrial automation, and
            building systems that hold up under real constraints.
          </p>
        </Reveal>

        {featured && (
          <Reveal className="mt-10 sm:mt-12">
            <Link
              to={`/insights/${featured.slug}`}
              className="group grid overflow-hidden rounded-2xl soft-card bg-white transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(15,23,42,0.08)] lg:grid-cols-2"
            >
              <div className="relative min-h-[220px] overflow-hidden lg:min-h-[320px]">
                <img
                  src={featured.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-[13px] font-medium text-primary">
                    {featured.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h3 className="mt-4 text-[1.6rem] leading-tight text-foreground sm:text-[2rem]">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-deep">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {secondary.map((insight, index) => (
            <Reveal key={insight.slug} delay={index * 50}>
              <Link
                to={`/insights/${insight.slug}`}
                className="group flex h-full flex-col rounded-2xl soft-card bg-white p-6 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-[13px] font-medium text-primary">
                    {insight.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{insight.date}</span>
                </div>
                <h3 className="mt-3 text-[1.6rem] leading-tight text-foreground">
                  {insight.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {insight.excerpt}
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

export default Insights;
