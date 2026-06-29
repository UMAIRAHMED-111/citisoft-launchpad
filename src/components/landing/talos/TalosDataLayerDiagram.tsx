import { useEffect, useRef, useState } from "react";
import {
  ShoppingBag,
  Truck,
  CalendarClock,
  Star,
  UtensilsCrossed,
  MessagesSquare,
  Layers,
  MessageSquare,
  ArrowDown,
  type LucideIcon,
} from "lucide-react";

// Every system you already run feeds the data layer
const SOURCES: { icon: LucideIcon; label: string }[] = [
  { icon: ShoppingBag, label: "POS" },
  { icon: Truck, label: "Delivery apps" },
  { icon: CalendarClock, label: "Scheduling" },
  { icon: Star, label: "Reviews" },
  { icon: UtensilsCrossed, label: "Catering" },
  { icon: MessagesSquare, label: "Team chats" },
];

// You ask inside the tools your team already uses
const CHANNELS = ["Slack", "WhatsApp", "Teams", "& more"];

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

const TalosDataLayerDiagram = () => {
  const { ref, shown } = useReveal();

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto">
      {/* Sources */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {SOURCES.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-3 py-4 text-center transition-all duration-700 ${
              shown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="flex w-10 h-10 rounded-xl items-center justify-center bg-white/10 text-white">
              <s.icon className="w-5 h-5" strokeWidth={2} />
            </span>
            <span className="text-[11px] sm:text-xs text-white/70 font-medium leading-tight">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Down arrows */}
      <div
        className={`flex justify-center py-3 transition-opacity duration-700 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "520ms" }}
      >
        <ArrowDown className="w-6 h-6 text-[#2bd4c0]" />
      </div>

      {/* Talos data layer */}
      <div
        className={`relative rounded-2xl p-6 sm:p-7 text-center bg-gradient-to-r from-[#0e3a3a] via-[#11605a] to-[#14807a] border border-[#2bd4c0]/40 shadow-lg shadow-[#0e3a3a]/40 transition-all duration-700 ${
          shown ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ transitionDelay: "560ms" }}
      >
        <div className="flex items-center justify-center gap-3 mb-1">
          <span className="flex w-10 h-10 rounded-xl items-center justify-center bg-white/15 text-white">
            <Layers className="w-5 h-5" strokeWidth={2} />
          </span>
          <span className="text-xl sm:text-2xl font-semibold text-white">Talos data layer</span>
        </div>
        <p className="text-white/70 text-sm font-light">
          One unified source of truth across every tool and every location
        </p>
      </div>

      {/* Down arrows */}
      <div
        className={`flex justify-center py-3 transition-opacity duration-700 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "640ms" }}
      >
        <ArrowDown className="w-6 h-6 text-[#2bd4c0]" />
      </div>

      {/* Ask in the channels you already use */}
      <div
        className={`rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-700 ${
          shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "680ms" }}
      >
        <div className="flex items-center justify-center gap-2 mb-4 text-white/60 text-xs uppercase tracking-widest font-semibold">
          <MessageSquare className="w-4 h-4" />
          Just ask, right inside
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {CHANNELS.map((c) => (
            <span
              key={c}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-medium"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalosDataLayerDiagram;
