import { useEffect, useRef, useState } from "react";
import {
  FileSignature,
  BookOpen,
  ReceiptText,
  Wrench,
  FileText,
  Search,
  Workflow,
} from "lucide-react";

// The shared engine that powers every module
const ENGINE = [
  { icon: FileText, label: "Document understanding" },
  { icon: Search, label: "Retrieval over your catalog & history" },
  { icon: Workflow, label: "Workflow automation" },
];

// The four pillars deployed on top of the engine, in land-and-expand order
const MODULES = [
  { icon: FileSignature, label: "RFQ-to-Quote", tag: "Start here", primary: true },
  { icon: BookOpen, label: "Knowledge Agent", tag: "Expand" },
  { icon: ReceiptText, label: "Back-Office", tag: "Expand" },
  { icon: Wrench, label: "Aftermarket", tag: "Expand" },
];

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
};

const LandExpandDiagram = () => {
  const { ref, shown } = useReveal();

  return (
    <div ref={ref} className="relative">
      {/* Modules row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {MODULES.map((m, i) => (
          <div
            key={m.label}
            className={`relative rounded-2xl p-5 text-center transition-all duration-700 ${
              m.primary
                ? "bg-gradient-to-br from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] text-white shadow-lg shadow-[hsl(var(--citisoft-dark))]/30"
                : "bg-white/5 border border-white/10 text-white"
            } ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${i * 110}ms` }}
          >
            <span
              className={`inline-flex w-11 h-11 rounded-xl items-center justify-center mb-3 ${
                m.primary ? "bg-white/20" : "bg-white/10"
              }`}
            >
              <m.icon className="w-5 h-5" strokeWidth={2} />
            </span>
            <div className="text-sm font-semibold leading-snug">{m.label}</div>
            <div
              className={`mt-1 text-[10px] uppercase tracking-widest font-bold ${
                m.primary ? "text-white/80" : "text-[hsl(var(--citisoft-light))]"
              }`}
            >
              {m.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Connector band */}
      <div
        className={`flex items-center justify-center gap-2 py-3 transition-opacity duration-700 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "480ms" }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold">
          all powered by one engine
        </span>
      </div>

      {/* Shared engine */}
      <div
        className={`rounded-2xl border border-[hsl(var(--citisoft-light))]/30 bg-[hsl(var(--citisoft-light))]/5 p-6 transition-all duration-700 ${
          shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: "560ms" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {ENGINE.map((e) => (
            <div key={e.label} className="flex items-center gap-3 justify-center text-center">
              <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[hsl(var(--citisoft-light))]/15 text-[hsl(var(--citisoft-light))] flex items-center justify-center">
                <e.icon className="w-4 h-4" strokeWidth={2} />
              </span>
              <span className="text-sm text-white/80 font-light text-left">{e.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-white/50 text-sm font-light mt-6 max-w-2xl mx-auto">
        Because every module runs on the same engine, each one deploys faster and at lower
        cost than the one before — value compounds as trust builds.
      </p>
    </div>
  );
};

export default LandExpandDiagram;
