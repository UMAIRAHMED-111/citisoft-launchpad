import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Check,
  Clock,
  TrendingUp,
  Users,
  Gauge,
  FileSignature,
  BookOpen,
  ReceiptText,
  Wrench,
  Factory,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import Footer from "@/components/landing/Footer";
import RfqPipelineDiagram from "@/components/landing/rfq/RfqPipelineDiagram";
import LandExpandDiagram from "@/components/landing/rfq/LandExpandDiagram";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&auto=format&fit=crop";
const GRADIENT = "linear-gradient(135deg, #4a1e3d 0%, #6a2e4d 50%, #8a3e5d 100%)";

const AUDIENCE = [
  "Sealing systems",
  "Valves",
  "Pumps",
  "Springs",
  "Power transmission",
  "Hydraulics",
  "Machining",
];

// Section 2 — ICP qualifying signals
const SIGNALS = [
  "Engineered- or configure-to-order products that need human interpretation of every enquiry",
  "Sales are quote-driven — RFQs arrive as emails, spec sheets and drawings",
  "Core processes still run on legacy ERP, spreadsheets and email",
  "Critical product knowledge lives in the heads of a few senior engineers",
  "An inside-sales or applications-engineering team handles incoming technical requests",
  "Founder- or family-owned, 11–200 people, 20+ years in operation",
];

// Section 4 — value stats for the solution
const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Clock, value: "Days → minutes", label: "Quote turnaround compressed" },
  { icon: Gauge, value: "2–3×", label: "Quote capacity without new hires" },
  { icon: TrendingUp, value: "Higher", label: "Win rates on first credible quote" },
  { icon: Users, value: "Freed", label: "Engineers focus on high-value work" },
];

// Section 5 — the four pillars
type Pillar = {
  icon: LucideIcon;
  badge: string;
  title: string;
  problem: string;
  solution: string;
  value: string;
  image: string;
  primary?: boolean;
};

const PILLARS: Pillar[] = [
  {
    icon: FileSignature,
    badge: "Primary entry point",
    title: "RFQ-to-Quote Automation",
    problem:
      "Inbound RFQs arrive as unstructured emails, spec sheets and drawings. An engineer manually interprets each one before pulling pricing and drafting a quote — thirty minutes to several hours each, with a persistent backlog.",
    solution:
      "An AI quoting agent ingests an RFQ in any format, extracts the requirements, cross-references your own catalog and pricing rules, flags missing or ambiguous information, and produces a review-ready quote for an engineer to approve and send.",
    value:
      "Quote turnaround from days to minutes, 2–3× capacity without new hires, higher win rates, and senior engineers freed for custom, high-margin work.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&auto=format&fit=crop",
    primary: true,
  },
  {
    icon: BookOpen,
    badge: "Pillar 2",
    title: "Technical Knowledge & Application-Support Agent",
    problem:
      "Decades of application knowledge — which product suits which service condition, how to cross-reference a competitor's part — lives in a few senior engineers and scattered PDFs. As they retire, that expertise leaves with them.",
    solution:
      "An AI knowledge agent trained on your catalog, datasheets, application history and captured tribal knowledge. It answers product-selection and application questions and cross-references competitor parts, for staff and customers alike.",
    value:
      "Institutional knowledge preserved and instantly searchable, faster consistent answers, smoother onboarding, and your best engineer's judgment scaled across the team.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&auto=format&fit=crop",
  },
  {
    icon: ReceiptText,
    badge: "Pillar 3",
    title: "Order Processing & Back-Office Automation",
    problem:
      "Once an order is won, it is re-keyed by hand. Purchase orders, acknowledgments, invoices and AP/AR follow-ups all move through manual data entry across disconnected systems.",
    solution:
      "AI agents read incoming purchase orders and documents, enter them into the ERP or accounting system, generate acknowledgments and invoices, match invoices to orders, and follow up automatically on overdue receivables.",
    value:
      "Hours of manual entry eliminated, fewer costly errors, faster and more predictable cash flow, and admin capacity redirected to higher-value work.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    badge: "Pillar 4",
    title: "Aftermarket Service & Failure Intelligence",
    problem:
      "The service side generates field reports, failure observations and repair histories that are recorded inconsistently and rarely analyzed. Opportunities to recommend upgrades or proactive replacements slip through the cracks.",
    solution:
      "An AI agent standardizes service and failure reports, extracts recurring failure modes and patterns, and surfaces upgrade recommendations and proactive-outreach triggers from the accumulated history.",
    value:
      "Structured, analyzable service data, recurring aftermarket revenue captured rather than missed, and stronger retention through proactive, data-backed recommendations.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&auto=format&fit=crop",
  },
];

// Lightweight reveal-on-scroll wrapper
const Reveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const SectionLabel = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-1 bg-gradient-to-r from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] mb-4" />
    <span
      className={`text-sm font-semibold uppercase tracking-wider ${
        dark ? "text-[hsl(var(--citisoft-light))]" : "text-[hsl(var(--citisoft-dark))]"
      }`}
    >
      {children}
    </span>
  </div>
);

const RfqIndustrialLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />

      {/* 1 — ICP HERO */}
      <section className="relative pt-24 xs:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-[hsl(var(--dark-bg))]">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-25 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--dark-bg))]/70 via-[hsl(var(--dark-bg))]/85 to-[hsl(var(--dark-bg))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--dark-bg))]/90 to-transparent" />
        </div>
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/3 rounded-full blur-3xl opacity-20"
          style={{ background: GRADIENT }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <Link
            to="/#products"
            className={`inline-flex items-center gap-2 text-white/70 hover:text-white text-xs sm:text-sm font-medium mb-8 sm:mb-10 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="max-w-4xl">
            <span
              className={`inline-flex items-center gap-2 px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 uppercase mb-6 sm:mb-8 rounded-full transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Factory className="w-4 h-4 shrink-0" strokeWidth={2.25} />
              For niche industrial manufacturers
            </span>
            <h1
              className={`text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium sm:font-light text-white tracking-tight mb-6 sm:mb-8 leading-[1.1] transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              AI quoting that turns{" "}
              <span className="font-semibold bg-gradient-to-r from-[hsl(var(--citisoft-light))] to-pink-300 bg-clip-text text-transparent">
                RFQs into quotes
              </span>{" "}
              in minutes
            </h1>
            <p
              className={`text-base xs:text-lg sm:text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mb-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Custom AI agents for engineered- and configure-to-order manufacturers running on
              legacy ERP, spreadsheets and email. We automate the document- and knowledge-heavy
              work that quietly slows your business down — starting with quoting, where the
              return is fastest.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button asChild size="lg" className="group rounded-none px-8 font-semibold tracking-wide h-14">
                <Link to="/#contact">
                  Book a 30-day pilot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-8 font-semibold tracking-wide h-14 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#how-it-works">See how it works</a>
              </Button>
            </div>

            <div
              className={`flex flex-wrap gap-2 sm:gap-3 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {AUDIENCE.map((a) => (
                <span
                  key={a}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* 2 — IS THIS YOU? (ICP qualifier) */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <SectionLabel>Is this you?</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-5 mb-4">
              Built for one kind of business
            </h2>
            <p className="text-lg text-slate-500 font-light">
              We work with US-based, owner- or family-led industrial manufacturers whose sales
              are technical and quote-driven. If several of these sound familiar, you're exactly
              who we built this for.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
            {SIGNALS.map((signal, i) => (
              <Reveal key={signal} delay={i * 60}>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm h-full">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] flex items-center justify-center mt-0.5 shadow-md shadow-[hsl(var(--citisoft-dark))]/30">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-slate-700 leading-relaxed">{signal}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — THE PROBLEM (flow diagram) */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-5 mb-4">
              Every quote is a manual marathon
            </h2>
            <p className="text-lg text-slate-500 font-light">
              In technical B2B, the first credible quote often wins the order. Today, that quote
              is hand-built — and every hour it waits, the deal cools.
            </p>
          </Reveal>

          <Reveal className="max-w-6xl mx-auto">
            <RfqPipelineDiagram variant="problem" />
          </Reveal>

          <Reveal className="max-w-3xl mx-auto mt-12">
            <div className="flex items-start gap-4 rounded-2xl border border-rose-200 bg-rose-50/60 p-6">
              <Clock className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">Why it hurts:</span> slow turnaround
                means deals go cold or move to faster competitors, while expensive engineering time
                is consumed by repetitive work instead of complex, high-margin jobs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 — THE SOLUTION (flow diagram + stats) */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[hsl(var(--citisoft-light))]/5 to-[hsl(var(--citisoft-dark))]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <SectionLabel>Our solution</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-5 mb-4">
              An AI quoting agent does the heavy lifting
            </h2>
            <p className="text-lg text-slate-500 font-light">
              The same flow, transformed. Your engineers stop interpreting and start approving.
            </p>
          </Reveal>

          <Reveal className="max-w-6xl mx-auto mb-14">
            <RfqPipelineDiagram variant="solution" />
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm h-full text-center">
                  <span className="inline-flex w-11 h-11 rounded-xl items-center justify-center mb-4 bg-gradient-to-br from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] text-white">
                    <s.icon className="w-5 h-5" strokeWidth={2} />
                  </span>
                  <div className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">{s.value}</div>
                  <div className="text-sm text-slate-500 leading-snug">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — FOUR PILLARS */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
            <SectionLabel>The full value chain</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-5 mb-4">
              Four high-impact areas, one partner
            </h2>
            <p className="text-lg text-slate-500 font-light">
              We typically enter through quoting, where the return is fastest and most measurable,
              then expand across the operation as results build confidence.
            </p>
          </Reveal>

          <div className="space-y-10 lg:space-y-16 max-w-6xl mx-auto">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-white bg-black/40 backdrop-blur-md border border-white/20 rounded-full">
                        <pillar.icon className="w-3.5 h-3.5" strokeWidth={2.25} />
                        {pillar.badge}
                      </span>
                    </div>
                  </div>

                  {/* Copy */}
                  <div>
                    {pillar.primary && (
                      <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--citisoft-dark))] bg-[hsl(var(--citisoft-light))]/10 rounded-full">
                        Most clients start here
                      </span>
                    )}
                    <h3 className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight mb-5">
                      {pillar.title}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
                          The problem
                        </span>
                        <p className="text-slate-600 leading-relaxed mt-1">{pillar.problem}</p>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--citisoft-dark))]">
                          Our solution
                        </span>
                        <p className="text-slate-600 leading-relaxed mt-1">{pillar.solution}</p>
                      </div>
                      <div className="flex items-start gap-3 pt-2">
                        <TrendingUp className="w-5 h-5 text-[hsl(var(--citisoft-dark))] flex-shrink-0 mt-0.5" />
                        <p className="text-slate-800 font-medium leading-relaxed">{pillar.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — LAND & EXPAND */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[hsl(var(--dark-bg))] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 blur-3xl" style={{ background: GRADIENT }} />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
            <SectionLabel dark>The CitiSoft approach</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-5 mb-4">
              Land &amp; expand — start small, compound fast
            </h2>
            <p className="text-lg text-white/60 font-light">
              Every engagement begins with a fixed-scope pilot. We prove measurable ROI on one
              workflow, then expand as trust compounds.
            </p>
          </Reveal>

          {/* Pilot → Measure → Expand strip */}
          <Reveal className="max-w-3xl mx-auto mb-14">
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
              {["Pilot", "Measure", "Expand"].map((step, i) => (
                <div key={step} className="flex items-center gap-3 flex-1">
                  <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 px-6 py-5 text-center">
                    <div className="text-[10px] uppercase tracking-widest text-[hsl(var(--citisoft-light))] font-bold mb-1">
                      Step {i + 1}
                    </div>
                    <div className="text-white font-semibold">{step}</div>
                  </div>
                  {i < 2 && (
                    <ArrowDown className="w-5 h-5 text-white/30 sm:hidden mx-auto" />
                  )}
                  {i < 2 && (
                    <ArrowRight className="w-5 h-5 text-white/30 hidden sm:block flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="max-w-5xl mx-auto">
            <LandExpandDiagram />
          </Reveal>
        </div>
      </section>

      {/* 7 — PILOT CTA */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[hsl(var(--citisoft-dark))] bg-[hsl(var(--citisoft-light))]/10 rounded-full uppercase tracking-wider mb-6">
              Pilot → Measure → Expand
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              Start with a 30-day paid pilot
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-xl mx-auto">
              We build the quoting agent on a single product line and track before-and-after
              metrics over thirty days — success defined by one agreed number, typically quote
              turnaround time or quotes processed per week. You see proof before committing to a
              broader rollout.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="group rounded-none px-10 font-semibold tracking-wide h-14">
                <Link to="/#contact">
                  Book your pilot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-10 font-semibold tracking-wide border-slate-300 hover:bg-slate-100 h-14"
              >
                <Link to="/#products">View all products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RfqIndustrialLanding;
