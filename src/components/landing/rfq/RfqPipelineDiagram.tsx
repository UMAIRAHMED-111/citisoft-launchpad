import { useEffect, useRef, useState } from "react";
import {
  Mail,
  FileText,
  PencilRuler,
  Calculator,
  Clock,
  Snowflake,
  Sparkles,
  ScanSearch,
  Database,
  AlertTriangle,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type Variant = "problem" | "solution";

type Step = {
  icon: LucideIcon;
  label: string;
  sub: string;
};

const PROBLEM_STEPS: Step[] = [
  { icon: Mail, label: "Unstructured RFQ", sub: "Emails, spec sheets & drawings" },
  { icon: PencilRuler, label: "Manual interpretation", sub: "An engineer reads every enquiry" },
  { icon: Calculator, label: "Pricing lookup", sub: "Dig through catalogs & rules" },
  { icon: Clock, label: "Days of turnaround", sub: "A persistent quoting backlog" },
  { icon: Snowflake, label: "Deals go cold", sub: "Faster competitors win the order" },
];

const SOLUTION_STEPS: Step[] = [
  { icon: FileText, label: "RFQ in any format", sub: "Email, PDF, spec or drawing" },
  { icon: ScanSearch, label: "Extract requirements", sub: "Dimensions, materials, conditions" },
  { icon: Database, label: "Cross-reference catalog", sub: "Your own products & pricing rules" },
  { icon: AlertTriangle, label: "Flag the gaps", sub: "Missing or ambiguous info surfaced" },
  { icon: CheckCircle2, label: "Review-ready quote", sub: "Engineer approves & sends in minutes" },
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
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
};

const RfqPipelineDiagram = ({ variant }: { variant: Variant }) => {
  const isSolution = variant === "solution";
  const steps = isSolution ? SOLUTION_STEPS : PROBLEM_STEPS;
  const { ref, shown } = useReveal();

  // Problem path = muted/warning rose; Solution path = brand gradient
  const nodeBase = isSolution
    ? "border-[hsl(var(--citisoft-light))]/40 bg-white"
    : "border-rose-200 bg-white";
  const iconWrap = isSolution
    ? "bg-gradient-to-br from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] text-white"
    : "bg-rose-50 text-rose-500 border border-rose-200";
  const connector = isSolution
    ? "from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))]"
    : "from-rose-200 to-rose-300";

  return (
    <div ref={ref} className="relative">
      {/* The AI engine callout sits above the solution flow */}
      {isSolution && (
        <div
          className={`flex justify-center mb-8 transition-all duration-700 ${
            shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--citisoft-light))]/10 border border-[hsl(var(--citisoft-light))]/30 text-[hsl(var(--citisoft-dark))] text-xs font-semibold tracking-wide">
            <Sparkles className="w-4 h-4" />
            One AI Quoting Agent runs every step
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2 items-stretch">
        {steps.map((step, i) => (
          <div key={step.label} className="relative flex flex-col">
            {/* Node card */}
            <div
              className={`relative z-10 flex flex-col h-full rounded-2xl border ${nodeBase} p-5 shadow-sm transition-all duration-700 ${
                shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${iconWrap}`}
                >
                  <step.icon className="w-5 h-5" strokeWidth={2} />
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-slate-900 leading-snug mb-1">
                {step.label}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">{step.sub}</p>
            </div>

            {/* Connector to the next node (hidden on last) */}
            {i < steps.length - 1 && (
              <>
                {/* Horizontal connector on lg+ */}
                <div
                  className={`hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 -translate-y-1/2 bg-gradient-to-r ${connector} z-0 transition-opacity duration-700 ${
                    shown ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 120 + 80}ms` }}
                />
                {/* Vertical connector below on small screens */}
                <div
                  className={`lg:hidden mx-auto my-1 w-0.5 h-4 bg-gradient-to-b ${connector} transition-opacity duration-700 ${
                    shown ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 120 + 80}ms` }}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RfqPipelineDiagram;
