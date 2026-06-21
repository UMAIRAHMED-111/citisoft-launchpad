import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { getInsightBySlug, insights } from "@/lib/insights-data";

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? getInsightBySlug(slug) : undefined;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!insight) {
    return <Navigate to="/" replace />;
  }

  // Up to two related posts (same category first, then fill from the rest)
  const related = [
    ...insights.filter((i) => i.slug !== insight.slug && i.category === insight.category),
    ...insights.filter((i) => i.slug !== insight.slug && i.category !== insight.category),
  ].slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section - Dark with image */}
      <section className="relative pt-24 xs:pt-28 lg:pt-32 pb-16 xs:pb-20 sm:pb-24 lg:pb-28 overflow-hidden bg-[hsl(var(--dark-bg))]">
        <div className="absolute inset-0">
          <img
            src={insight.image}
            alt=""
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--dark-bg))]/70 via-[hsl(var(--dark-bg))]/85 to-[hsl(var(--dark-bg))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--dark-bg))]/90 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <Link
            to="/#insights"
            className={`inline-flex items-center gap-2 text-white/70 hover:text-white text-xs sm:text-sm font-medium mb-8 sm:mb-10 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <div className="max-w-3xl">
            <span
              className={`inline-block px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 uppercase mb-6 sm:mb-8 rounded-full transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {insight.category}
            </span>
            <h1
              className={`text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-medium sm:font-light text-white tracking-tight mb-6 sm:mb-8 leading-[1.12] transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {insight.title}
            </h1>
            <div
              className={`flex flex-wrap items-center gap-4 sm:gap-6 text-white/60 text-sm transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-white/80 font-medium">{insight.author}</span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {insight.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {insight.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Article Body */}
      <article className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            {/* Lead excerpt */}
            <p className="text-xl sm:text-2xl text-slate-800 font-normal leading-relaxed mb-12 pb-12 border-b border-slate-200">
              {insight.excerpt}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {insight.content.map((section, index) => (
                <div key={index}>
                  {section.heading && (
                    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-5">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-5">
                    {section.body.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-base sm:text-lg text-slate-600 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Optional CTA */}
            {insight.cta && (
              <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-[hsl(var(--dark-bg))] text-center">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight">
                  Explore the platform
                </h3>
                <p className="text-white/60 font-light mb-8 max-w-md mx-auto">
                  See how it works in practice and experience the product firsthand.
                </p>
                {insight.cta.href.startsWith("/") ? (
                  <Link
                    to={insight.cta.href}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[hsl(220_25%_10%)] font-medium text-sm hover:bg-white/90 transition-all"
                  >
                    {insight.cta.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <a
                    href={insight.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[hsl(220_25%_10%)] font-medium text-sm hover:bg-white/90 transition-all"
                  >
                    {insight.cta.label}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Insights */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                More insights
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/insights/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-slate-300/40 transition-all duration-500 hover:-translate-y-1.5"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white bg-black/40 backdrop-blur-md border border-white/20 uppercase rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <span>{item.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 leading-snug mb-3 group-hover:text-[hsl(var(--citisoft-dark))] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-[hsl(var(--citisoft-dark))] mt-auto">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-10 font-semibold tracking-wide border-slate-300 hover:bg-slate-100 h-14"
              >
                <Link to="/#insights">View All Insights</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default InsightDetail;
