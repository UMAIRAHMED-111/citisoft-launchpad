import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Layers,
  Unplug,
  Clock,
  HandHelping,
  LayoutDashboard,
  RefreshCw,
  Boxes,
  Rocket,
  MessageSquare,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import Footer from "@/components/landing/Footer";
import TalosVideoEmbed from "@/components/landing/talos/TalosVideoEmbed";
import TalosDataLayerDiagram from "@/components/landing/talos/TalosDataLayerDiagram";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop";
const GRADIENT = "linear-gradient(135deg, #0e3a3a 0%, #11605a 50%, #14807a 100%)";

const TOOLS = ["POS", "Delivery apps", "Scheduling", "Reviews", "Catering", "Team chats"];

// Section 2 — the problem ("you've become the glue")
const PAINS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Unplug,
    title: "A dozen tools that don't talk",
    body: "POS, delivery apps, scheduling, reviews, catering, team chats — each its own silo, none of them connected.",
  },
  {
    icon: HandHelping,
    title: "You become the glue",
    body: "Pulling numbers by hand, stitching spreadsheets together, and reconciling reports across systems every week.",
  },
  {
    icon: Clock,
    title: "Problems caught days too late",
    body: "By the time a bad channel or a staffing gap shows up in a report, the weekend's already gone.",
  },
];

// Section 4 — the plain-English questions
const QUESTIONS = [
  "How did we do this weekend?",
  "Which channel is actually most profitable?",
  "Is anyone short-staffed tomorrow?",
  "Which delivery app is costing us the most?",
];

// Section 6 — the four differentiators
const DIFFERENTIATORS: { icon: LucideIcon; label: string }[] = [
  { icon: LayoutDashboard, label: "No new dashboards" },
  { icon: RefreshCw, label: "No software to replace" },
  { icon: Boxes, label: "Sits on top of everything you already use" },
  { icon: Rocket, label: "Live in about 30 days" },
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

const SectionLabel = ({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-1 mb-4 rounded-full" style={{ background: GRADIENT }} />
    <span
      className={`text-sm font-semibold uppercase tracking-wider ${
        dark ? "text-[#2bd4c0]" : "text-[#11605a]"
      }`}
    >
      {children}
    </span>
  </div>
);

const TalosLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />

      {/* 1 — HERO */}
      <section className="relative pt-24 xs:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-[hsl(var(--dark-bg))]">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-20 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--dark-bg))]/70 via-[hsl(var(--dark-bg))]/85 to-[hsl(var(--dark-bg))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--dark-bg))]/90 to-transparent" />
        </div>
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/3 rounded-full blur-3xl opacity-25"
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
              <Layers className="w-4 h-4 shrink-0" strokeWidth={2.25} />
              For multi-unit restaurants
            </span>
            <h1
              className={`text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium sm:font-light text-white tracking-tight mb-6 sm:mb-8 leading-[1.1] transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              One data layer for your whole restaurant.{" "}
              <span
                className="font-semibold bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #2bd4c0, #5ef0d6)" }}
              >
                Just ask.
              </span>
            </h1>
            <p
              className={`text-base xs:text-lg sm:text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mb-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Running a restaurant means juggling a dozen tools that don't talk to each other.
              Talos connects every system you already run into a single data layer — then lets you
              ask, in plain English, right inside Slack, WhatsApp and Teams.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button asChild size="lg" className="group rounded-none px-8 font-semibold tracking-wide h-14">
                <Link to="/#contact">
                  Book a demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-8 font-semibold tracking-wide h-14 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#watch">Watch the video</a>
              </Button>
            </div>

            <div
              className={`flex flex-wrap gap-2 sm:gap-3 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {TOOLS.map((t) => (
                <span
                  key={t}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* 2 — THE PROBLEM */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-5 mb-4">
              Your tools don't talk — so you become the glue
            </h2>
            <p className="text-lg text-slate-500 font-light">
              POS, delivery apps, scheduling, reviews, catering, team chats. Every system is its own
              island, and the work of connecting them falls on you.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {PAINS.map((pain, i) => (
              <Reveal key={pain.title} delay={i * 90}>
                <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm h-full">
                  <span className="inline-flex w-12 h-12 rounded-xl items-center justify-center mb-5 bg-rose-50 text-rose-500 border border-rose-200">
                    <pain.icon className="w-6 h-6" strokeWidth={2} />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{pain.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{pain.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — VIDEO */}
      <section id="watch" className="py-16 sm:py-20 lg:py-28 bg-[hsl(var(--dark-bg))] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-15 blur-3xl" style={{ background: GRADIENT }} />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            <SectionLabel dark>See it in action</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-5 mb-4">
              Talos changes that
            </h2>
            <p className="text-lg text-white/60 font-light">
              Ninety seconds on how Talos turns a dozen disconnected tools into one place you can
              just ask.
            </p>
          </Reveal>

          <Reveal className="max-w-4xl mx-auto">
            <TalosVideoEmbed />
          </Reveal>
        </div>
      </section>

      {/* 4 — JUST ASK */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <Reveal>
              <SectionLabel>Just ask</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-5 mb-5">
                Plain English. Real answers. In seconds.
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                No queries, no new dashboards to learn. Ask the way you'd ask a great operations
                manager — right inside the tools your team already lives in — and Talos answers
                across every tool and every location.
              </p>
              <div className="flex items-center gap-3 text-[#11605a] font-medium">
                <Sparkles className="w-5 h-5" />
                Answers in seconds, across all your locations
              </div>
            </Reveal>

            <div className="space-y-3">
              {QUESTIONS.map((q, i) => (
                <Reveal key={q} delay={i * 90}>
                  {/* User question bubble */}
                  <div className="flex justify-end mb-1.5">
                    <div className="max-w-[85%] rounded-2xl rounded-br-sm px-4 py-3 text-white shadow-md" style={{ background: GRADIENT }}>
                      <p className="text-sm sm:text-base">{q}</p>
                    </div>
                  </div>
                  {/* Talos answer bubble */}
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3 bg-slate-100 border border-slate-200">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="flex w-5 h-5 rounded-md items-center justify-center text-white" style={{ background: GRADIENT }}>
                          <Layers className="w-3 h-3" />
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                          Talos
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 italic">
                        …pulls the answer from every system, instantly.
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — ONE DATA LAYER (diagram) */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[hsl(var(--dark-bg))] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-10 blur-3xl" style={{ background: GRADIENT }} />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <SectionLabel dark>How it works</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-5 mb-4">
              One data layer, sitting on top of everything
            </h2>
            <p className="text-lg text-white/60 font-light">
              Talos connects the systems you already run into a single source of truth — then lets
              you ask inside the chat tools your team already uses.
            </p>
          </Reveal>

          <Reveal>
            <TalosDataLayerDiagram />
          </Reveal>
        </div>
      </section>

      {/* 6 — DIFFERENTIATORS */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <SectionLabel>Why teams choose Talos</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-5 mb-4">
              No rip-and-replace. Just answers.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 max-w-4xl mx-auto">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.label} delay={i * 70}>
                <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm h-full">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white" style={{ background: GRADIENT }}>
                    <d.icon className="w-5 h-5" strokeWidth={2} />
                  </span>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#11605a] flex-shrink-0" />
                    <span className="text-slate-800 font-medium">{d.label}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — CTA */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[hsl(var(--dark-bg))] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] -translate-y-1/3 rounded-full blur-3xl opacity-20"
          style={{ background: GRADIENT }}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-[#2bd4c0] bg-white/5 border border-white/10 rounded-full uppercase tracking-wider mb-6">
              <MessageSquare className="w-4 h-4" />
              Live in about 30 days
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
              Once your data is unified, what you can build is limitless
            </h2>
            <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-xl mx-auto font-light">
              Talos — one data layer for your whole restaurant. Just ask. See it running on your own
              systems in about 30 days.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="group rounded-none px-10 font-semibold tracking-wide h-14">
                <Link to="/#contact">
                  Book a demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-10 font-semibold tracking-wide h-14 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
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

export default TalosLanding;
