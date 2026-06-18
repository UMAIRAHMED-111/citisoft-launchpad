import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { insights } from "@/lib/insights-data";
import SuretyEmbed, { SURETYOS_URL } from "@/components/landing/SuretyEmbed";

// Reveal-on-scroll wrapper used by the header and the featured embed
const useReveal = <T extends HTMLElement>(delay = 0) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return { ref, isVisible };
};

// Live SuretyOS embed with browser chrome and a graceful fallback overlay
const SuretyShowcase = () => {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative rounded-3xl overflow-hidden border border-white/10 bg-[hsl(220_25%_8%)] mb-16 lg:mb-20 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: copy */}
        <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <span className="inline-flex items-center self-start gap-2 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-white bg-white/10 backdrop-blur-md border border-white/20 uppercase rounded-full mb-6">
            Featured Platform
          </span>
          <h3 className="text-3xl sm:text-4xl font-light text-white leading-tight mb-4">
            SuretyOS
          </h3>
          <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed mb-8">
            The operating system for digital surety — bond intake, underwriting,
            approvals, and compliance unified on a single platform. Explore the
            live product below.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={SURETYOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[hsl(220_25%_10%)] font-medium text-sm hover:bg-white/90 transition-all"
            >
              Visit SuretyOS
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right: live browser embed */}
        <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 lg:pl-0">
          <SuretyEmbed />
        </div>
      </div>
    </div>
  );
};

// Individual insight/blog card with staggered reveal
const InsightCard = ({
  insight,
  index,
}: {
  insight: typeof insights[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), (index % 3) * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <Link
      ref={cardRef}
      to={`/insights/${insight.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-[hsl(220_22%_11%)] border border-white/5 hover:border-white/20 transition-all duration-700 ease-out hover:-translate-y-1.5 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-16 scale-95"
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={insight.image}
          alt={insight.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_22%_11%)] via-transparent to-transparent" />
        {/* Category badge */}
        <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white bg-black/40 backdrop-blur-md border border-white/20 uppercase rounded-full">
          {insight.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">
        <div className="flex items-center gap-2 text-xs text-white/40 mb-3">
          <span>{insight.date}</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>{insight.readTime}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-light text-white leading-snug mb-3 group-hover:text-white transition-colors">
          {insight.title}
        </h3>

        <p className="text-white/55 text-sm leading-relaxed font-light mb-6 flex-1">
          {insight.excerpt}
        </p>

        <div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
          Read more
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

const Insights = () => {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="insights"
      className="py-24 lg:py-32 bg-[hsl(var(--dark-bg))] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4 sm:mb-6">
            Updates & Insights
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/60 font-light max-w-2xl mx-auto">
            Perspectives on digital surety, automation, and the platforms shaping
            modern operations
          </p>
        </div>

        {/* Featured SuretyOS live embed */}
        <SuretyShowcase />

        {/* Insights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((insight, index) => (
            <InsightCard key={insight.title} insight={insight} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
