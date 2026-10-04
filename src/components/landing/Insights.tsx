import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { insights } from "@/lib/insights-data";

const Insights = () => {
  const [featured, ...rest] = insights;
  const secondary = rest.slice(0, 4);

  return (
    <section id="insights" className="bg-background py-16 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
              Insights
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
              Perspectives on regulated operations, industrial automation, and
              building systems that hold up under real constraints.
            </p>
          </div>
        </div>

        {featured && (
          <Link
            to={`/insights/${featured.slug}`}
            className="group mt-12 grid overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-[0_16px_48px_hsl(220_28%_12%/0.08)] lg:mt-16 lg:grid-cols-2"
          >
            <div className="relative min-h-[240px] overflow-hidden lg:min-h-[360px]">
              <img
                src={featured.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="font-semibold uppercase tracking-[0.12em] text-primary">
                  {featured.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{featured.date}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.readTime}</span>
              </div>
              <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {secondary.map((insight) => (
            <Link
              key={insight.slug}
              to={`/insights/${insight.slug}`}
              className="group flex flex-col border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-[0_12px_40px_hsl(220_28%_12%/0.07)] sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="font-semibold uppercase tracking-[0.12em] text-primary">
                  {insight.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{insight.date}</span>
              </div>
              <h3 className="font-display mt-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {insight.title}
              </h3>
              <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted-foreground">
                {insight.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read more
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
